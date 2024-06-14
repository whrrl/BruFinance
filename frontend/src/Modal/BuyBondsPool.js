import React, {useState} from "react"
import {Modal} from "react-bootstrap"
import "./BuyBondsPool.scss"
import usdt from "../../src/assets/image/usdt.png"
import TrStatus from "./TrStatus"

const BuyBondsPool = ({open, handleClose}) => {
  const [number, setNumber] = useState()
  const [trStatus, setTrStatus] = useState(false)
  return (
    <>
      <div className="modal-div">
        <Modal show={open} onHide={handleClose} className="buy-bonds">
          <Modal.Header closeButton>
            <Modal.Title>Buy Bonds</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="section-content">
              <div className="tab">
                <div className="tab-row">
                  <li>
                    Pool Name :{" "}
                    <span style={{color: "#7c037b"}}>IndiaAgro</span>
                  </li>
                  <li>
                    Collateral Type :{" "}
                    <span style={{color: "#7c037b"}}>Agri Commodity</span>
                  </li>
                </div>
                <div className="tab-row">
                  <li>
                    APY ( % ) :{" "}
                    <span style={{color: "#7c037b"}}>8.00 % p.a</span>
                  </li>
                  <li>
                    Lock-in Period :{" "}
                    <span style={{color: "#7c037b"}}>15552000 seconds</span>
                  </li>
                </div>
              </div>
              <div className="second-container">
                <div className="flex-col">
                  <p>Select Crypto Asset</p>
                  <div className="select-crypto">
                    <img src={usdt} alt="" />
                    <p>Tether (USDT)</p>
                  </div>
                </div>
                <div className="flex-col">
                  <p>Enter Amount</p>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="third-container">
                <div className="flex-col">
                  <p>Price Breakup</p>
                  <div className="price-breakup">
                    <p>
                      Conversion Rate ( USDT 1 = USD 1 )
                      <span style={{color: "#7c037b"}}>$ 0</span>
                    </p>
                    <p>
                      Platform fees :{" "}
                      <span style={{color: "#7c037b"}}>$ 0</span>
                    </p>
                    <p>
                      Total USDT deducted :{" "}
                      <span style={{color: "#7c037b"}}>$ 0</span>
                    </p>
                    <p style={{borderTop: "1px solid grey"}}>
                      Brú Bonds you'll receive :{" "}
                      <span style={{color: "#7c037b"}}>$ 0</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="btn">
                <button
                  className="btn-continue"
                  onClick={() => handleClose(false)}>
                  Cancel
                </button>
                <button
                  className="btn-continue"
                  onClick={() => setTrStatus(true)}>
                  Buy Now
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <TrStatus
          open={trStatus}
          handleClose={setTrStatus}
          setBuyBondsModal={handleClose}
          err={
            number
              ? "You don't have enough balance in your wallet"
              : "Amount should not be 0"
          }
        />
      </div>
    </>
  )
}

export default BuyBondsPool
