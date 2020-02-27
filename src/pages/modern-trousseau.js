import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"
// import { faFileExcel } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  text-align: center;
`

const ProjectLinkContainer = styled.div`
  width: 50%;
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1000px) {
    width: 40%;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
  }
`

const DeployedLink = styled.a`
  width: 50%;
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
  @media (min-width: 1000px) {
    width: 42%;
  }
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
`

const GitHubLink = styled.a`
  width: 50%;
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
  @media (min-width: 1000px) {
    width: 42%;
  }
  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 4px solid black;
  }
`

const Title = styled.h1`
  /* border: 2px solid red; */
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const SectionTitle = styled.div`
  font-size: 36px;
`

const ProjectDescription = styled.p`
  /* text-align: center; */
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid black;s */
  font-size: 20px;
`

const SprintTitle = styled.div`
 font-size: 25px;
 margin: 15px 0;
`

const SprintOneImages = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const SprintTwoImages = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const SprintTwoExample = styled.div`
width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;
    width: 25%;
  }
`

const ComponentImage = styled.img`
  width: 70%;
  /* border: 3px solid darkblue; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 20px;
`

const PageImage = styled.img`
  width: 55%;
  /* border: 3px solid darkblue; */
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 25px;
  margin-bottom: 20px; */
`

const ModernTrousseau = () => (
  <Layout>
    {/* <AccompanyingImage src="https://i.imgur.com/OvOfWYM.png"></AccompanyingImage> */}



    {/* <AccompanyingImage src="https://i.imgur.com/MO8RrlX.png"></AccompanyingImage>
    <AccompanyingImage src="https://i.imgur.com/mjPtfKk.png"></AccompanyingImage> */}
    {/* <AccompanyingImage src="https://i.imgur.com/H42DEcf.png"></AccompanyingImage> */}
    {/* <AccompanyingImage src="https://i.imgur.com/74ZTUoz.png"></AccompanyingImage> */}
    <Container>
      <Title>Modern Trousseau</Title>
      <ProjectLinkContainer>
        <DeployedLink href="" target="_blank">
          MODERN TROUSSEAU
        </DeployedLink>
        <GitHubLink
          href="https://github.com/jserrao/modern-trousseau-gatsby"
          target="_blank"
        >
          GITHUB REPO
        </GitHubLink>
      </ProjectLinkContainer>
      <SectionTitle>Description</SectionTitle>
      <ProjectDescription>
        Modern Trousseau is a client project that I worked on with a team of
        fifteen using Storybook for branch management. I was assigned to the
        front end team where we started the first sprint by building components
        to Figma specifications while the back end team worked on setting up a
        database with Contentful and GraphQL. Once all components were complete
        the front end team moved forward with using the compnentes to build out
        full pages for our second sprint. The final stages of the project
        involved connecting the pages to each other and populating the site with
        data from the database deployed by the backend team.
      </ProjectDescription>
      <SprintTitle>Sprint One</SprintTitle>
      <SprintOneImages>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid yellow",
          }}
        >
          <ComponentImage src="https://i.imgur.com/mjPtfKk.png"
          style={{
            border: '3px solid white',
            width: '80%',
          }}></ComponentImage>
          <ComponentImage src="https://i.imgur.com/MO8RrlX.png"
          style={{
            border: '3px solid gray',
            width: '80%',
          }}></ComponentImage>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid green",
          }}
        >
          <ComponentImage src="https://i.imgur.com/74ZTUoz.png"
          style={{
            border: '3px solid black',
          }}></ComponentImage>
          <ComponentImage src="https://i.imgur.com/H42DEcf.png"
          style={{
            border: '3px solid brown',
          }}></ComponentImage>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid green",
          }}
        >
          <ComponentImage src="https://i.imgur.com/Z7FeBDk.png"
          style={{
            border: '3px solid magenta',
          }}></ComponentImage>
          <ComponentImage src="https://i.imgur.com/otTr8Uh.png"
          style={{
            border: '3px solid yellowgreen',
          }}></ComponentImage>
        </div>
      </SprintOneImages>
      <SectionTitle>Approach</SectionTitle>
      <SprintTitle>Sprint Two</SprintTitle>
      <div style={{
        display: 'flex',
        border: '1px solid black',
        width: '90%',
        marginLeft: "5%",
          marginRight: "5%",
      }}>
        <p style={{
          width: '50%',
        }}>Gowns Page</p>
        <p style={{
          width: '50%',
        }}>Gown Page</p>
      </div>
      <SprintTwoImages>
        <SprintTwoExample
          style={{
            border: "3px solid blue",
          }}
        >
          <PageImage
            src="https://i.imgur.com/D0quP8r.png"
            style={{
              width: "77%",
            }}
          ></PageImage>
          <p>Mobile</p>
        </SprintTwoExample>

        <SprintTwoExample
          style={{
            border: "3px solid orange",
          }}
        >
          <div
            style={{
              margin: "0",
            }}
          >
            <PageImage
              src="https://i.imgur.com/tesizFY.png"
              style={{
                width: "75%",
              }}
            ></PageImage>
          </div>
          <div
            style={{
              margin: "0",
            }}
          >
            <PageImage
              src="https://i.imgur.com/d2TI62G.png"
              style={{
                width: "75%",
              }}
            ></PageImage>
            <p>Desktop</p>
          </div>
        </SprintTwoExample>

        <SprintTwoExample
          style={{
            border: "3px solid purple",
          }}
        >
          <PageImage src="https://i.imgur.com/wwf5Asx.png"
          style={{
            // width: "60%",
          }}></PageImage>
          <p>Mobile</p>
        </SprintTwoExample>

        <SprintTwoExample
          style={{
            border: "3px solid green",
          }}
        >
          <PageImage src="https://i.imgur.com/f1JBD1U.png"
          style={{
            width: "70%",
          }}></PageImage>
          <p>Desktop</p>
        </SprintTwoExample>
      </SprintTwoImages>
      {/* <AccompanyingImage src="https://i.imgur.com/6xGZpEr.png"></AccompanyingImage> */}
      <ProjectDescription>
        Modern Trousseau is c client project in which our team built employing
        Storybook to track branches and parsed out GutHub issues for components
        as small as icons and forms all the way up to functional sliders,
        database populated sets of images and text and links to connect the page
        together. I was assigned to the front end and was able to build out (x,
        y, and z components) and eventually put together pages of the site per
        Figma design specifications put together by a UX design team that was
        previously constructed. The project was broken down into a series of
        'sprints' that had production goals in mind. the first sprint consisted
        of building all of the individual components that would be needed to
        construct the pages of the app, the second was page building and adding
        some functionality as far as links and responsiveness. The third, which
        is currently underway is to connect to the database deployed by the back
        end team and populate the page with data by way of GraphQL queries.
      </ProjectDescription>
      <SectionTitle>Problems</SectionTitle>
      <ProjectDescription>
        One of the biggest challenges in getting this project underway was
        learning the new technologies and resources that we would be employing
        to build this app. Storybook, Contentful, Gatsby and GraphQL were at the
        time all new to the team and there was a learning curve as far as
        figuring out how to develop this project smoothly with so many moving
        parts. Branch merge conflicts, fine tuning already built components to
        meet specifications and getting a good cadence as far as pull requests
        and edits with team leaders were all issues that the team acclimated to
        on the fly. Early on it was clear that communication was paramount to
        success as well as using other team members as resources to toubleshoot
        any blockers that arose as we moved through our assignments.
      </ProjectDescription>
      <SectionTitle>Solutions</SectionTitle>
      <ProjectDescription>
      I am currently in the process of
      refactoring some of what I have built to resolve issues that became
      evident after the team was well into the project. One of these issues was
      the usability of the site when viewing it on mobile devices.
      </ProjectDescription>
    </Container>
  </Layout>
)

export default ModernTrousseau
