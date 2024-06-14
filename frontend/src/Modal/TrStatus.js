import React from "react"
import {Modal} from "react-bootstrap"
import "./TrStatus.scss"
import {RiCloseCircleFill} from "react-icons/ri"
import cancel from "../assets/image/stamp2.png"

const TrStatus = ({open, handleClose, setBuyBondsModal, err}) => {
  return (
    <>
      <div className="modal-div">
        <Modal show={open} onHide={handleClose} className="tr-status">
          <Modal.Header closeButton>
            <Modal.Title>
              <RiCloseCircleFill
                style={{color: "#c70039", width: "52px", height: "52px"}}
              />
              <br />
              Transaction Failed
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="section-content">
              <div className="container">
                <img src={cancel} alt="" />
                <p>
                  Error encountered
                  <br />
                  <span style={{color: "#c70039", fontWeight: 700}}>{err}</span>
                </p>
              </div>
              <button
                className="btn-continue"
                onClick={() => {
                  handleClose()
                  setBuyBondsModal()
                }}>
                Okay
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default TrStatus
