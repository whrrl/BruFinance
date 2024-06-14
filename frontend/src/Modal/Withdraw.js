import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Withdraw.scss";
import peep from "../assets/image/peep.svg";
import { useAddress, useSigner, useChainId } from "@thirdweb-dev/react";
import { ClaimBond, getUserBondIds } from "../utility/pool";
import { toast } from "react-toastify";
import { WithdrawBond } from "../utility/routerweb3";

const Withdraw = ({ open, handleClose }) => {
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

    const claimToken = async (bondId) => {
        setLoading(true);

        let data = await ClaimBond(signer, bondId, chainId);
        if (!data) {
            toast.error(`Error While Transaction`);
            setLoading(false);
            return;
        }
        toast.success(`Transaction Complete`);
        setLoading(false);
    };

    const withdrawToken = async (bondId) => {
        setLoading(true);

        let data = await WithdrawBond(signer, bondId, chainId);
        if (!data) {
            toast.error(`Error While Transaction`);
            setLoading(false);
            return;
        }
        toast.success(`Transaction Complete`);
        setLoading(false);
    };

    return (
        <>
            <div className="modal-div">
                <Modal show={open} onHide={handleClose} className="withdraw">
                    <Modal.Header closeButton>
                        <Modal.Title>Withdraw Liquidity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="section-content">
                            <table style={{ width: "100%", marginTop: "10px" }}>
                                <thead className="thead">
                                    <tr>
                                        <th>Principal</th>
                                        <th>Interest</th>
                                        <th>Investment Date</th>
                                        <th>Actions</th>
                                        <th>Claim Action</th>
                                    </tr>
                                </thead>
                                <tbody className="tbody">
                                    {bruBondBalance?.tokenAmount &&
                                        bruBondBalance?.tokenAmount?.length > 0 ? (
                                        bruBondBalance?.tokenAmount.map(
                                            (ele) => (
                                                <tr>
                                                    <td>
                                                        USD {ele?.bondAmount}
                                                    </td>
                                                    <td>
                                                        {ele?.interest} % p.a
                                                    </td>
                                                    <td>{ele?.depositTime}</td>
                                                    <td>
                                                        {loading ? (
                                                            <Button disabled>
                                                                Loading...
                                                            </Button>
                                                        ) : ele?.withdrawn ? (
                                                            <Button
                                                                style={{
                                                                    "background-color":
                                                                        "#540f7a",
                                                                    border: "0px",
                                                                }}
                                                                disabled
                                                            >
                                                                Withdraw
                                                            </Button>
                                                        ) : (
                                                            <Button
                                                                style={{
                                                                    "background-color":
                                                                        "#540f7a",
                                                                    border: "0px",
                                                                }}
                                                                onClick={() => {
                                                                    withdrawToken(
                                                                        ele?.bondId,
                                                                    );
                                                                }}
                                                            >
                                                                Withdraw
                                                            </Button>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {loading ? (
                                                            <Button disabled>
                                                                Loading...
                                                            </Button>
                                                        ) : ele?.bondClaimed ? (
                                                            <Button
                                                                style={{
                                                                    "background-color":
                                                                        "#540f7a",
                                                                    border: "0px",
                                                                }}
                                                                disabled
                                                            >
                                                                Claim
                                                            </Button>
                                                        ) : (
                                                            <Button
                                                                style={{
                                                                    "background-color":
                                                                        "#540f7a",
                                                                    border: "0px",
                                                                }}
                                                                onClick={() => {
                                                                    claimToken(
                                                                        ele?.bondId,
                                                                    );
                                                                }}
                                                            >
                                                                Claim
                                                            </Button>
                                                        )}
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
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};

export default Withdraw;
