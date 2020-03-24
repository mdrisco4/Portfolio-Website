import React from "react"
import CollectionList from "../components/MoTroEdit"
import Layout from "../components/layout"
import styled from "styled-components"
import "../styles/fonts.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  text-align: center;
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

const SprintTitle = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 42px;
  font-weight: bold;
  margin: 15px 0;
`

const SprintOneImages = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const SprintTwoImages = styled.div`
  display: flex;
  flex-direction: column;
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

const ComponentShotsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ComponentLabel = styled.p`
  font-family: "Montserrat Alternates";
  font-weight: 900;
  font-size: 30px;
`

const MobileDesktopLabel = styled.p`
  font-family: "Montserrat Alternates";
  font-weight: bold;
  font-size: 20px;
`

const AltComponentImage = styled.img`
  width: 20%;
  margin-left: auto;
  margin-right: auto;
`

const ComponentImage = styled.img`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`

const PageLabelContainer = styled.div`
  display: flex;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
`

const MobilePageLabel = styled.div`
  display: inline-block;
  font-family: "Montserrat Alternates";
  padding: 5px;
  width: 50%;
  font-weight: 900;
  font-size: 30px;
  @media (min-width: 600px) {
    display: none;
  }
`

const PageLabel = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
    font-family: "Montserrat Alternates";
    padding: 5px;
    width: 50%;
    font-weight: 900;
    font-size: 30px;
  }
`

const PageImageContainer = styled.div`
  margin: 0;
`

const PageImage = styled.img`
  width: 55%;
  margin-left: auto;
  margin-right: auto;
`

const ModernTrousseau = () => (
  <Layout>
    <Container>
      <Title>Modern Trousseau</Title>
      <ProjectLinkContainer>
        {/* <DeployedLink href="" target="_blank">
          MODERN TROUSSEAU
        </DeployedLink> */}
        <GitHubLink
          href="https://github.com/jserrao/modern-trousseau-gatsby"
          target="_blank"
        >
          GITHUB REPO
        </GitHubLink>
      </ProjectLinkContainer>
      <SectionTitle>Description</SectionTitle>
      <ProjectDescription>
        Modern Trousseau is a client project that I am working on with a
        development team of using Storybook for branch management. I was
        assigned to the front end team where we started the first sprint by
        building components to Figma specifications while the back end team
        worked on setting up a database with Contentful and GraphQL. Once all
        components were complete the front end team moved forward with using the
        compnents to build out full pages for our second sprint. The final
        stages of the project involve connecting the pages to each other,
        populating the site with data from the database deployed by the backend
        team, remaining functionality and testing before deployment.
      </ProjectDescription>
      <SprintTitle>Sprint One</SprintTitle>
      <SprintOneImages>
        <ComponentShotsContainer>
          <ComponentLabel>
            Component
            <br />
            One
          </ComponentLabel>
          <div
            style={{
              display: "flex",
            }}
          >
            <AltComponentImage src="https://i.imgur.com/OvOfWYM.png"></AltComponentImage>
            <ComponentImage src="https://i.imgur.com/mjPtfKk.png"></ComponentImage>
          </div>
          <MobileDesktopLabel
            style={{
              margin: "0",
            }}
          >
            Mobile
          </MobileDesktopLabel>
          <ProjectDescription
            style={{
              margin: "0",
              fontSize: "14px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            This component employs two breakpoints
          </ProjectDescription>
          <ComponentImage
            src="https://i.imgur.com/MO8RrlX.png"
            style={{
              marginTop: "36px",
            }}
          ></ComponentImage>
          <MobileDesktopLabel>Desktop</MobileDesktopLabel>
        </ComponentShotsContainer>
        <ComponentShotsContainer>
          <ComponentLabel>
            Component
            <br />
            Two
          </ComponentLabel>
          <ComponentImage src="https://i.imgur.com/74ZTUoz.png"></ComponentImage>
          <MobileDesktopLabel>Mobile</MobileDesktopLabel>
          <ComponentImage src="https://i.imgur.com/H42DEcf.png"></ComponentImage>
          <MobileDesktopLabel>Desktop</MobileDesktopLabel>
        </ComponentShotsContainer>
        <ComponentShotsContainer>
          <ComponentLabel>
            Component
            <br />
            Three
          </ComponentLabel>
          <ComponentImage src="https://i.imgur.com/Z7FeBDk.png"></ComponentImage>
          <MobileDesktopLabel>Mobile</MobileDesktopLabel>
          <ComponentImage src="https://i.imgur.com/otTr8Uh.png"></ComponentImage>
          <MobileDesktopLabel>Desktop</MobileDesktopLabel>
        </ComponentShotsContainer>
      </SprintOneImages>
      <SectionTitle>Approach</SectionTitle>
      <ProjectDescription>
        Modern Trousseau is a client project in which our team built employing
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
      <SprintTitle>Sprint Two</SprintTitle>
      <PageLabelContainer>
        <PageLabel>Gowns Page</PageLabel>
        <PageLabel>Gown Page</PageLabel>
      </PageLabelContainer>
      <SprintTwoImages>
        <SprintTwoExample>
          <MobilePageLabel>Gowns Page</MobilePageLabel>
          <PageImage
            src="https://i.imgur.com/eVtMFuz.png"
            style={{
              width: "82%",
            }}
          ></PageImage>
          <MobileDesktopLabel>Mobile</MobileDesktopLabel>
        </SprintTwoExample>
        <SprintTwoExample>
          <PageImageContainer>
            <PageImage
              src="https://i.imgur.com/9dU73Zy.png"
              style={{
                width: "95%",
              }}
            ></PageImage>
          </PageImageContainer>
          <PageImageContainer>
            <PageImage
              src="https://i.imgur.com/ifrIznt.png"
              style={{
                width: "95%",
              }}
            ></PageImage>
            <MobileDesktopLabel>Desktop</MobileDesktopLabel>
          </PageImageContainer>
        </SprintTwoExample>
        <SprintTwoExample
        style={{
          // border: "1px solid red"
        }}>
          <MobilePageLabel>Gown Page</MobilePageLabel>
          <PageImage
            src="https://i.imgur.com/wwf5Asx.png"
            style={{
              width: "96%",
              marginTop: "32%",
              // border: "1px solid red"
            }}
          ></PageImage>
          <MobileDesktopLabel>Mobile</MobileDesktopLabel>
        </SprintTwoExample>
        <SprintTwoExample
        style={{
          // border: "1px solid red",
          width: "30%"
        }}>
          <PageImage
            src="https://i.imgur.com/f1JBD1U.png"
            style={{
              width: "96%",
              marginTop: "30%",
              // border: "1px solid red"
            }}
          ></PageImage>
          <MobileDesktopLabel>Desktop</MobileDesktopLabel>
        </SprintTwoExample>
      </SprintTwoImages>
      <SectionTitle>Problems</SectionTitle>
      <ProjectDescription>
        One of the biggest challenges in getting this project underway was
        learning the new technologies and resources that we would be employing
        to build this app. Storybook, Contentful, Gatsby and GraphQL were at the
        time all new to the team and there was a learning curve as far as
        figuring out how to develop this project smoothly with so many moving
        parts. Branch merge conflicts, editing existing code to meet
        specifications and maintaining good communication with team leaders were
        all issues that the team worked to dtay on top of while finding ways to
        meet production deadlines. Early on it was clear that communication was
        paramount to success as well as using other team members as resources to
        toubleshoot any blockers that arose as we moved through our assignments.
      </ProjectDescription>
      <SectionTitle>Solutions</SectionTitle>
      <ProjectDescription>
        I refactored components on a page I am building to resolve issues that
        became evident as some preemptive testing was done on work to ensure the
        team was on track. One of these issues was the usability of the site
        when viewing it on mobile devices. The mockup provided by the design
        team had not anticipated some issues that would arrise involving sizing
        and functionality and a rework of some conponents is required to remedy
        the issue. Currently I am doing research to better understand GraphQL
        before finishing the pages I have built as our team completes our second
        sprint.
      </ProjectDescription>
      {/* <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <ComponentLabel>Refactored Slider Component</ComponentLabel>
        <ProjectDescription>
          This partially reworked component exhibits some image warping here
          that is resolved when images are fetched with GatsbyQL from the
          project's contentful database.
        </ProjectDescription>
        <CollectionList></CollectionList>
      </div> */}
      {/* <div
      style={{
        display: 'flex',
        margin: '20px 5%',
      }}>
      <PageImage
            src="https://i.imgur.com/eVtMFuz.png"
            style={{
              width: "30%",
              height: 'auto',
            }}
            ></PageImage>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
          <PageImage
            src="https://i.imgur.com/9dU73Zy.png"
            style={{
              width: "60%",
              height: 'auto',
            }}
            ></PageImage>
          <PageImage
            src="https://i.imgur.com/ifrIznt.png"
            style={{
              width: "60%",
              height: 'auto',
            }}
            ></PageImage>
            </div>
            </div> */}
    </Container>
  </Layout>
)

export default ModernTrousseau
