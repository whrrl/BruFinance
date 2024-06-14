import React from "react"
import {Modal} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "./Welcome.scss"
import {toast} from "react-toastify"

const Welcome = ({open, handleClose, setLogin}) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate('/lending');
  }

  return (
    <>
      <Modal show={open} onHide={handleClose} className="blurs">
        <Modal.Body>
          <h3>Welcome to Bru Finance</h3>
          <p>For a better experience please select your country</p>
          <button className="btn-india" onClick={() => setLogin(true)}>
            India
          </button>
          <button
            className="btn-other"
            onClick={routeChange}>
            Other Countries
          </button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Welcome
