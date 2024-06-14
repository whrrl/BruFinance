import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "./ShowBond.scss";
import peep from "../assets/image/peep.svg";
import { useAddress, useSigner, useChainId } from "@thirdweb-dev/react";
import { ClaimBond, getUserBondIds } from "../utility/pool";
import { toast } from "react-toastify";

const ShowBond = ({ open, handleClose }) => {
    const address = useAddress();
    const signer = useSigner();
    const chainId = useChainId();

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
                                            ele?.time >
                                                new Date().getTime() / 1000 +
                                                15552000 ? (
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
                                            ele?.time <
                                                new Date().getTime() / 1000 +
                                                15552000 ? (
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
