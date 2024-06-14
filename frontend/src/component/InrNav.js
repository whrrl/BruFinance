import React, {useEffect,} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {removeData} from "../services/apiService";
import GetProfile from "../Modal/GetProfile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {getProfile} from "../services/apiService"

const InrNavBar = () => {
    let navigate = useNavigate(); 
    const [profile, setProfile] = useState(false);
    const [completedProfile, setCompletedProfile] = useState(false);

    const logout = async()=>{
        const data = await removeData('token');
            toast.success('Logout successfully')
            navigate('/')
    }

    const handleClose = ()=>setProfile(!profile);

    const profileReq = async() => {
      const profData = await getProfile();
      //console.log(profData,'profreq')
      if(profData.success){
        setCompletedProfile(true)
      }
    }
    useEffect(()=>{
      profileReq();
    },[])

  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src="AnotherLogo.png" alt="logo" className="nav-logo" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="logout-btn">
                    <Nav.Link eventKey={2} href="#logout">
                    Logout 
                    </Nav.Link>
                    <Nav.Link eventKey={2}>Connect Wallet</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* Signed in as:  */}
            {completedProfile && <Nav.Link onClick={()=>setProfile(!profile)} style={{marginRight:20,color: "#7c037b"}}>Profile</Nav.Link>}
            {/* <a href="#login">Mark Otto</a> */}
          </Navbar.Text>
        </Navbar.Collapse>
        {completedProfile ?  <Button onClick={()=>{logout()}} variant="danger" size="lg">
          Logout
        </Button>:
         <Button onClick={()=>{navigate('/')}}  variant="success" size="lg">
         Login
       </Button>}
       
      </Container>
    </Navbar>
    <GetProfile open={profile} handleClose={handleClose}/>
    </>
  );
};
export default InrNavBar;
