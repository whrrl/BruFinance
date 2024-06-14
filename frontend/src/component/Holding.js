import { Button, Card, Col, Container, Row } from "react-bootstrap"
import sprout from "../assets/image/como.png";

const Holding = () => {
    return (<Card className="bond">
        <Card.Body>
            <Card className="bond-card">
                <Card.Img variant="top" src={sprout} style={{ padding: "10px" }} />
                <Card.Body className="holding-body">
                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Card.Title>Indian Agro Pool <small className="view-details">View Details</small></Card.Title>
                        </Col>
                        <Col md={6} sm={12} >
                            <Card className=" holding-box">
                                <Card.Body>
                                    <h1 className="mt-1 bond-value">
                                        0.00
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
                                        0.00
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