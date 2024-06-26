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
import { BorrowBond, buyBonds } from "../utility/routerweb3";
import { convertToSmallestMegaUnit } from "../services/web3Service";
import { updateNFtDataBowwor } from "../services/apiService";
import { useActiveAccount, useActiveWalletChain } from "thirdweb/react";
import { ethers5Adapter } from "thirdweb/adapters/ethers5";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
    clientId: "8b47ef3dc283abe26da04b0549a7d6e8",
});


const BorrowBondsBru = ({ open, handleClose, nftData, usdPrice }) => {
    const [number, setNumber] = useState();
    const [trStatus, setTrStatus] = useState(false);
    const [first, setFirst] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        id: 1,
        label: "Tether (USDT)",
        image: usdt,
    });

    const array = [
        { id: 1, label: "Tether (USDT)", image: usdt },
        { id: 2, label: "USD Coin (USDC)", image: usdc },
    ];

    // const address = useAddress();
    // const signer = useSigner();
    // const chainId = useChainId();

    const [address, setAddress] = useState("")
    const [chainId, setChainId] = useState("")
    const [signer, setSigner] = useState("")


    const add = useActiveAccount()
    const chain = useActiveWalletChain();

    useEffect(() => {
        if (add && add.address) {
            console.log("%c Line:80 🍷 add", "color:#33a5ff", add);
            setAddress(add.address)
            if (chain && chain.id && chain.rpc) {
                setChainId(chain.id)
                console.log("%c Line:81 🍰 chain", "color:#33a5ff", chain);
                setSignerFun(chain, add)
            }
        }
    }, [add, chain])

    const setSignerFun = async (chain, addr) => {
        const sign = await ethers5Adapter.signer.toEthers({ client, chain, account: addr });
        console.log("%c Line:68 🍬 sign", "color:#3f7cff", sign);
        setSigner(sign)
    }

    const [selectedTokenBalance, setSelectedTokenBalance] = useState(0);
    const [loading, setLoading] = useState(false);
    const [approvedBalance, setApprovedBalance] = useState(0);

    useEffect(() => {
        if (!address || !signer) return;
        const getData = async () => {
            setSelectedTokenBalance(0);
            let getTokenBal = await getTokenBalance(
                address,
                selectedOption.id == 1 ? "USDT" : "USDC",
                signer,
                chainId,
            );
            setSelectedTokenBalance(parseFloat(getTokenBal).toFixed(3));
            let data = await getTokenAllowance(
                address,
                selectedOption.id == 1 ? "USDT" : "USDC",
                environment.contracts[chainId].RouterAddress,
                signer,
                chainId,
            );
            setApprovedBalance(parseFloat(data));
        };
        getData();
    }, [address, signer, selectedOption, loading, chainId]);

    const BorrowBondToken = async () => {
        setLoading(true);
        let data = await BorrowBond(
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
            borrowed: true,
            borrowedAmount: convertToSmallestMegaUnit(number),
            borrowTxHash: data?.hash,
            bAmountInINR: number / usdPrice,
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
                        <Modal.Title>Borrow Bond</Modal.Title>
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
                            ) : (
                                <div className="btn">
                                    <button
                                        className="btn-continue"
                                        onClick={BorrowBondToken}
                                    >
                                        Borrow Bond
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

export default BorrowBondsBru;
