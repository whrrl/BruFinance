import React, { useEffect, useState } from "react";
import { Modal, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Login.scss";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import "./UploadPaymentProof.scss";
import {getProfile} from "../services/apiService"

const GetProfile = ({ open, handleClose }) => {

  const [profileData, setProfileData] = useState({})

  useEffect(() => {
    profile();
}, [])

  const profile = async()=>{
    const profile = await getProfile();
    //console.log(profile,'profData')
    if(profile.success){
        setProfileData(profile.data)
    }
  }
  //console.log(profileData,'profData')
  return (
    <>
      <Modal show={open} onHide={handleClose} className="blur-login">
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="text" disabled  value={profileData?.user?.name}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="text" disabled  value={profileData?.user?.email}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone Number<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="number"  disabled value={profileData?.user?.phoneNo}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Aadhaar Number</Form.Label>
                <Form.Control type="text"  disabled value={profileData?.user?.aadharNo}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Address Line 1<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="text"  disabled value={profileData?.user?.address?.addressl1}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control type="text"  disabled value={profileData?.user?.address?.addressl2}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>City<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="text" disabled   value={profileData?.user?.address?.city}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>State</Form.Label>
                <Form.Control type="text"  disabled value={profileData?.user?.address?.state}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Pin Code<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="number"  disabled value={profileData?.user?.address?.pincode}/>
              </Form.Group>

            </Row>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GetProfile;
