import React, { useEffect, useState } from "react";
import user from "../assets/image/user2.png";
import rice from "../assets/image/Rice.jpg";
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
import copy from "copy-to-clipboard";
import { getTokenBalance } from "../utility/token";
import { getUserBondIds } from "../utility/pool";
import { useAddress, useChainId, useSigner } from "@thirdweb-dev/react";
import { TfiFaceSad } from "react-icons/tfi";
import {
    getInrToUsdPrice,
    getNftData,
    getTotalDepositors,
    updateNFtDataMint,
} from "../services/apiService";
import { getPoolDetails } from "../utility/factory";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { convertToSmallestMegaUnit } from "../services/web3Service";
import { mintNFTTreasury } from "../utility/assetTreasury";
import BorrowBondsBru from "../Modal/BorrowBondsBru";
import { createThirdwebClient } from "thirdweb";
import { ethers5Adapter } from "thirdweb/adapters/ethers5";
import { useActiveAccount, useActiveWalletChain, } from "thirdweb/react";
import { environment } from "../environments/environment";

const client = createThirdwebClient({
    clientId: "8b47ef3dc283abe26da04b0549a7d6e8",
});

const Borrow = () => {
    const [toggleNav, setToggleNav] = useState("ReceiptView");

    //console.log(toggleNav,'nav')
    const copyAddress = (add) => {
        copy(add);
    };

    const formatAddress = (address) => {
        if (address) {
            const first = address.slice(0, 13);
            const last = address.slice(-6);
            return `${first}...........${last}`;
        }
    };

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

    const [usdtBalance, setUsdtBalance] = useState(0);
    const [usdcBalance, setUsdcBalance] = useState(0);
    const [bruBondBalance, setBruBondBalance] = useState("");
    const [loading, setLoading] = useState(false);
    const [nftData, setnftData] = useState();
    const [pollDetails, setPoolDetails] = useState("");
    const [inrToUsdPrice, setInrToUsdPrice] = useState(0.01199676);
    const [buyBondsBruModal, setBuyBondsBruModal] = useState(false);
    const [selectedNftData, setSelectedData] = useState("");

    useEffect(() => {
        let body = {
            skip: "0",
            limit: "50",
            networkId: address,
        };
        getNftData(body)
            .then((res) => {
                console.log("%c Line:39 🍭 res", "color:#6ec1c2", res);
                if (res?.success) {
                    setnftData(res?.data);
                }
            })
            .catch((e) => {
                console.log("%c Line:42 🌶 e", "color:#6ec1c2", e);
            });
    }, []);

    useEffect(() => {
        if (!address || !signer) return;
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

    useEffect(() => {
        if (!address || !signer) return;
        const getData = async () => {
            let getTokenBal = await getPoolDetails(signer, chainId);
            setPoolDetails(getTokenBal);
        };
        getData();
    }, [address, signer, loading, chainId]);

    useEffect(() => {
        const getData = async () => {
            let getTokenBal = await getInrToUsdPrice();
            console.log(
                "%c Line:114 🌶 getTokenBal",
                "color:#7f2b82",
                getTokenBal,
            );
            // setInrToUsdPrice(getTokenBal?.USD);
        };
        getData();
    }, []);

    const MIntNftTilken = async (nftData) => {
        try {
            console.log("%c Line:109 🥒 nftData", "color:#42b983", nftData);
            setLoading(true);

            let nftObject = {
                nftId: nftData._id,
                commodity: nftData.commodity,
                commodityId: nftData.commodityId,
                quantity: nftData.quantity,
                nftPrice: nftData.nftPrice,
                pool: nftData.pool,
                dataHash: nftData?.dataHash ? nftData?.dataHash : "",
            };
            console.log("%c Line:129 🍭 nftObject", "color:#4fff4B", nftObject);

            let amountPrice = nftData.nftPrice * inrToUsdPrice;
            console.log(
                "%c Line:139 🍤 amountPrice",
                "color:#b03734",
                amountPrice,
            );

            // let funData = {
            //     _userAddress: address,
            //     _nftId: nftData._id,
            //     _commodityId: nftData.commodityId,
            //     _quantity: convertToSmallestMegaUnit(nftData?.quantity),
            //     _value: convertToSmallestMegaUnit(amountPrice),
            //     _dataHash: nftData.dataHash,
            //     _data: JSON.stringify(nftObject),
            // };
            let funData = {
                _userAddress: address,
                _nftId: "nftData._id",
                _commodityId: "nftData.commodityId",
                _quantity: convertToSmallestMegaUnit(100),
                _value: convertToSmallestMegaUnit(1000),
                _dataHash: "nftData.dataHash",
                _data: "JSON.stringify(nftObject)",
            };
            console.log("%c Line:141 🍿 funData", "color:#42b983", funData);
            console.log(
                "%c Line:53 🍪 pollDetails",
                "color:#33a5ff",
                pollDetails,
            );

            let data = await mintNFTTreasury(
                "0xBB3F329C92Ca764e0f92F173A709227c8BF1b0F4", // pollDetails?.treasuryAddress,
                signer,
                funData,
            );
            console.log("%c Line:131 🍻 data", "color:#465975", data);
            if (!data) {
                toast.error(`Error While Transaction`);
                setLoading(false);
                return;
            }
            console.log("%c Line:162 🥤 data", "color:#f5ce50", data);
            let checkData = await updateNFtDataMint(nftData._id, {
                minted: true,
                mintedTransactionHash: data?.hash,
                ownerAddress: address,
            });
            console.log("%c Line:164 🥐 checkData", "color:#ed9ec7", checkData);
            toast.success(`Approved successfully`);
            setLoading(false);
        } catch (error) {
            console.log("%c Line:133 🍎 error", "color:#465975", error);
            toast.error(`Error While Transaction`);
            setLoading(false);
        }
    };

    const openBorrowModel = (nftData) => {
        setSelectedData(nftData);
        setBuyBondsBruModal(true);
    };

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

    return (
        <div className="borrow">
            <div className="top-section">
                <h1>Borrow</h1>
                <p>
                    Borrowers avail loans against the security of their assets
                    stored with partner custodian warehouses/vaults and
                    tokenized on the Blockchain network.
                </p>
            </div>
            <div className="toggle-btns">
                <button>Buy Bonds</button>
                <button className="active">Borrow</button>
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
                            View on chain depositors
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
                            <span className="assets-val">$ 79,382,425.74</span>
                        </p>
                    </div>
                    <div className="a-bottom">
                        <a
                            rel="noreferrer"
                            href="https://polygonscan.com/address/0xf0c8ce0ae6c3ebbd2b057cd85bbf4045344da02b"
                            target="_blank"
                        >
                            View on chain assets
                        </a>
                    </div>
                </div>
                {/* <div className="assets-inner-div">
                <div className="a-top">
                    <p className="a-icon">
                        <img src={money} alt="bag"></img>
                        <span>Total Loan Amount</span>
                    </p>
                    <p>
                        <img src={arrow} alt="arrow"></img>
                        <span className="assets-val">$ 0</span>
                    </p>
                </div>
                <div className="a-bottom">
                    <a rel="noreferrer" href="https://polygonscan.com/address/0xf0c8ce0ae6c3ebbd2b057cd85bbf4045344da02b" target="_blank">View assets on polygon network</a>
                </div>
            </div> */}
            </div>
            <div>
                <div className="bond-details">
                    <div className="section-nav">
                        <div id="p-network">
                            <button onClick={MIntNftTilken}>
                                <img src={environment.contracts[chainId]?.InfuraName == "base" ? baseLogo : poly} alt="token" width="20px" />
                                {chainId
                                    ? environment.contracts[chainId]?.name
                                    : ""}
                            </button>
                        </div>
                        <hr style={{ color: "grey", width: "100%" }} />
                        <div
                            onClick={() => {
                                setToggleNav("ReceiptView");
                            }}
                            className={
                                toggleNav === "ReceiptView"
                                    ? "toggle-nav-active"
                                    : "toggle-nav"
                            }
                        >
                            {toggleNav === "ReceiptView" ? (
                                <img src={bond_white} alt="bond"></img>
                            ) : (
                                <img src={bond_black} alt="bond"></img>
                            )}
                            <p>Receipt View</p>
                        </div>
                        {/* <div onClick={()=>{setToggleNav("MyHold")}} className={toggleNav === "MyHold"? "toggle-nav-active":"toggle-nav"}>
                    { toggleNav === "MyHold" ? <img src={vault_white} alt='holdings'></img> :  
                    <img src={holding} alt='holdings'></img>}
                        <p>My Holdings</p>
                    </div> */}
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
                        {toggleNav === "ReceiptView" ? (
                            <div className="section-content">
                                <h3>Commodity Deposit Details</h3>
                                <div className="main-content">
                                    <div className="inner-div">
                                        {nftData &&
                                            nftData?.length !== 0 &&
                                            nftData?.map((res) => {
                                                return (
                                                    <div className="cards">
                                                        <div className="main-card">
                                                            <img
                                                                src={rice}
                                                                alt=""
                                                            />
                                                            <p className="header">
                                                                {res?.commodity}
                                                            </p>
                                                            <p className="row">
                                                                Quantity:{" "}
                                                                <span className="row-span">
                                                                    {
                                                                        res?.quantity
                                                                    }
                                                                </span>
                                                            </p>
                                                            <p className="row">
                                                                Value:{" "}
                                                                <span className="row-span">
                                                                    INR{" "}
                                                                    {
                                                                        res?.nftPrice
                                                                    }{" "}
                                                                    (${" "}
                                                                    {(
                                                                        res?.nftPrice *
                                                                        inrToUsdPrice
                                                                    ).toFixed(
                                                                        2,
                                                                    )}
                                                                    )
                                                                </span>
                                                            </p>
                                                            {loading ? (
                                                                <p className="commodity-btn">
                                                                    Loading....
                                                                </p>
                                                            ) : res?.minted ==
                                                                false ? (
                                                                <p
                                                                    className="commodity-btn"
                                                                    onClick={() => {
                                                                        MIntNftTilken(
                                                                            res,
                                                                        );
                                                                    }}
                                                                >
                                                                    Mint NFT
                                                                </p>
                                                            ) : res?.borrowed ? (
                                                                <p
                                                                    className="commodity-btn"
                                                                // onClick={() => {
                                                                //     MIntNftTilken(
                                                                //         res,
                                                                //     );
                                                                // }}
                                                                >
                                                                    Repay
                                                                </p>
                                                            ) : (
                                                                <p
                                                                    className="commodity-btn"
                                                                    onClick={() => {
                                                                        openBorrowModel(
                                                                            res,
                                                                        );
                                                                    }}
                                                                >
                                                                    Borrow
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                                <div className="receipt-footer">
                                    <p>
                                        <span>Note:</span>
                                        Please do not refresh the page while
                                        minting is undergoing.
                                    </p>
                                </div>
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
                                            <span
                                                onClick={() => {
                                                    copyAddress(address);
                                                }}
                                                className="copyIcon"
                                            >
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
                <BorrowBondsBru
                    open={buyBondsBruModal}
                    handleClose={setBuyBondsBruModal}
                    nftData={selectedNftData}
                />
            </div>
        </div>
    );
};

export default Borrow;
