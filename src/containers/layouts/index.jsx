import React from "react"
import styled from "styled-components"

const Layout = ({children}) => {
  return (
    <>
    <h1>Header</h1>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout