import React, { useState } from "react"
import {Modal} from "react-bootstrap"
import "./BorrowModal.scss"
import peep from "../assets/image/peep.svg"
import SelectCurrency from "./SelectCurrency";
import { useNavigate } from "react-router-dom";

const Borrow = ({open, handleClose, setLogin, completedProfile}) => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate('/borrow');
  }
  return (
    <>
      <div className="modal-div">
        <Modal show={open} onHide={handleClose} centered className="blur">
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-container">
              <div className="desc">
                <p>
                Borrowers avail loans against the security of their assets stored with 
                partner custodian warehouses/vaults and tokenized on the Blockchain network.
                </p>{
                  completedProfile ?
                  <button
                  className="btn-continue"
                  onClick={() => {
                    handleClose()
                    routeChange()
                  }}>
                  Continue
                </button>
                :
                <button
                  className="btn-continue"
                  onClick={() => {
                    handleClose()
                    setLogin(true)
                  }}>
                  Continue
                </button>}
              </div>
              <img src={peep} alt="" className="peep-img" />
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {/* <SelectCurrency open={currencyModal} handleClose={handleCurrencyModal}/> */}
    </>
  )
}

export default Borrow;
