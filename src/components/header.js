import React from "react"
import styled from "styled-components"
import "../styles/fonts.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, fas, far)

const Nav = styled.div`
  background: rgb(12, 24, 45);
  border-top: 24px rgb(12, 24, 45);
  border-bottom: 24px rgb(12, 24, 45);
  /* margin: -10px; */
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  @media (min-width: 840px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const IconLink = styled.a`
  font-family: "Monoton";
  color: white;
  font-weight: 500;
  font-size: 30px;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  color: rgb(114, 200, 179);
  @media (min-width: 700px) {
    margin: none;
  }
  &:hover {
    /* color: rgb(110, 176, 249); */
    color: rgb(114, 200, 179);
    /* filter: drop-shadow(1px 1px white); */
    filter: drop-shadow(0 0 5px);
  }
`

const HeaderLink = styled.a`
  /* font-family: "Monoton"; */
  font-family: "Fira Code";
  color: white;
  font-weight: 500;
  font-size: 28px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-decoration: none;

  display: inline-block;
  position: relative;
  color: rgb(114, 200, 179);
  @media (min-width: 700px) {
    margin: none;
  }
  @media (min-width: 840px) {
    margin: none;
    font-size: 24px;
  }
  @media (min-width: 1000px) {
    margin: none;
    font-size: 28px;
  }
  &:hover {
    /* text-shadow: 1px 1px white; */
    /* text-decoration: underline; */
    color: rgb(114, 200, 179);
    text-shadow: 0 0 5px;
  }
  ::after {
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`



const Header = () => (
  <Nav>
    <LinkContainer>
      <IconLink href="/">
        <FontAwesomeIcon icon={["fas", "atom"]} size="3x" />
      </IconLink>
      <HeaderLink href="https://github.com/mdrisco4" target="_blank">
        GitHub
      </HeaderLink>
      <HeaderLink
        href="https://www.linkedin.com/in/michael-n-driscoll/"
        target="_blank"
      >
        LinkedIn
      </HeaderLink>
      {/* <HeaderLink href="/freelance/">Freelance</HeaderLink> */}
      <HeaderLink href="/resume/">Resume</HeaderLink>
      <HeaderLink href="/contact/">Contact</HeaderLink>
      <HeaderLink href="/about/">About</HeaderLink>
    </LinkContainer>
  </Nav>
)

export default Header
