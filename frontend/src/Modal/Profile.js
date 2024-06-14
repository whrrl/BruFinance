import React, {useState} from "react"
import {Modal} from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import "./Login.scss"
import {toast} from "react-toastify"
import {FaUser} from "react-icons/fa"
import {FiRefreshCw} from "react-icons/fi"
import Button from 'react-bootstrap/Button';
import {completeProfileFun} from "../services/apiService"
import SelectCurrency from "../Modal/SelectCurrency";

const Profile = ({open, handleClose}) => {

    const [profileData, setProfileData] = useState({
        name:"",
        email:"",
        aadharNo:"",
        panNumber:"",
        addressLine1:"",
        addressLine2:"",
        city:"",
        pinCode:"",
        state:""
    });
    const [aadharCardImage, setAadhaarFile] = useState();
    const [panCardImage, setPanFile] = useState();
    const [currencyModal, setCurrencyModal] = useState(false);
    const [profModal, setProfModal] = useState(false)
    const handleChange = e => {
        const { name, value } = e.target;
        setProfileData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = async()=>{
        //console.log(profileData,'data')
    if(profileData.name === ''|| profileData.email === ''|| profileData.aadharNo === ''){
        toast.warning("Details required")
    }else{
        const postData = {
            aadharNo:profileData.aadharNo,
            name:profileData.name,
            email:profileData.email,
            addressLine1:profileData.addressLine1,
            addressLine2:profileData.addressLine2,
            city:profileData.city,
            state:profileData.state,
            pinCode:profileData.pinCode,
            panNumber:profileData.panNumber,
            aadharCardImage,
            panCardImage
        }
        const profData = await completeProfileFun(postData)
        //console.log(profData,'profData')
        if(profData.success){
            toast.success("Profile Added Successfully")
            console.log(handleClose,'profmodal');
            handleClose();
            setCurrencyModal(!currencyModal);
        }
    }
    }
    const handleCurrency = async() => setCurrencyModal(!currencyModal);

    const handleAadhar = (event)=>{
        //console.log(event.target.files[0],'event.target.files[0]')
        setAadhaarFile(event.target.files[0])
    }

    const handlePan = (event)=>{
        console.log(event.target.files[0],'event.target.files[0]')
        setPanFile(event.target.files[0])
    }


    return (
        <>
            <Modal show={open} onHide={handleClose} className="blur-login">
            <Modal.Header closeButton>
                <Modal.Title>Complete Profile</Modal.Title>
            </Modal.Header>
                <Modal.Body className="profile-body">
                    <Form className="form">

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Name</Form.Label> */}
                            <Form.Control
                                required
                                type="text"
                                placeholder="Name*"
                                autoFocus
                                onChange={handleChange}
                                name="name"
                            />
                            {!profileData.name && <p style={{fontSize:10,marginLeft:10,marginBottom:-10,color:"red"}}>Name required*</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control
                                type="email"
                                placeholder="name@example.com*"
                                autoFocus
                                onChange={handleChange}
                                name="email"
                            />
                            {!profileData.email && <p style={{fontSize:10,marginLeft:10,marginBottom:-10,color:"red"}}>Email required*</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Aadhaar Number</Form.Label> */}
                            <Form.Control
                                type="text"
                                placeholder="Aadhaar Number*"
                                autoFocus
                                maxLength={12}
                                onChange={handleChange}
                                name="aadharNo"
                            />
                            {!profileData.aadharNo && <p style={{fontSize:10,marginLeft:10,marginBottom:-10,color:"red"}}>Aadhaar Number required*</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Pan Number</Form.Label> */}
                            <Form.Control
                                type="text"
                                placeholder="Pan Number"
                                autoFocus
                                onChange={handleChange}
                                name="panNumber"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Address Line 1</Form.Label> */}
                            <Form.Control
                                type="text"
                                placeholder="Address Line 1"
                                autoFocus
                                onChange={handleChange}
                                name="addressLine1"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Address Line 2</Form.Label> */}
                            <Form.Control
                                type="text"
                                placeholder="Address Line 2"
                                autoFocus
                                onChange={handleChange}
                                name="addressLine2"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>City</Form.Label> */}
                            <Form.Control
                                type="text"
                                placeholder="City"
                                autoFocus
                                onChange={handleChange}
                                name="city"
                            />
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>State</Form.Label> */}
                            <Form.Control
                                type="text"
                                placeholder="State"
                                autoFocus
                                onChange={handleChange}
                                name="state"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Pin Code</Form.Label> */}
                            <Form.Control
                                type="number"
                                placeholder="Pin Code"
                                autoFocus
                                onChange={handleChange}
                                name="pinCode"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Aadhaar Card Image</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                autoFocus
                                onChange={handleAadhar}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Pan Card Image</Form.Label>
                            <Form.Control
                                type="file"
                                autoFocus
                                onChange={handlePan}
                                accept="image/*"
                            />
                        </Form.Group>
                            <div className="d-grid gap-2">
                             <Button variant="secondary" size="lg" onClick={handleSubmit}>
                                Submit
                             </Button>
                            </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <SelectCurrency open={currencyModal} handleClose={handleCurrency}/>
        </>
    )
}

export default Profile
