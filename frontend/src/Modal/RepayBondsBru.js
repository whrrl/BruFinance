import React, { useEffect, useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import "./BuyBondsBru.scss";
import usdt from "../../src/assets/image/usdt.png";
import polygon from "../../src/assets/image/polygon_logo.png";
import usdc from "../../src/assets/image/usdc.png";
import buy from "../../src/assets/image/buy.png";
import TrStatus from "./TrStatus";
import { FaSortDown } from "react-icons/fa6";
import { useAddress, useChainId, useSigner } from "@thirdweb-dev/react";
import {
    approveToken,
    getTokenAllowance,
    getTokenBalance,
} from "../utility/token";
import { environment } from "../environments/environment";
import { toast } from "react-toastify";
import { BorrowBond, RepayBond, buyBonds } from "../utility/routerweb3";
import { convertToSmallestMegaUnit } from "../services/web3Service";
import { updateNFtDataBowwor } from "../services/apiService";
import { getREpayAmount } from "../utility/pool";

const RepayBondsBru = ({ open, handleClose, nftData, usdPrice }) => {
    const [number, setNumber] = useState();
    const [trStatus, setTrStatus] = useState(false);
    const [first, setFirst] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        id: 2,
        label: "USD Coin (USDC)",
        image: usdc,
    });

    const array = [
        { id: 1, label: "Tether (USDT)", image: usdt },
        { id: 2, label: "USD Coin (USDC)", image: usdc },
    ];

    const address = useAddress();
    const signer = useSigner();
    const chainId = useChainId();

    const [selectedTokenBalance, setSelectedTokenBalance] = useState(0);
    const [loading, setLoading] = useState(false);
    const [approvedBalance, setApprovedBalance] = useState(0);
    const [repayAmount, setRepayAmount] = useState(0);

    useEffect(() => {
        if (!address || !signer) return;
        const getData = async () => {
            setSelectedTokenBalance(0);
            let getTokenBal = await getTokenBalance(
                address,
                "USDC",
                signer,
                chainId,
            );
            setSelectedTokenBalance(parseFloat(getTokenBal).toFixed(3));
            let data = await getTokenAllowance(
                address,
                "USDC",
                environment.contracts[chainId].RouterAddress,
                signer,
                chainId,
            );
            setApprovedBalance(parseFloat(data));

            let repayData = await getREpayAmount(signer, nftData?._id, chainId);
            setRepayAmount(parseFloat(repayData));
        };
        getData();
    }, [address, signer, selectedOption, loading, chainId]);

    const allowToken = async () => {
        setLoading(true);

        let data = await approveToken(
            "USDC",
            environment.contracts[chainId].RouterAddress,
            signer,
            chainId,
        );
        console.log("%c Line:131 🍻 data", "color:#465975", data);
        if (!data) {
            toast.error(`Error While Transaction`);
            setLoading(false);
            return;
        }
        toast.success(`Approved successfully`);
        setLoading(false);
    };

    const RepayBondToken = async () => {
        setLoading(true);
        let data = await RepayBond(
            signer,
            chainId,
            number,
            nftData._id,
            "USDC",
        );
        console.log("%c Line:131 🍻 data", "color:#465975", data);
        if (!data) {
            toast.error(`Error While Transaction`);
            setLoading(false);
            return;
        }
        let sendData = await updateNFtDataBowwor(nftData._id, {
            repaidAmount: [convertToSmallestMegaUnit(number)],
            repayTxHash: [data.hash],
            interest: [repayAmount - nftData?.borrowedAmount],
            rAmountInINR: number / usdPrice,
        });
        console.log("%c Line:86 🥕 sendData", "color:#93c0a4", sendData);
        toast.success(`Borrowed successfully`);
        setLoading(false);
    };

    return (
        <>
            <div className="modal-div">
                <Modal
                    show={open}
                    onHide={handleClose}
                    className="buy-bonds-bru"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Repay Bond</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="flex-col">
                                <p>Enter Amount</p>
                                <div className="amount">
                                    {/* <span>{selectedOption.label}</span> */}
                                    <input
                                        value={number}
                                        onChange={(e) =>
                                            setNumber(e.target.value)
                                        }
                                        placeholder="Amount"
                                        type="number"
                                    />
                                </div>
                            </div>
                            {/* <div className="flex-col">
                                <p>Price Breakup</p>
                                <div className="price-breakup">
                                    <div className="tab-row">
                                        <p>Conversion Amount</p>
                                        <p style={{ color: "#7c037b" }}>
                                            $ {number}
                                        </p>
                                    </div>{" "}
                                    <div className="tab-row">
                                        <p>Platform fees </p>
                                        <p style={{ color: "#7c037b" }}>
                                            $ {number > 0 ? number / 100 : 0}
                                        </p>
                                    </div>{" "}
                                    <div
                                        className="tab-row"
                                        style={{
                                            borderTop: "1px solid grey",
                                            fontWeight: 500,
                                        }}
                                    >
                                        <p>Total Amount </p>
                                        <p style={{ color: "#7c037b" }}>
                                            ${" "}
                                            {number > 0
                                                ? parseFloat(number) +
                                                  parseFloat(number / 100)
                                                : 0}
                                        </p>
                                    </div>{" "}
                                    <div
                                        className="tab-row"
                                        style={{
                                            borderTop: "1px solid grey",
                                        }}
                                    >
                                        <p>Brú Bonds you'll receive </p>
                                        <p style={{ color: "#7c037b" }}>
                                            $ {number}
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                            {loading ? (
                                <div className="btn">
                                    <button
                                        className="btn-continue"
                                    // onClick={depositToken}
                                    // onClick={allowToken}
                                    >
                                        Loading...
                                    </button>
                                </div>
                            ) : approvedBalance > number ? (
                                <div className="btn">
                                    <button
                                        className="btn-continue"
                                        onClick={RepayBondToken}
                                    // onClick={allowToken}
                                    >
                                        Repay Bonds
                                    </button>
                                </div>
                            ) : (
                                <div className="btn">
                                    <button
                                        className="btn-continue"
                                        onClick={allowToken}
                                    >
                                        Approve {selectedOption.label}
                                    </button>
                                </div>
                            )}
                            {/* <div className="btn">
                                    <button
                                        className="btn-continue"
                                        onClick={() => setTrStatus(true)}
                                    >
                                        Buy Bonds
                                    </button>
                                </div> */}
                        </div>
                    </Modal.Body>
                </Modal>
                <TrStatus
                    open={trStatus}
                    handleClose={setTrStatus}
                    setBuyBondsModal={handleClose}
                    err={
                        number
                            ? "You don't have enough balance in your wallet"
                            : "Amount should not be 0"
                    }
                />
            </div>
        </>
    );
};

export default RepayBondsBru;
