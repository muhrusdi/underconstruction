import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from 'Components/container'
import { Helmet } from "react-helmet"
import "./styles.css"
import Particles from "react-particles-js"
import img1 from "Images/img-1.png"
import img2 from "Images/img-2.png"
import img3 from "Images/img-3.png"

const Nav = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 0
  height: 60px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const Layout = ({children}) => {

  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: {eq: "dauroh-logo-4.png"}) {
          childImageSharp {
            fixed(width: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <>
      <Helmet>
        <title>Dauroh</title>
      </Helmet>
      <Particles
        style={{position: "absolute", zIndex: -1}}
        params={{
          "particles": {
              "number": {
                  "value": 10,
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "line_linked": {
                  "enable": false
              },
              "move": {
                  "speed": 0.7,
                  "out_mode": "out"
              },
              "shape": {
                  "type": [
                      "images",
                  ],
                  "images": [
                      {
                          "src": img1,
                          "height": 20,
                          "width": 23
                      },
                      {
                          "src": img2,
                          "height": 20,
                          "width": 20
                      },
                      {
                          "src": img3,
                          "height": 20,
                          "width": 20
                      },
                  ]
              },
              "color": {
                  "value": "#CCC"
              },
              "size": {
                  "value": 30,
                  "random": false,
                  "anim": {
                      "enable": true,
                      "speed": 4,
                      "size_min": 10,
                      "sync": false
                  }
              }
          },
          "retina_detect": false
      }} />
      <Nav>
      <Container>
        <Logo>
          <span><Img fixed={data.logo.childImageSharp.fixed}/></span>
          <h1>Dauroh</h1>
        </Logo>
        </Container>
      </Nav>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout