// import logo from "./logo.svg";
import "./App.scss"
// import PageNavBar from "./component/Nav";
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import NewHome from "./pages/NewHome"
import Layout from "./Layout/Layout"
import Lending from "./pages/Lending"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import InrLayout from "./Layout/InrLayout"
import Borrow from "./pages/Borrow"

function App() {
  return (
    <React.Fragment>
      <Router>
        <ToastContainer />
        <Routes>
          <Route
            path="/home"
            element={
              <InrLayout>
                <Home />
              </InrLayout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <NewHome />
              </Layout>
            }
          />
          <Route
            path="/lending"
            element={
              <Layout>
                <Lending />
              </Layout>
            }
          />
          <Route
            path="/borrow"
            element={
              <Layout>
                <Borrow />
              </Layout>
            }
          />
        </Routes>
      </Router>
      {/* <PageNavBar /> */}
      {/* <Home />  */}
    </React.Fragment>
  )
}

export default App
