import React, { useState } from "react";
import { Modal,  Col, Container, Row } from "react-bootstrap";
import "./Login.scss";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import "./InvestNow.scss"
import UploadProof from "./UploadPaymentProof";

const InvestNow = ({ open, handleClose }) => {
  
  const [proof,  setProof] = useState(false);

  const handleProof = () => setProof(!proof);
  return (
    <>
      <Modal show={open} onHide={handleClose} className="blur-login">
        <Modal.Header closeButton>
          <Modal.Title>Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Container>
            <p>Kindly deposit your amount in the below mentioned account number.</p>
            <Row style={{marginTop:5}}>
                <Col>
                <h4 style={{fontSize:20}}>A/C No:{" "}<span style={{fontSize:17, color:'grey', fontWeight:400}} >50200048716587</span></h4>                
                </Col>
            </Row>
            <Row style={{marginTop:5}}>
                <Col>
                <h4 style={{fontSize:20}}>IFSC code:{" "}<span style={{fontSize:17, color:'grey', fontWeight:400}} >HDFC0001235</span></h4>                
                </Col>
            </Row>
            <Row style={{marginTop:5}}>
                <Col>
                <h4 style={{fontSize:20}}>Bank Name:{" "}<span style={{fontSize:17, color:'grey', fontWeight:400}} >HDFC BANK</span></h4>                
                </Col>
            </Row>
            <Row style={{marginTop:5}}>
                <Col>
                <h4 style={{fontSize:20}}>Branch:{" "}<span style={{fontSize:17, color:'grey', fontWeight:400}} >TEEN HAATH NAKA</span></h4>                
                </Col>
            </Row>
            <Row style={{marginTop:5}}>
                <Col>
                <h4 style={{fontSize:20}}>Account Holder:{" "}<span style={{fontSize:17, color:'grey', fontWeight:400}} >WHRRL FINTECH SOLUTIONS</span></h4>                
                </Col>
            </Row>
            <hr style={{height:5,color:"grey",width:"100%"}}></hr>
            <p>Please upload payment proof after depositing the amount.</p>
            <Button className="upload" onClick={() => {setProof(!proof);handleClose()}} > Upload Payment Proof</Button>
          </Container>
        </Modal.Body>
      </Modal>

      <UploadProof open={proof} handleClose={handleProof}/>
    </>
  );
};

export default InvestNow;
