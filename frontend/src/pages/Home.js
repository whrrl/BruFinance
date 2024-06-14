import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import BruBond from "../component/BruBond";
import Holding from "../component/Holding";
import Transaction from "../component/Transaction";
import { PiCurrencyInrThin } from "react-icons/pi"
import { getTotalDepositors } from "../services/apiService";
import { useEffect, useState } from "react";

const Home = () => {
    const [trxData, setTrxData] = useState([]);

    const trx = async () => {
        const trxData = await getTotalDepositors();
        //console.log(trxData,'data')
        if (trxData.success) {
            console.log("%c Line:14 🍯 trxData", "color:#4fff4B", trxData);
            setTrxData(trxData?.data)
        }
    }

    useEffect(() => {
        trx()
    }, [])

    return (
        <div className="home">
            <Row className="intro">
                <Container>
                    <Row>
                        <Col md={7} sm={12} className="text-left">
                            <h1>
                                Buy Bonds
                            </h1>
                            <p>
                                Bonds give access to high and stable yield investment opportunities secured by emerging market real world assets.
                            </p>
                        </Col>
                        <Col md={5} sm={12} className="text-center">
                            <Card className="mx-4 asset-box">
                                <Card.Body>
                                    <h1 className="mt-2">
                                        <PiCurrencyInrThin /> {trxData?.totalAssetsValue
                                            ? trxData?.totalAssetsValue
                                            : 0}
                                    </h1>
                                    <p>
                                        Total Value of Assets
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Row >
            <Container className="mt-5 mb-5">
                <Tabs
                    variant="pills"
                    defaultActiveKey="bro-bonds"
                    id="uncontrolled-tab-example"
                    className="mb-3 tabs-container"
                >
                    <Tab eventKey="bro-bonds" className="ml-0" title="Bru Bonds">
                        <BruBond />
                    </Tab>
                    <Tab eventKey="holding" title="My Holding">
                        <Holding />
                    </Tab>
                    <Tab eventKey="transactions" title="My Transactions">
                        <Transaction />
                    </Tab>
                </Tabs>
            </Container>
        </div >
    )
}
export default Home