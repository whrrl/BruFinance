import { Button, Card, Col, Container, Row } from "react-bootstrap"
import sprout from "../assets/image/como.png";
import { useEffect, useState } from "react";
import { getTransactionTotal } from "../services/apiService";

const Holding = () => {

    const [trxData, setTrxData] = useState([]);

    const trx = async () => {
        const trxData = await getTransactionTotal();
        //console.log(trxData,'data')
        if (trxData.success) {
            console.log("%c Line:14 🍯 trxData", "color:#4fff4B", trxData);
            setTrxData(trxData?.data)
            // let trxs = trxData.data
            // let sorted = trxs.sort((a, b) => {
            //   return new Date(b.createdAt) - new Date(a.createdAt);
            // })
            // setTrxData(sorted)
        }
    }
    useEffect(() => {
        trx()
    }, [])

    return (<Card className="bond">
        <Card.Body>
            <Card className="bond-card">
                <Card.Img variant="top" src={sprout} style={{ padding: "10px" }} />
                <Card.Body className="holding-body">
                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Card.Title>Indian Agro Pool
                                {/* <small className="view-details">View Details</small> */}
                            </Card.Title>
                        </Col>
                        <Col md={6} sm={12} >
                            <Card className=" holding-box">
                                <Card.Body>
                                    <h1 className="mt-1 bond-value">
                                        {trxData?.totalAmount ? trxData?.totalAmount : 0}
                                    </h1>
                                    <p className="my-2">
                                        Your total investment in this pool
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} sm={12} className="hold-box-2" >
                            <Card className=" holding-box">
                                <Card.Body>
                                    <h1 className="mt-1 bond-value">
                                        {trxData?.totalInterest ? trxData?.totalInterest : 0}
                                    </h1>
                                    <p className="my-2">
                                        Total Interest Accrued
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12}>
                            <Button className="invest-now withdraw-btn">Withdraw</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Card.Body>
    </Card>)
}
export default Holding