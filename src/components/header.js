import React from "react"
import styled from "styled-components"
import { useState } from "react"
import "../styles/fonts.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, fas, far)

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 2rem;
    height: 0.25rem;
    background: rgb(114, 200, 179);
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: all 0.3s linear;

    :first-child {
      transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}
    }

    :nth-child(2) {
      opacity: ${({nav}) => nav ? '0' : '1'}
    }

    :nth-child(3) {
      transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50vh;
  width: 40%;
  background: rgb(77, 84, 107);
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)": "translateX(100%)")};

  ul {
    list-style-type: none;
  }

  li {
    margin-top: 1rem;
  }

  a {
    font-family: "Fira Code";
    text-decoration: none;
    color: rgb(114, 200, 179);
    font-size: 1.5rem;
    transition: color 300ms;

    :hover {
      color: #6ab4ff;
      text-shadow: 0 0 5px;
    }
  }
`

// const Wrapper = styled.div`
//   background: red;
//   height: 200vh;
// `

const Nav = styled.div`
  background: rgb(12, 24, 45);
  border-top: 24px rgb(12, 24, 45);
  border-bottom: 24px rgb(12, 24, 45);
  /* margin: -10px; */
`

const LinkContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding-left: 0;
  @media (min-width: 840px) {
    /* flex-direction: row; */
    justify-content: space-around;
    padding-right: 45%;
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
    /* color: rgb(114, 200, 179); */
    /* filter: drop-shadow(1px 1px white); */
    filter: drop-shadow(0 0 5px);
    color: #6ab4ff;
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
  color: rgb(114, 200, 179);

  /* display: inline-block; */
  position: relative;
  text-decoration: none;
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
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    /* transform: scaleX(0); */
    /* transition: text-decoration 500ms; */
  }
  /* &:hover */
  ::after {
    transform: scaleX(0);
    /* transform-origin: bottom left; */
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:hover {
    /* text-shadow: 1px 1px white; */
    /* text-decoration: underline; */
    /* color: rgb(114, 200, 179); */
    text-shadow: 0 0 5px;
    color: #6ab4ff;
  }
`

const Header = () => {

const [nav, showNav] = useState(false)


return (
  <Nav>
    {/* <Wrapper> */}
    <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
      <div />
      <div />
      <div />
    </MenuIcon>
    {/* </Wrapper> */}
    <MenuLinks nav={nav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects/">Projects</a>
        </li>
        <li>
          <a href="/resume/">Resume</a>
        </li>
        <li>
          <a href="/contact/">Contact</a>
        </li>
        <li>
          <a href="/about/">About</a>
        </li>
      </ul>
    </MenuLinks>

    <LinkContainer>
      {/* <IconLink href="/">
        <FontAwesomeIcon icon={["fas", "atom"]} size="3x" />
      </IconLink> */}
      {/* <HeaderLink href="https://github.com/mdrisco4" target="_blank">
        GitHub
      </HeaderLink> */}
      {/* <HeaderLink
        href="https://www.linkedin.com/in/michael-n-driscoll/"
        target="_blank"
      >
        LinkedIn
      </HeaderLink> */}
      {/* <HeaderLink href="/freelance/">Freelance</HeaderLink> */}
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/projects/">Projects</HeaderLink>
      <HeaderLink href="/resume/">Resume</HeaderLink>
      <HeaderLink href="/contact/">Contact</HeaderLink>
      <HeaderLink href="/about/">About</HeaderLink>
    </LinkContainer>
  </Nav>
)
}

export default Header
