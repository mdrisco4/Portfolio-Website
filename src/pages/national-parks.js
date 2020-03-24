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
const ImageTitle = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 33px;
  font-weight: bold;
  margin: 10px 0 0 0;
`

const ImageText = styled.p`
  font-family: "Montserrat Alternates";
  font-weight: bold;
  font-size: 20px;
  margin: 0;
`

const PagesText = styled.p`
  font-family: "Montserrat Alternates";
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin: 0 20%;
`

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const PagesContainer = styled.div`
  display: flex;
`
const AccompanyingImage = styled.img`
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 20px;
`

const HomePageImage = styled.img`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 20px;
`

const ParkPageImage = styled.img`
  width: 35%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 20px;
`

const TriviaGame = () => (
  <Layout>
    <Container>
      <Title>National Parks</Title>
      <ProjectLinkContainer>
        <DeployedLink
          href="https://us-national-parks.netlify.com/"
          target="_blank"
        >
          NATIONAL PARKS
        </DeployedLink>
        <GitHubLink
          href="https://github.com/mdrisco4/National-Parks"
          target="_blank"
        >
          GITHUB REPO
        </GitHubLink>
      </ProjectLinkContainer>
      <SectionTitle>Description</SectionTitle>
      <ProjectDescription>
        The purpose of this project was to create a site that could be used to
        access many different national parks with easy links to see details with
        links to the indiviual park websites. It is populated with the National
        Park Service API and employs React Router for site navigation. By
        employing these tools only a handful of pages need to be built to create
        a sizeable resource with a large amount of data.
      </ProjectDescription>
      <ImageTitle>Mock Up</ImageTitle>
      <ImageText>Screenshot of the AdobeXD file I was working with</ImageText>
      <AccompanyingImage src="https://i.imgur.com/1RE5dQo.png" />
      <SectionTitle>Approach</SectionTitle>
      <ProjectDescription>
        The first step in approaching this undertaking was to use a JSON file
        with a portion of the API data to build out the home page, basic park
        page layout and test functionality. Once this was successfully completed
        an API fetch was set up to pull larger amounts of data. With the fetch
        used on the home page linking the images to the separate park pages a
        single fetch can be written to populate the park page with the
        appropriate data using the "park code" provided in the API.
      </ProjectDescription>
      <ImageTitle>Pages</ImageTitle>
      <PagesText>
        Screen shots of the top and bottom of the Parks Index page with header
        and footer and the Harriet Tubman National Park page
      </PagesText>
      <PagesContainer>
        <HomePageContainer>
          <HomePageImage src="https://i.imgur.com/BHEpJ6a.png" />
          <HomePageImage src="https://i.imgur.com/LG3oNDN.png" />
        </HomePageContainer>
      <ParkPageImage src="https://i.imgur.com/W0BfGCv.png" />
      </PagesContainer>
      <SectionTitle>Problems</SectionTitle>
      <ProjectDescription>
        Home page loading time became an issue when I switched the data I am
        using from a JSON file to an API fetch. There are also issues to be
        resolved regarding image sizing on the individual parks' pages and with
        the number of images provided for each park from the API.
      </ProjectDescription>
      <ImageTitle></ImageTitle>
      <ImageText></ImageText>
      <SectionTitle>Solutions</SectionTitle>
      <ProjectDescription>
        I have reduced the number of parks available on the homne page to
        address the loading time issue with the intent of creating additional
        home pages that can be scrolled through with a fixed number of parks on
        each page. While this has helped loading time there is still work to be
        done there. I am also working on ways to resolve the issues with sets of
        images provided for each park and how best to fetch and render them.In
        order to provide additional data that the API fetch and data population
        does not provide a link was added to direct users to the site for a
        given park using the URL provided in the API.
      </ProjectDescription>
    </Container>
  </Layout>
)

export default TriviaGame
