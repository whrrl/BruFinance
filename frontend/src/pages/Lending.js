import React, { useEffect, useState } from "react";
import user from "../assets/image/user2.png";
import money from "../assets/image/money-bag.png";
import tether from "../assets/image/tether1.png";
import bond_black from "../assets/image/bond_black.svg";
import white_wallet from "../assets/image/wallet_white.svg";
import black_wallet from "../assets/image/wallet_black.svg";
import holding from "../assets/image/vault_black.svg";
import arrow from "../assets/image/Vector43.png";
import bond_white from "../assets/image/bond_white.png";
import poly from "../assets/image/polygon_logo.png";
import baseLogo from "../assets/image/base.png";
import vault_white from "../assets/image/vault_white.png";
import { ImCopy } from "react-icons/im";
import {
    useAddress,
    useChain,
    useChainId,
    useSigner,
} from "@thirdweb-dev/react";
import { TfiFaceSad } from "react-icons/tfi";
import Withdraw from "../Modal/Withdraw";
import PoolComposition from "../Modal/PoolComposition";
import BuyBondsPool from "../Modal/BuyBondsPool";
import sprout from "../assets/image/sprout1.png";
import ShowBond from "../Modal/ShowBond";
import BuyBondsBru from "../Modal/BuyBondsBru";
import { environment } from "../environments/environment";
import { getTokenBalance } from "../utility/token";
import { getUserBondIds } from "../utility/pool";
import { Button } from "react-bootstrap";
import copy from "copy-to-clipboard";
import { useActiveAccount, useActiveWalletChain, } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { ethers5Adapter } from "thirdweb/adapters/ethers5";
import { getTotalDepositors } from "../services/apiService";


const client = createThirdwebClient({
    clientId: "8b47ef3dc283abe26da04b0549a7d6e8",
});


const Lending = () => {
    const [toggleNav, setToggleNav] = useState("BruBonds");
    const [withdrawModal, setWithdrawModal] = useState(false);
    const [PoolCompositionModal, setPoolCompositionModal] = useState(false);
    const [buyBondsModal, setBuyBondsModal] = useState(false);
    const [buyBondsBruModal, setBuyBondsBruModal] = useState(false);
    const [showBondModal, setShowBondModal] = useState(false);


    const [trxData, setTrxData] = useState([]);

    const trx = async () => {
        const trxData = await getTotalDepositors();
        //console.log(trxData,'data')
        if (trxData.success) {
            console.log("%c Line:14 🍯 trxData", "color:#4fff4B", trxData);
            setTrxData(trxData)
        }
    }

    useEffect(() => {
        trx()
    }, [])


    //console.log(toggleNav, "nav");

    const formatAddress = (address) => {
        if (address) {
            const first = address.slice(0, 13);
            const last = address.slice(-6);
            return `${first}...........${last}`;
        }
    };

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

    const [usdtBalance, setUsdtBalance] = useState(0);
    const [usdcBalance, setUsdcBalance] = useState(0);
    const [bruBondBalance, setBruBondBalance] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!address || !signer) return;
        console.log("%c Line:114 🍡 signer", "color:#ffdd4d", signer);
        const getData = async () => {
            let getTokenBal = await getTokenBalance(
                address,
                "USDT",
                signer,
                chainId,
            );
            setUsdtBalance(parseFloat(getTokenBal).toFixed(3));

            let getTokenBalusdc = await getTokenBalance(
                address,
                "USDC",
                signer,
                chainId,
            );
            setUsdcBalance(parseFloat(getTokenBalusdc).toFixed(3));

            let getMyBondData = await getUserBondIds(signer, address, chainId);
            console.log(
                "%c Line:77 🥪 getMyBondData",
                "color:#7f2b82",
                getMyBondData,
            );
            setBruBondBalance(getMyBondData);
        };
        getData();
    }, [address, signer, loading, chainId]);

    const copyAddress = (add) => {
        copy(add)
    }
    return (
        <div className="lending">
            <div className="top-section">
                <h1>Buy Bonds</h1>
                <p>
                    Bonds give access to high and stable yield investment
                    opportunities secured by emerging market real world assets.
                </p>
            </div>
            <div className="toggle-btns">
                <button className="active">Buy Bonds</button>
                <button>Borrow</button>
            </div>
            <div className="connection-stats">
                <div className="deposit-inner-div">
                    <div className="b-top">
                        <p className="a-icon">
                            <img src={user} alt="user"></img>
                            <span>Total number of depositors</span>
                        </p>
                        <p>
                            <img src={arrow} alt="arrow"></img>
                            <span className="assets-val">{trxData?.totalAssets}</span>
                        </p>
                    </div>
                    <div className="d-bottom">
                        <a
                            rel="noreferrer"
                            href="https://polygonscan.com/token/0xf0c8CE0aE6c3EBbD2b057cD85bbF4045344DA02B"
                            target="_blank"
                        >
                            View depositors on polygon network
                        </a>
                    </div>
                </div>
                <div className="assets-inner-div">
                    <div className="a-top">
                        <p className="a-icon">
                            <img
                                src={tether}
                                alt="tether"
                                className="tether1"
                            ></img>
                            <span>Total value of assets (in USDT)</span>
                        </p>
                        <p>
                            <img src={arrow} alt="arrow"></img>
                            <span className="assets-val">$ {trxData?.totalAssetsValue}</span>
                        </p>
                    </div>
                    <div className="a-bottom">
                        <a
                            rel="noreferrer"
                            href="https://polygonscan.com/address/0xc345e8f86E7EFbCB2cC4302b2dE116E4EBB727bA"
                            target="_blank"
                        >
                            View assets on polygon network
                        </a>
                    </div>
                </div>
                <div className="assets-inner-div">
                    <div className="a-top">
                        <p className="a-icon">
                            <img src={money} alt="bag"></img>
                            <span>Total Loan Amount</span>
                        </p>
                        <p>
                            <img src={arrow} alt="arrow"></img>
                            <span className="assets-val">$ {trxData?.totalAssetsValueMinted}</span>
                        </p>
                    </div>
                    <div className="a-bottom">
                        <a
                            rel="noreferrer"
                            href="https://polygonscan.com/address/0xc345e8f86E7EFbCB2cC4302b2dE116E4EBB727bA"
                            target="_blank"
                        >
                            View assets on polygon network
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="bond-details">
                    <div className="section-nav">
                        <div id="p-network">
                            <button>
                                <img src={environment.contracts[chainId]?.InfuraName == "base" ? baseLogo : poly} alt="token" width="20px" />
                                {chainId
                                    ? environment.contracts[chainId]?.name
                                    : ""}
                            </button>
                        </div>
                        <hr style={{ color: "grey", width: "100%" }} />
                        <div
                            onClick={() => {
                                setToggleNav("BruBonds");
                            }}
                            className={
                                toggleNav === "BruBonds"
                                    ? "toggle-nav-active"
                                    : "toggle-nav"
                            }
                        >
                            {toggleNav === "BruBonds" ? (
                                <img src={bond_white} alt="bond"></img>
                            ) : (
                                <img src={bond_black} alt="bond"></img>
                            )}
                            <p>Bru Bonds</p>
                        </div>
                        <div
                            onClick={() => {
                                setToggleNav("MyHold");
                            }}
                            className={
                                toggleNav === "MyHold"
                                    ? "toggle-nav-active"
                                    : "toggle-nav"
                            }
                        >
                            {toggleNav === "MyHold" ? (
                                <img src={vault_white} alt="holdings"></img>
                            ) : (
                                <img src={holding} alt="holdings"></img>
                            )}
                            <p>My Holdings</p>
                        </div>
                        <div
                            onClick={() => {
                                setToggleNav("MyWallet");
                            }}
                            className={
                                toggleNav === "MyWallet"
                                    ? "toggle-nav-active"
                                    : "toggle-nav"
                            }
                        >
                            {toggleNav === "MyWallet" ? (
                                <img src={white_wallet} alt="wallet"></img>
                            ) : (
                                <img src={black_wallet} alt="wallet"></img>
                            )}
                            <p>My Wallet</p>
                        </div>
                    </div>
                    <div className="main-section">
                        {toggleNav === "BruBonds" ? (
                            <div className="section-content">
                                <h3 id="section-txt">
                                    Bonds offer by Brú Finance
                                </h3>
                                <div className="bonds-container">
                                    <img src={sprout} alt="" />
                                    <div className="bonds-sub-container">
                                        <div className="tab-row">
                                            <p>
                                                Pool Name :{" "}
                                                <span
                                                    style={{ color: "#7c037b" }}
                                                >
                                                    IndiaAgro
                                                </span>
                                            </p>
                                            <p>
                                                A.P.Y. (P.A.) :{" "}
                                                <span
                                                    style={{ color: "#7c037b" }}
                                                >
                                                    8.00 % per annum
                                                </span>
                                            </p>
                                        </div>
                                        <div className="tab-row second">
                                            <p>
                                                Lock-in Period :{" "}
                                                <span
                                                    style={{ color: "#7c037b" }}
                                                >
                                                    180 days
                                                </span>
                                            </p>
                                            <p>
                                                Collateral Type :{" "}
                                                <span
                                                    style={{ color: "#7c037b" }}
                                                >
                                                    Agri Commodity
                                                </span>
                                            </p>
                                        </div>
                                        <div className="third">
                                            <div className="third-tab">
                                                <p
                                                    onClick={() =>
                                                        setShowBondModal(true)
                                                    }
                                                >
                                                    Show Bonds
                                                </p>
                                                <p>Total Issued Bonds : $ {bruBondBalance?.bondAmount
                                                        ? bruBondBalance?.bondAmount?.toFixed(
                                                            3,
                                                        )
                                                        : 0.0}{" "}</p>
                                            </div>
                                            <button
                                                className="btn-continue"
                                                onClick={() =>
                                                    setBuyBondsBruModal(true)
                                                }
                                            >
                                                Buy Bonds
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : toggleNav === "MyHold" ? (
                            <div className="section-content">
                                <table
                                    style={{ width: "100%", marginTop: "10px" }}
                                >
                                    <thead className="thead">
                                        <tr>
                                            <th>Pool Name</th>
                                            <th>APY (%)</th>
                                            <th>Balance in Pool</th>
                                            <th>Withdrawable Balance</th>
                                            <th>Collateral Type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tbody">
                                        <tr>
                                            <td
                                            // onClick={() =>
                                            //     setPoolCompositionModal(
                                            //         true,
                                            //     )
                                            // }
                                            >
                                                <span className="span"></span>
                                                IndiaAgro{" "}
                                            </td>
                                            <td>8.00 % p.a</td>
                                            <td>
                                                USD{" "}
                                                {bruBondBalance?.bondAmount
                                                    ? bruBondBalance?.bondAmount?.toFixed(
                                                        3,
                                                    )
                                                    : 0.0}
                                            </td>
                                            <td>
                                                USD{" "}
                                                {bruBondBalance?.totalWithdrawableAmount
                                                    ? bruBondBalance?.totalWithdrawableAmount?.toFixed(
                                                        3,
                                                    )
                                                    : 0.0}
                                            </td>
                                            <td>Agri Commodity</td>
                                            <td
                                                onClick={() =>
                                                    setWithdrawModal(true)
                                                }
                                            >
                                                Withdraw
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="section-content">
                                <h3>My Wallet</h3>
                                <div className="inner-section">
                                    <div className="leftSectionWallet">
                                        <div className="wallet-heading">
                                            <p>MetaMask Wallet</p>
                                            <span className="connectedText">
                                                Connected
                                            </span>
                                        </div>
                                        <p className="walletSubtitle">
                                            Wallet Address
                                        </p>
                                        <p className="walletValues">
                                            {formatAddress(address)}
                                            <span onClick={() => { copyAddress(address) }} className="copyIcon">
                                                {/* <i className="fa fa-copy"></i> */}
                                                <ImCopy />
                                            </span>
                                        </p>
                                        <p className="walletSubtitle">Assets</p>
                                        <div className="walletDiv">
                                            <div className="assets">
                                                USD Tether :{" "}
                                                <span
                                                    style={{ color: "#7c037b" }}
                                                >
                                                    {usdtBalance}
                                                </span>
                                            </div>
                                            <div className="assets">
                                                USD Coin :{" "}
                                                <span
                                                    style={{ color: "#7c037b" }}
                                                >
                                                    {usdcBalance}
                                                </span>
                                            </div>
                                            <div className="assets">
                                                Brú Bonds :{" "}
                                                <span
                                                    style={{ color: "#7c037b" }}
                                                >
                                                    {
                                                        bruBondBalance
                                                            ?.tokenAmount
                                                            ?.length
                                                    }
                                                </span>{" "}
                                                ( ${" "}
                                                {bruBondBalance?.bondAmount?.toFixed(
                                                    3,
                                                )}{" "}
                                                )
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightSectionWallet">
                                        <div className="inner-rightSection">
                                            <div className="header">
                                                <p>Total Lending</p>
                                                <p>
                                                    USDT{" "}
                                                    {bruBondBalance?.bondAmount
                                                        ? bruBondBalance?.bondAmount?.toFixed(
                                                            3,
                                                        )
                                                        : 0.0}{" "}
                                                </p>
                                            </div>
                                            {bruBondBalance?.tokenAmount &&
                                                bruBondBalance?.tokenAmount
                                                    ?.length > 0 ? (
                                                <table
                                                    style={{
                                                        width: "100%",
                                                        marginTop: "10px",
                                                    }}
                                                >
                                                    <thead className="thead">
                                                        <tr>
                                                            <th>Principal</th>
                                                            <th>Interest</th>
                                                            <th>
                                                                Investment Date
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="tbody">
                                                        {bruBondBalance?.tokenAmount &&
                                                            bruBondBalance
                                                                ?.tokenAmount
                                                                ?.length > 0 ? (
                                                            bruBondBalance?.tokenAmount.map(
                                                                (ele) => (
                                                                    <tr>
                                                                        <td>
                                                                            USD{" "}
                                                                            {
                                                                                ele?.bondAmount
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                ele?.interest
                                                                            }{" "}
                                                                            %
                                                                            p.a
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                ele?.depositTime
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                ),
                                                            )
                                                        ) : (
                                                            <div className="assets">
                                                                No matured bonds
                                                            </div>
                                                        )}
                                                    </tbody>
                                                </table>
                                            ) : (
                                                <div className="container">
                                                    <TfiFaceSad
                                                        style={{
                                                            color: "grey",
                                                            width: "36px",
                                                            height: "36px",
                                                        }}
                                                    />
                                                    Sorry, no transactions.
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* // <div className="section-content">
                        //     <h3>My Wallet</h3>
                        //     <div className="inner-section">
                        //         <div className="leftSectionWallet">
                        //             <div className="wallet-heading">
                        //                 <p>MetaMask Wallet</p>
                        //                 <span>Connected</span>
                        //             </div>
                        //             <p className="walletSubtitle">Wallet Address</p>
                        //             <p className="walletValues">
                        //                 <span className="copyIcon">
                        //                     <i className="fa fa-copy"></i>
                        //                 </span>
                        //             </p>
                        //             <p className="walletSubtitle">Assets</p>
                        //             <div className="walletDiv">
                        //             </div>
                        //         </div>
                        //         <div className="rightSectionWallet">
                        //             <div className="inner-rightSection">
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div> */}
                    </div>
                </div>
            </div>
            <Withdraw open={withdrawModal} handleClose={setWithdrawModal} />
            <PoolComposition
                open={PoolCompositionModal}
                handleClose={setPoolCompositionModal}
                setBuyBondsModal={setBuyBondsModal}
            />
            <BuyBondsPool open={buyBondsModal} handleClose={setBuyBondsModal} />
            <BuyBondsBru
                open={buyBondsBruModal}
                handleClose={setBuyBondsBruModal}
            />
            <ShowBond open={showBondModal} handleClose={setShowBondModal} />
        </div>
    );
};

export default Lending;
