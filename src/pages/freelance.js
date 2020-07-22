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

const ContactInfo = styled.div`
  font-family: "Montserrat Alternates";
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  @media (min-width: 600px) {
    font-size: 50px;
  }
`

const Questions = styled.div`
  font-family: "Montserrat Alternates";
  width: 70%;
  text-align: center;
  margin: auto;
  margin-bottom: 30px;
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 28px;
    max-width: 800px;
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

const Name = styled.h3`
  font-family: "Montserrat Alternates";
  margin: 0 0 8px 0;
  font-size: 35px;
  @media (min-width: 800px) {
    font-size: 50px;
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
    <SectionTitle>Contact info</SectionTitle>
  </Layout>
)

export default Freelance
