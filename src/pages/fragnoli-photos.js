import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const ProjectLinkContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 850px) {
    width: 40%;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
  }
`

const DeployedLink = styled.a`
  font-family: "Montserrat Alternates";
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  background-color: rgb(99, 95, 85);
  border: 4px solid darkblue;
  height: auto;
  padding: 4px 0;
  color: white;
  text-decoration: none;
  margin-bottom: 24px;
  @media (min-width: 850px) {
    width: 42%;
  }
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
`

const GitHubLink = styled.a`
  font-family: "Montserrat Alternates";
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  background-color: rgb(99, 95, 85);
  border: 4px solid darkblue;
  height: auto;
  padding: 4px 0;
  color: white;
  text-decoration: none;
  margin-bottom: 24px;
  @media (min-width: 850px) {
    width: 42%;
  }
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
`

const Title = styled.h1`
  font-family: "Montserrat Alternates";
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const SectionTitle = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 36px;
`

const ProjectDescription = styled.p`
  font-family: "Montserrat Alternates";
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
`

const AccompanyingImage = styled.img`
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 20px;
`

const FragnoliPhotos = () => (
  <Layout>
    <Container>
      <Title>Fragnoli Photos - UNDER CONSTRUCTION</Title>
      <ProjectLinkContainer>
        <DeployedLink
          href="https://www.fragnoli-photography.com/"
          target="_blank"
        >
          PORTFOLIO SITE
        </DeployedLink>
        <GitHubLink
          href="https://github.com/mdrisco4/brain-photo-site-frontend"
          target="_blank"
        >
          GITHUB REPO
        </GitHubLink>
      </ProjectLinkContainer>
      <SectionTitle>Description</SectionTitle>
      <ProjectDescription>
        stuff and things
      </ProjectDescription>
      <AccompanyingImage src="https://i.imgur.com/Deq0uiQ.png" />
      <SectionTitle>Approach</SectionTitle>
      <ProjectDescription>
        1234567
      </ProjectDescription>
      <AccompanyingImage src="https://i.imgur.com/jcYAasi.png" />
      <SectionTitle>Problems</SectionTitle>
      <ProjectDescription>
       the the
      </ProjectDescription>
      <AccompanyingImage src="https://i.imgur.com/KuiI02n.png" />
      <SectionTitle>Solutions</SectionTitle>
      <ProjectDescription>
        the the
      </ProjectDescription>
      <AccompanyingImage src="https://i.imgur.com/C2K9MLS.png" />
      <AccompanyingImage src="https://i.imgur.com/Fla7Vxy.png" />
    </Container>
  </Layout>
)

export default FragnoliPhotos
