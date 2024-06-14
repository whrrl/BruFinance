import React from "react"
import {Modal} from "react-bootstrap"
import "./PoolComposition.scss"

const PoolComposition = ({open, handleClose, setBuyBondsModal}) => {
  return (
    <>
      <div className="modal-div">
        <Modal show={open} onHide={handleClose} className="pool">
          <Modal.Header closeButton>
            <Modal.Title>Pool Composition</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="section-content">
              <div className="tab">
                <div className="assets">
                  Pool Name :<span style={{color: "#7c037b"}}>IndiaAgro</span>
                </div>
                <div className="assets">
                  APY (%) :<span style={{color: "#7c037b"}}>8.00% p.a</span>
                </div>
                <div className="assets">
                  Lock-in Period :{" "}
                  <span style={{color: "#7c037b"}}>15552000 seconds</span>
                </div>
                <div className="assets">
                  Type :<span style={{color: "#7c037b"}}>Agri Commodity</span>
                </div>
              </div>
              <div className="section-content">
                <table style={{width: "100%", marginTop: "10px"}}>
                  <thead className="thead">
                    <tr>
                      <th>Commodity Details</th>
                      <th>Descriptions</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody className="tbody"></tbody>
                </table>
              </div>
              <div className="btn">
                <button
                  className="btn-continue"
                  onClick={() => handleClose(false)}>
                  Cancel
                </button>
                <button
                  className="btn-continue"
                  onClick={() => {
                    handleClose()
                    setBuyBondsModal(true)
                  }}>
                  Buy Bonds
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default PoolComposition
