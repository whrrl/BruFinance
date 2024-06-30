import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import "./Login.scss"
import { toast } from "react-toastify"
import { FaUser } from "react-icons/fa"
import { FiRefreshCw } from "react-icons/fi"
import { registerUsingOTP, verifyOTPFun, storeData, resendOTPFun } from "../services/apiService"
import Profile from "../Modal/Profile";
import SelectCurrency from "../Modal/SelectCurrency";
import { useNavigate } from "react-router-dom";

const Login = ({ open, handleClose, bond }) => {
  const [tab, setTab] = useState("Login")
  const [number, setNumber] = useState()
  const [otp, setOtp] = useState()
  const [profile, setProfile] = useState(false)
  const [currencyModal, setCurrencyModal] = useState(false)

  let navigate = useNavigate();

  const handleNumber = (e) => {
    if (e.target.value?.length === 11) {
      setNumber(number)
    } else {
      setNumber(e.target.value)
    }
  }
  const handleOtpInput = (e) => {
    if (e.target.value?.length === 5) {
      setOtp(otp)
    } else {
      setOtp(e.target.value)
    }
  }

  const handleLogin = async () => {
    if (!number || number?.length < 10) {
      return toast.error("Please Provide Valid Number")
    }
    if (number?.length === 10) {
      setTab("Otp")
      const data = await registerUsingOTP(number)
      if (data.success) {
        toast.success("OTP sent successfully")
      }
    }
  }

  const handleResend = async () => {
    const data = await resendOTPFun(number)
    if (data.success) {
      toast.success("OTP resent successfully")
    }
  }

  const handleSignup = async () => {
    if (!number || number?.length < 10) {
      return toast.error("Please Provide Valid Number")
    }
    if (number?.length === 10) {
      setTab("Otp")
      const data = await registerUsingOTP(number)
      if (data.success) {
        toast.success("OTP sent successfully")
      }
    }
  }

  const handleOtp = async () => {
    if (!otp || otp?.length < 4) {
      return toast.error("Please Provide Valid OTP")
    }
    if (otp?.length === 4) {
      let verifyData = {
        phoneNo: `91${number}`,
        code: otp,
      }
      handleClose()
      const data = await verifyOTPFun(verifyData)
      storeData('token', data.token)
      if (data.success === true) {
        // console.log(data,'usersss',data.user)
        toast.success("OTP verified successfully")
        if (data.user?.profileCompleted === "true") {
          if (bond) {
            // setCurrencyModal(!currencyModal)
            navigate('/home');

          } else {
            navigate('/borrow');
          }
        } else {
          handleClose()
          setProfile(!profile)
        }
      }
    }
  }

  const handleProfile = async () => setProfile(!profile);
  const handleCurrency = async () => setCurrencyModal(!currencyModal);

  return (
    <>
      <Modal show={open} onHide={handleClose} className="blur-login">
        <Modal.Body className="login-body">
          {tab === "Login" && (
            <>
              <h3>Login to Your Account</h3>
              <div className="login-content">
                <FaUser className="user-symbol" />
                <p>Please enter your phone number to login</p>
                <input
                  type="number"
                  placeholder="Phone No"
                  value={number}
                  maxLength="10"
                  onChange={handleNumber}
                />
              </div>
              <button className="btn-other" onClick={handleLogin}>
                Login
              </button>
              <div className="login-footer">
                <p>New Here?</p>
                <p
                  className="sign-up"
                  onClick={() => {
                    setTab("Register")
                  }}>
                  Sign Up
                </p>
              </div>
            </>
          )}
          {tab === "Otp" && (
            <>
              <h3>Login to Your Account</h3>
              <div className="login-content">
                <FaUser className="user-symbol" />
                <p>Please enter OTP sent to your mobile no</p>
                <input
                  type="number"
                  placeholder="0000"
                  value={otp}
                  maxLength="4"
                  onChange={handleOtpInput}
                />
              </div>
              <button className="btn-other" onClick={handleOtp}>
                Login
              </button>
              <div onClick={() => handleResend()} style={{ cursor: "pointer" }} className="login-footer">
                <FiRefreshCw />
                <p>Resend OTP</p>
              </div>
            </>
          )}
          {tab === "Register" && (
            <>
              <h3>Sign Up</h3>
              <div className="login-content">
                <FaUser className="user-symbol" />
                <p>Please enter your phone number to signup</p>
                <input
                  type="number"
                  placeholder="Phone No"
                  maxLength="10"
                  value={number}
                  onChange={handleNumber}
                />
              </div>
              <button className="btn-other" onClick={handleSignup}>Sign Up</button>
              <div className="login-footer">
                <p>Already register?</p>
                <p
                  className="sign-up"
                  onClick={() => {
                    setTab("Login")
                  }}>
                  Log In
                </p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>

      <Profile open={profile} handleClose={handleProfile} />
      <SelectCurrency open={currencyModal} handleClose={handleCurrency} />
    </>
  )
}

export default Login
