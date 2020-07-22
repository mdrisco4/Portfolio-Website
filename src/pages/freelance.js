import React from "react"
import "../styles/fonts.css"
import Layout from "../components/layout"
import styled from "styled-components"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, fas, far)

const SectionTitle = styled.div`
  font-family: "Montserrat Alternates";
  text-align: center;
  font-size: 54px;
  font-weight: 700;
  margin: 20px 0 36px 0;
`

const PointWrapper = styled.div`
  display: flex;
`

const BulletPoints = styled.div`
  font-family: "Montserrat Alternates";
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  padding-left: 10%;
`

const ServicesInfo = styled.div`
  font-family: "Montserrat Alternates";
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  width: 80%;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 55%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
  }
`

const ProjectStill = styled.img`
  width: 100%;
  height: auto;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`

const ProjectDescription = styled.div`
  font-family: "Montserrat Alternates";
  display: none;
  @media (min-width: 750px) {
    display: block;
    text-align: center;
    font-size: 21px;
    position: absolute;
    bottom: 2px;
    right: 0;
    background: black;
    color: white;
    opacity: 0;
    width: 100%;
    height: 100%;

    -webkit-transition: visibility 0s, opacity 0.5s linear;
    transition: visibility 0s, opacity 0.5s linear;
    &:hover {
      width: 100%;
      visibility: visible;
      opacity: 0.7;
    }
  }
`

const MobileProjectDescription = styled.div`
  font-family: "Montserrat Alternates";
  display: flex;
  width: 75%;
  font-size: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  justify-content: center;
  @media (min-width: 750px) {
    display: none;
  }
`

const ProjectTitle = styled.div`
  font-family: "Montserrat Alternates";
  padding-left: 7.5%;
  padding-right: 7.5%;
  text-align: center;
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 20px;
`

const ProjectLink = styled.a`
  font-family: "Montserrat Alternates";
  text-decoration: none;
  font-size: 25px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 40px;
  width: 20%;
  height: auto;
  padding: 6px;
  border: 4px solid darkblue;
  background-color: rgb(99, 95, 85);
  color: white;
  cursor: pointer;
  @media (min-width: 620px) {
  }
  &:hover {
    border: 4px solid black;
    background-color: darkblue;
    color: rgb(110, 176, 249);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;
  @media (min-width: 800px) {
    height: auto;
    flex-direction: row;
  }
`

const MyInfo = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 800px) {
    height: 100%;
    width: 70%;
    margin: auto;
    flex-direction: row;
  }
`

const ContactDetails = styled.h3`
  font-family: "Montserrat Alternates";
  margin: 4px 0;
  font-size: 24px;
  @media (min-width: 800px) {
    font-size: 30px;
  }
`

const PhoneLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 1px white;
  text-decoration: none;
  font-weight: 900;
  margin: 4px 5%;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter:drop-shadow(1px 1px white);
  }
`

const EmailLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  margin: 4px 5%;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const LinkedInLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  margin: 4px 5%;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const GitHubLink = styled.a`
  font-family: "Montserrat Alternates";
  color: black;
  text-shadow: 1px 1px 3px white;
  text-decoration: none;
  font-weight: bold;
  margin: 4px 5%;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  &:hover {
    color: darkblue;
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`

const Freelance = () => (
  <Layout>
    <SectionTitle>Services Offered</SectionTitle>
    <PointWrapper>
      <BulletPoints>∙</BulletPoints>
      <ServicesInfo>Create clear technical specifications</ServicesInfo>
    </PointWrapper>
    <PointWrapper>
      <BulletPoints>∙</BulletPoints>
      <ServicesInfo>
        Expand existing software to meet the changing needs of our key
        demographics
      </ServicesInfo>
    </PointWrapper>
    <PointWrapper>
      <BulletPoints>∙</BulletPoints>
      <ServicesInfo>
        Write and test code to ensure compatibility and stability: refine and
        rewrite as necessary
      </ServicesInfo>
    </PointWrapper>
    <PointWrapper>
      <BulletPoints>∙</BulletPoints>
      <ServicesInfo>
        Create innovative, scalable, fault-tolerant software solutions for our
        clients and customer base
      </ServicesInfo>
    </PointWrapper>
    {/* <PointWrapper>
      <BulletPoints>∙</BulletPoints>
      <ServicesInfo></ServicesInfo>
    </PointWrapper>
    <PointWrapper>
      <BulletPoints>∙</BulletPoints>
      <ServicesInfo></ServicesInfo>
    </PointWrapper>
    <PointWrapper>
      <BulletPoints>∙</BulletPoints>
      <ServicesInfo></ServicesInfo>
    </PointWrapper> */}
    <SectionTitle>Projects</SectionTitle>
    <ProjectTitle>Modern Troussaeu</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/DOJXKHR.png"></ProjectStill>
      <ProjectDescription>
        An open source client project built with React, Contentful and GraphQL
        on an Agile team. I provided code for the front end working on a team
        utilizing Storybook for component tracking and git branch management
        during development.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      An open source client project built with React, Contentful and GraphQL on
      an Agile team. I provided code for the front end working on a team
      utilizing Storybook for component tracking and git branch management
      during development.
    </MobileProjectDescription>
    <ProjectLink href="/modern-trousseau">Learn More</ProjectLink>

    <ProjectTitle>Photography Site</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/s2xoqpd.png"></ProjectStill>
      <ProjectDescription>
        A freelance project I made for an aspiring professional photographer. I
        built this project with a Gatsby frontend and employed the Contentful
        content management system. With Contentful I authorized the client to
        add, delete or make changes to photos displayed in their portfolio. With
        a dynamic data fetch this allows the client to continue to update with a
        user friendly drag and drop interface
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A freelance project I made for an aspiring professional photographer. I
      built this project with a Gatsby frontend and employed the Contentful
      content management system. With Contentful I authorized the client to add,
      delete or make changes to photos displayed in their portfolio. With a
      dynamic data fetch this allows the client to continue to update with a
      user friendly drag and drop interface
    </MobileProjectDescription>
    <ProjectLink href="/fragnoli-photos">Learn More</ProjectLink>
    <SectionTitle>Contact info</SectionTitle>
    <Container>
      <MyInfo>
        <PhoneLink href="tel:1-585-719-7720">1-585-719-7720</PhoneLink>
        <ContactDetails>Washington, DC 20005</ContactDetails>
        <EmailLink href="mailto:michaelndriscoll81@gmail.com" target="_blank">
        <FontAwesomeIcon icon={["far", "envelope"]} size="3x" />
        </EmailLink>
        <LinkedInLink
          href="https://www.linkedin.com/in/michael-n-driscoll/"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
        </LinkedInLink>
        <GitHubLink href="https://github.com/mdrisco4" target="_blank">
        <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
        </GitHubLink>
      </MyInfo>
    </Container>
    <hr
      style={{
        border: "1px solid black",
      }}
    ></hr>
  </Layout>
)

export default Freelance
