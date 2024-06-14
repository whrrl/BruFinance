import React, { useState } from "react";
import { Modal, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Login.scss";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import "./UploadPaymentProof.scss";
import {addTransaction} from "../services/apiService"

const UploadPaymentProof = ({ open, handleClose }) => {
  const [validated, setValidated] = useState(false);
  const [paymentData, setPaymentData] = useState({
    trxId:"",
    trxDate:"",
    trxAmount:"",
    trxDetails:"",
  });
  const [image, setImage] = useState()

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if(paymentData.trxAmount <10000){
      toast.warning("Amount must be greater than 10000")
      event.preventDefault();
      event.stopPropagation();
    }else{
      event.preventDefault();
      let trxData = {
        amount: paymentData.trxAmount,
        transactionDate: paymentData.trxDate,
        transactionId: paymentData.trxId,
        details: paymentData.trxDetails,
        paymentProof:image
      }
      console.log(trxData,'asd')
      const transaction = await addTransaction(trxData)
      console.log(transaction,'transaction');
      if(transaction.success){
        toast.success("Payment proof uploaded")
        handleClose()
      }
    }

   
  };

  const handleChange = e => {
        const { name, value } = e.target;
        setPaymentData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

  const handleImage = async e =>{
    let file = e.target.files[0]
      setImage(file)
    }

  return (
    <>
      <Modal show={open} onHide={handleClose} className="blur-login">
        <Modal.Header closeButton>
          <Modal.Title>Upload Payment Proof</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* <p>
              Kindly deposit your amount in the below mentioned account number.
            </p> */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Transaction Id<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="text" minLength={10} placeholder="Enter Transaction Id" name="trxId" onChange={handleChange} required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Transaction Date<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="date" name="trxDate" onChange={handleChange} required/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Transaction Amount<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="number" name="trxAmount" onChange={handleChange} placeholder="Enter Transaction Amount" required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Details</Form.Label>
                <Form.Control type="text" name="trxDetails" onChange={handleChange} placeholder="Transaction Details" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Transaction Image<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleImage} required/>
              </Form.Group>

            </Row>
            <Button className="upload" type="submit"> Upload </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UploadPaymentProof;
