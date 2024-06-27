import React, { useEffect, useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import "./BuyBondsBru.scss";
import usdt from "../../src/assets/image/usdt.png";
import polygon from "../../src/assets/image/polygon_logo.png";
import usdc from "../../src/assets/image/usdc.png";
import buy from "../../src/assets/image/buy.png";
import baseLogo from "../../src/assets/image/base.png"
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
import { buyBonds } from "../utility/routerweb3";
import { useActiveAccount, useActiveWalletChain } from "thirdweb/react";
import { ethers5Adapter } from "thirdweb/adapters/ethers5";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
    clientId: "8b47ef3dc283abe26da04b0549a7d6e8",
});

const BuyBondsBru = ({ open, handleClose }) => {
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
                environment.contracts[chainId].PoolAddress,
                signer,
                chainId,
            );
            setApprovedBalance(parseFloat(data));
        };
        getData();
    }, [address, signer, selectedOption, loading, chainId]);

    const allowToken = async () => {
        setLoading(true);

        let data = await approveToken(
            selectedOption.id == 1 ? "USDT" : "USDC",
            environment.contracts[chainId].PoolAddress,
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

    const depositToken = async () => {
        setLoading(true);

        if (!number || parseFloat(number) <= 0) {
            toast.error(`Enter min number`);
            setLoading(false);
            return;
        }
        let data = await buyBonds(
            selectedOption.id == 1 ? "USDT" : "USDC",
            number,
            signer,
            chainId,
        );
        if (!data) {
            toast.error(`Error While Transaction`);
            setLoading(false);
            return;
        }
        toast.success(`Transaction Complete`);
        setNumber(0);
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
                        <Modal.Title>
                            <img src={buy} alt="" /> &nbsp; Buy Bond
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {!first ? (
                            <div className="section-content">
                                <div className="tab">
                                    <li>
                                        Name :{" "}
                                        <span style={{ color: "#7c037b" }}>
                                            IndiaAgro
                                        </span>
                                    </li>
                                    <li>
                                        Collateral Type :{" "}
                                        <span style={{ color: "#7c037b" }}>
                                            Agri Commodity
                                        </span>
                                    </li>
                                    <li>
                                        Lock-in Period :{" "}
                                        <span style={{ color: "#7c037b" }}>
                                            180 days seconds
                                        </span>
                                    </li>
                                    <li>
                                        APY ( % ) :{" "}
                                        <span style={{ color: "#7c037b" }}>
                                            8.00% per annum
                                        </span>
                                    </li>
                                </div>
                                <div className="flex-col">
                                    <p>Network</p>
                                    <div className="select-crypto">
                                        <img src={environment.contracts[chainId]?.InfuraName == "base" ? baseLogo : polygon} alt="token" width="20px" />
                                        <p style={{ borderLeft: "none" }}>
                                            {chainId
                                                ? environment.contracts[chainId]
                                                    ?.name
                                                : " Polygon Network"}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-col no-pad-mar">
                                    <p>Supported Coins</p>
                                    <div
                                        className="select-crypto"
                                        style={{
                                            cursor: "pointer",
                                            position: "relative",
                                        }}
                                        onClick={() => setDropdown(!dropdown)}
                                    >
                                        <img
                                            src={selectedOption?.image}
                                            alt=""
                                        />
                                        <p style={{ borderLeft: "none" }}>
                                            {selectedOption?.label}
                                        </p>
                                        <FaSortDown
                                            style={{
                                                position: "absolute",
                                                right: "12px",
                                                marginBottom: "5px",
                                                width: "20px",
                                                height: "20px",
                                                color: "grey",
                                            }}
                                        />
                                    </div>
                                </div>
                                {dropdown &&
                                    array?.map((obj) => {
                                        return (
                                            <div className="dropdown">
                                                <div
                                                    className="select-crypto"
                                                    onClick={() => {
                                                        setSelectedOption({
                                                            id: obj?.id,
                                                            label: obj?.label,
                                                            image: obj?.image,
                                                        });
                                                        setDropdown(false);
                                                    }}
                                                    style={{
                                                        cursor: "pointer",
                                                        position: "relative",
                                                    }}
                                                >
                                                    <img
                                                        src={obj?.image}
                                                        alt=""
                                                    />
                                                    <p
                                                        style={{
                                                            borderLeft: "none",
                                                        }}
                                                    >
                                                        {obj?.label}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                <div className="flex-col">
                                    <p>Available Balance</p>
                                    <div className="select-crypto">
                                        <img
                                            src={selectedOption.image}
                                            alt=""
                                        />
                                        <p style={{ borderLeft: "none" }}>
                                            {selectedOption.label}{" "}
                                            {selectedTokenBalance}
                                        </p>
                                    </div>
                                </div>
                                <div className="btn">
                                    <button
                                        className="btn-continue"
                                        onClick={() => setFirst(true)}
                                        disabled={
                                            selectedTokenBalance > 0
                                                ? false
                                                : true
                                        }
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="flex-col">
                                    <p>Enter Amount</p>
                                    <div className="amount">
                                        <span>{selectedOption.label}</span>
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
                                <div className="flex-col">
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
                                                ${" "}
                                                {number > 0 ? number / 100 : 0}
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
                                </div>
                                {approvedBalance > number ? (
                                    <div className="btn">
                                        <button
                                            className="btn-continue"
                                            onClick={depositToken}
                                        // onClick={allowToken}
                                        >
                                            Buy Bonds
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
                        )}
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

export default BuyBondsBru;
