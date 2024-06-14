import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { getTransaction } from "../services/apiService"
import { useEffect, useState } from "react";
import moment from "moment";

const Transaction = () => {

  const [trxData, setTrxData] = useState([]);

  const trx = async () => {
    const trxData = await getTransaction();
    //console.log(trxData,'data')
    if (trxData.success) {
      let trxs = trxData.data
      let sorted = trxs.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
      setTrxData(sorted)
    }
  }
  useEffect(() => {
    trx()
  }, [])

  return (
    <Card className="bond">
      <Card.Body>
        <Card className="transaction-box">
          <Row className="transaction-list table-heads">
            {/* <Col sm={4} md={3}>
              <b>Transaction Details</b>
            </Col> */}
            <Col sm={4} md={3}>
              <b>Transaction ID</b>
            </Col>
            <Col sm={4} md={3}>
              <b>Txn. Date</b>
            </Col>
            <Col sm={4} md={3}>
              <b>Type</b>
            </Col>
            <Col sm={4} md={3}>
              <b>Total Amount</b>
            </Col>
            {/* <Col sm={4} md={1}>
              <b>Proof Link</b>
            </Col> */}
          </Row>
          {trxData.map((a, i) => {
            return (<Row className="transaction-list" key={i}>
              {/* <Col xs={4} md={3} className="tx-name">
                {a.details}
              </Col> */}
              {/* <Col xs={4} md={4} className="text-center mobile-view">
            </Col> */}
              <Col xs={4} md={3}>
                {a.transactionUniqueCode}
              </Col>
              <Col xs={4} md={3}>
                {moment(a.transactionDate).format("DD-MM-YYYY")}
              </Col>
              <Col xs={4} md={3} className="table-heads">
                <span className="color-success"> {a.type}</span>
              </Col>
              <Col xs={0} sm={6} md={3} >
                {a.amount}
              </Col>
              {/* <Col xs={4} md={1}>
                <a href={a.paymentProof} target="_blank">
                  <HiOutlineDocumentDownload color="#7c037b" />
                </a>
              </Col> */}
            </Row>)
          })}


          {/* <Row className="transaction-list">
            <Col xs={8} md={4} className="tx-name">
              Investment in India Agro Pool
            </Col>
            <Col xs={4} md={4} className="text-center mobile-view">
              10,000
            </Col>
            <Col xs={4} md={2}>
              TID12345678
            </Col>
            <Col xs={4} md={2}>
              01/06/2023
            </Col>
            <Col xs={4} md={1} className="table-heads">
              <span className="color-success"> Credit</span>
            </Col>
            <Col xs={0} sm={2} md={2} className="text-center table-heads">
              10,000
            </Col>
            <Col xs={4} md={1}>
              <HiOutlineDocumentDownload color="#7c037b" />
            </Col>
          </Row> */}
        </Card>
      </Card.Body>
    </Card>
  );
};
export default Transaction;
