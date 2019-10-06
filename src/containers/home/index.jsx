import React from "react"
import Header from "Components/header"
import Container from 'Components/container'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const HomeWrap = styled.div`

`

const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`
const Under = styled.div`
  h2 {
    font-size: 60px;
    font-weight: 900;
    margin: 0;
    line-height: 1.4;

  }
  p {
    font-size: 28px;
    color: #8a8a8a;
    margin-top: 10px;
    line-height: 1.4;
  }
`
const Br = styled.br`
  @media (min-width: 576px) {
    display: none;
  }
`
const ImgStyled = styled(Img)`
  top: 19px;
  left: 8px;
`

const Home = () => {

  const data = useStaticQuery(
    graphql`
      query {
        textIcon: file(relativePath: {eq: "text-icon.png"}) {
          childImageSharp {
            fixed(width: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <HomeWrap>
      <Container>
        <Flex>
          <Under>
            <h2>Under<Br/> Constr<ImgStyled fixed={data.textIcon.childImageSharp.fixed}/>ction</h2>
            <p>Sorry, we’re doing some work on the site.</p>
          </Under>
        </Flex>
      </Container>
    </HomeWrap>
  )
}

export default Home