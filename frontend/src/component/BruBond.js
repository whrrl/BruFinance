import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import InvestNow from "../Modal/InvestNow";
import UploadProof from "../Modal/UploadPaymentProof";
import sprout from "../assets/image/como.png";
import { getProfile } from "../services/apiService";
import { toast } from "react-toastify";

const BruBond = () => {

    const [invest, setInvest] = useState(false);
    const [proof, setProof] = useState(false);

    const handleInvest = () => setInvest(!invest)
    const handleProof = () => setProof(!proof)

    const redirectToPayUrl = async () => {
        const profData = await getProfile();
        console.log("%c Line:19 🥐 profData", "color:#42b983", profData);
        //console.log(profData,'profreq')
        if (!profData.success) {
            toast.error("Error while get profile")
        }
        window.location.replace(`https://buy.stripe.com/test_dR617C66B5SM7O8001?client_reference_id=${profData?.data?.user?._id}`)
    }


    return (
        <>
            <Card className="bond">
                <Card.Body>
                    <Card className="bond-card">
                        <Card.Img variant="top" src={sprout} style={{ padding: "10px" }} />
                        <Card.Body>
                            <Card.Title>Indian Agro Pool</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Row>
                                <Col md={4} sm={12} >
                                    <b>Lending Yield : <span className="bond-value">12% P.A.</span></b>
                                </Col>
                                <Col md={8} sm={12} >
                                    <b>Min. Amount : <span className="bond-value">INR 10,000</span></b>
                                </Col>
                                <Col md={4} sm={12} >
                                    <b>Lock-in Period : <span className="bond-value">6 Months</span></b>
                                </Col>
                                <Col md={8} sm={12} >
                                    <b>Bouns Bru Token Yield : <span className="bond-value">10% P.A.</span></b>
                                </Col>
                                <Col sm={12}  >
                                    <Button className="invest-now" onClick={() => { redirectToPayUrl() }}>Invest Now</Button>
                                    {/* <Button className="payment-proof" onClick={() => { setProof(!proof) }}>Upload Payment Proof</Button> */}
                                </Col>
                            </Row>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>

            <InvestNow
                open={invest} handleClose={handleInvest}

            />

            <UploadProof open={proof} handleClose={handleProof} />
        </>
    )
}
export default BruBond