import React from "react"
import {Modal} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "./SelectCurrency.scss"
import {toast} from "react-toastify"

const SelectCurrency = ({open, handleClose}) => {
  let navigate = useNavigate(); 

  const routeChangeIndian = () =>{ 
    navigate('/home');
  }

  const routeChangeCrypto =()=>{
    navigate('/lending');
  }

  return (
    <>
      <Modal show={open} onHide={handleClose} className="blurs">
        <Modal.Body>
          <h3>Select Your Currency</h3>
          <p>Please select your currency through which you want to make payment.</p>
          <button className="btn-india" onClick={routeChangeIndian}>
            Indian Rupees (INR)
          </button>
          <button
            className="btn-other"
            onClick={routeChangeCrypto}>
            Crypto Currency
          </button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SelectCurrency
