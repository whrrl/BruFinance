import React from "react"
import PageNavBar from "../component/Nav"

const Layout = ({children}) => {
  return (
    <div className="layout">
      <PageNavBar />
      {children}
    </div>
  )
}

export default Layout
