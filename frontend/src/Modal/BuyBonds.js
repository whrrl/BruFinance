import React, { useState } from "react"
import {Modal} from "react-bootstrap"
import "./BuyBonds.scss"
import peep from "../assets/image/peep.svg"
import SelectCurrency from "../Modal/SelectCurrency";

const BuyBonds = ({open, handleClose, setWelcome, completedProfile}) => {
  const [currencyModal, setCurrencyModal ] = useState(false);
  const handleCurrencyModal = ()=>{
    setCurrencyModal(!currencyModal);
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
                  Bonds give access to high and stable yield investment
                  opportunities secured by emerging market real world assets.
                </p>{
                  completedProfile ?
                  <button
                  className="btn-continue"
                  onClick={() => {
                    handleClose()
                    setCurrencyModal(true)
                  }}>
                  Continue
                </button>
                :
                <button
                  className="btn-continue"
                  onClick={() => {
                    handleClose()
                    setWelcome(true)
                  }}>
                  Continue
                </button>}
              </div>
              <img src={peep} alt="" className="peep-img" />
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <SelectCurrency open={currencyModal} handleClose={handleCurrencyModal}/>
    </>
  )
}

export default BuyBonds
