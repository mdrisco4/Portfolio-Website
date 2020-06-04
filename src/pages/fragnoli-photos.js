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
        This is a freelance project I undertook that helped me develop skills in
        discerning with what the client is looking for and setting up a user
        friendly backend so after completing the site the client can continually
        update their site without having to write any code. While I have worked
        with content management systems before it has always been as part of a
        team, so learning how to set it up myself and authorize the client was
        invaluable experience.
      </ProjectDescription>
      <div
        style={{
          display: "flex",
        }}
      >
        <AccompanyingImage
          src="https://i.imgur.com/Deq0uiQ.png"
          style={{
            width: "38%",
          }}
        />
        <AccompanyingImage
          src="https://i.imgur.com/jcYAasi.png"
          style={{
            width: "38%",
          }}
        />
      </div>
      <SectionTitle>Approach</SectionTitle>
      <ProjectDescription>
        While I like to seek out new technologies to build with, this was my
        first freelance project so working with some familiar technologies
        seemed advantageous. Setting the project up itself still proved
        challenging as I have never tackled that part of the process myself and
        usually have been brought on after the genesis of a project to tackle
        and close issues.
      </ProjectDescription>
      <SectionTitle>Problems</SectionTitle>
      <ProjectDescription>
        As mentioned before, setting up everything needed for this project
        proved challenging. Primarily adding the needed code in the config file
        and structuring and querying the data as efficiently as possible.
        Additionally bringing on a client who is unfamiliar with coding and
        setting them up with admin permissions in the CMS was a process but was
        an excellent learning experience.
      </ProjectDescription>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "38%",
            marginLeft: "8%",
          }}
        >
          <AccompanyingImage
            src="https://i.imgur.com/KuiI02n.png"
            style={{
              width: "100%",
            }}
          />
          <AccompanyingImage
            src="https://i.imgur.com/C2K9MLS.png"
            style={{
              width: "100%",
            }}
          />
        </div>
        <AccompanyingImage
          src="https://i.imgur.com/Fla7Vxy.png"
          style={{
            width: "38%",
            height: "80%",
            marginTop: "10%",
          }}
        />
      </div>
      <SectionTitle>Solutions</SectionTitle>
      <ProjectDescription>
        Once the client was onboarded and the dynamic fetch was worked out it
        was more or less just a matter of writing the code. I referred to other
        photography sites for color scheming and parsed through fonts until I
        found what I thought fit. I also added in some menu functionality to
        provide a slick, professional aesthetic.
      </ProjectDescription>
    </Container>
  </Layout>
)

export default FragnoliPhotos
