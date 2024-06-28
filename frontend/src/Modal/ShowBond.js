import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "./ShowBond.scss";
import peep from "../assets/image/peep.svg";
import { useAddress, useSigner, useChainId } from "@thirdweb-dev/react";
import { ClaimBond, getUserBondIds } from "../utility/pool";
import { toast } from "react-toastify";
import { createThirdwebClient } from "thirdweb";
import { ethers5Adapter } from "thirdweb/adapters/ethers5";
import { useActiveAccount, useActiveWalletChain, } from "thirdweb/react";

const client = createThirdwebClient({
    clientId: "8b47ef3dc283abe26da04b0549a7d6e8",
});

const ShowBond = ({ open, handleClose }) => {
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

    useEffect(() => {
        if (!address || !signer) return;
        const getData = async () => {
            let getMyBondData = await getUserBondIds(signer, address, chainId);
            console.log(
                "%c Line:23 🍓 getMyBondData",
                "color:#ffdd4d",
                getMyBondData,
            );
            setBruBondBalance(getMyBondData);
        };
        getData();
    }, [address, signer, loading, chainId]);

    return (
        <>
            <div className="modal-div">
                <Modal show={open} onHide={handleClose} className="show-bond">
                    <Modal.Header closeButton>
                        <Modal.Title>Bonds</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="section-content">
                            <p>Active Bonds</p>
                            <table style={{ width: "100%", marginTop: "10px" }}>
                                <thead className="thead">
                                    <tr>
                                        <th>Principal</th>
                                        <th>Interest</th>
                                        <th>Investment Date</th>
                                    </tr>
                                </thead>
                                <tbody className="tbody">
                                    {bruBondBalance?.tokenAmount &&
                                        bruBondBalance?.tokenAmount?.length > 0 ? (
                                        bruBondBalance?.tokenAmount.map((ele) =>
                                            ele?.time <
                                                ((new Date().getTime() / 1000) +
                                                    15552000) ? (
                                                <tr>
                                                    <td>
                                                        USD {ele?.bondAmount}
                                                    </td>
                                                    <td>
                                                        {ele?.interest} % p.a
                                                    </td>
                                                    <td>{ele?.depositTime}</td>
                                                </tr>
                                            ) : (
                                                ""
                                            ),
                                        )
                                    ) : (
                                        <div className="assets">
                                            No active bonds
                                        </div>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="section-content">
                            <p>Matured Bonds</p>
                            <table style={{ width: "100%", marginTop: "10px" }}>
                                <thead className="thead">
                                    <tr>
                                        <th>Principal</th>
                                        <th>Interest</th>
                                        <th>Investment Date</th>
                                    </tr>
                                </thead>
                                <tbody className="tbody">
                                    {bruBondBalance?.tokenAmount &&
                                        bruBondBalance?.tokenAmount?.length > 0 ? (
                                        bruBondBalance?.tokenAmount.map((ele) =>
                                            ele?.time >
                                                ((new Date().getTime() / 1000) +
                                                    15552000) ? (
                                                <tr>
                                                    <td>
                                                        USD {ele?.bondAmount}
                                                    </td>
                                                    <td>
                                                        {ele?.interest} % p.a
                                                    </td>
                                                    <td>{ele?.depositTime}</td>
                                                </tr>
                                            ) : (
                                                ""
                                            ),
                                        )
                                    ) : (
                                        <div className="assets">
                                            No active bonds
                                        </div>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};

export default ShowBond;
