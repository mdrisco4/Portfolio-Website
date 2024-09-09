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

  @media (min-width: 840px) {
    display: none;
  }

  div {
    width: 1.9rem;
    height: 0.25rem;
    background: rgb(114, 200, 179);
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: all 0.3s linear;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40vh;
  width: 50%;
  background: rgb(77, 84, 107);
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  padding-right: 20px;
  z-index: 1;

  @media (min-width: 480px) {
    padding-right: 25px;
    height: 42vh;
    width: 50%;
  }
  @media (min-width: 550px) {
    padding-right: 30px;
    height: 45vh;
    width: 40%;
  }
  @media (min-width: 630px) {
    padding-right: 36px;
    height: 48vh;
    width: 35%;
  }
  @media (min-width: 700px) {
    padding-right: 45px;
    height: 51vh;
    width: 32%;
  }
  @media (min-width: 750px) {
    padding-right: 48px;
    height: 54vh;
    width: 30%;
  }
  @media (min-width: 800px) {
    margin-top: 28px;
    height: 54vh;
  }
  @media (min-width: 840px) {
    display: none;
  }

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
    font-size: 20px;
    transition: color 300ms;

    @media (min-width: 480px) {
      font-size: 24px;
    }
    @media (min-width: 550px) {
      font-size: 27px;
    }
    @media (min-width: 630px) {
      font-size: 30px;
    }
    @media (min-width: 700px) {
      font-size: 32px;
    }
    @media (min-width: 750px) {
    }

    :hover {
      color: #6ab4ff;
      text-shadow: 0 0 5px;
    }
  }
`

const Nav = styled.div`
  background: rgb(12, 24, 45);
  border-top: 24px rgb(12, 24, 45);
  border-bottom: 24px rgb(12, 24, 45);
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const IconLink = styled.a`
  font-family: "Monoton";
  color: white;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  color: rgb(114, 200, 179);
  display: none;

  @media (min-width: 840px) {
    display: block;
    padding-left: 15px;
    padding-top: 5px;
  }

  &:hover {
    filter: drop-shadow(0 0 5px);
    color: #6ab4ff;
  }
`

const LinkContainer = styled.div`
  display: flex;

  @media (min-width: 840px) {
    justify-content: space-around;
    margin-left: auto;
  }
`

const HeaderLink = styled.a`
  font-family: "Fira Code";
  color: white;
  margin-top: 20px;
  color: rgb(114, 200, 179);
  margin-bottom: 30px;
  display: none;
  text-decoration: none;

  @media (min-width: 840px) {
    font-size: 20px;
    display: block;
    padding-left: 30px;
    padding-right: 10px;
  }
  @media (min-width: 1000px) {
    font-size: 24px;
  }

  @media (min-width: 1200px) {
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
  }
  ::after {
    transform: scaleX(0);
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:hover {
    text-shadow: 0 0 5px;
    color: #6ab4ff;
  }
`

const Header = () => {
  const [nav, showNav] = useState(false)

  return (
    <Nav>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
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

      <HeaderContainer>
        <IconLink href="/">
          <FontAwesomeIcon icon={["fas", "atom"]} size="3x" />
        </IconLink>
        <LinkContainer>
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/projects/">Projects</HeaderLink>
          <HeaderLink href="/resume/">Resume</HeaderLink>
          <HeaderLink href="/contact/">Contact</HeaderLink>
          <HeaderLink href="/about/">About</HeaderLink>
        </LinkContainer>
      </HeaderContainer>
    </Nav>
  )
}

export default Header
