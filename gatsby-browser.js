import React from "react"
import Layout from "Containers/layouts"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}