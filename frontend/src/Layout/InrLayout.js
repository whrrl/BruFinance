import React from "react"
import InrNavBar from "../component/InrNav"

const InrLayout = ({children}) => {
  return (
    <div className="layout">
      <InrNavBar />
      {children}
    </div>
  )
}

export default InrLayout
