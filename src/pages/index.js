import React from "react"
import styled from "styled-components"
import MichaelDriscoll2023Resume from "../images/MichaelDriscoll2023Resume.pdf"

import Layout from "../components/layout"
import "../styles/fonts.css"

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

const IntroContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    height: 400px;
    margin-bottom: 0;
    max-width: 1520px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 900px) {
    height: 420px;
  }
  @media (min-width: 1200px) {
    height: 400px;
  }
`

const PersonalInfoContainer = styled.div`
  margin-top: 140px;
  width: 80%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
    height: 100%;
    margin: auto;
    margin-right: 5%;
    margin-top: 2%;
  }
`

const Name = styled.h1`
  font-family: "Montserrat Alternates";
  font-size: 28px;
  margin-bottom: 24px;
  text-align: center;
  color: rgb(206, 214, 243);

  @media (min-width: 840px) {
    text-align: left;
  }
  @media (min-width: 1050px) {
    font-size: 54px;
    margin-bottom: 8px;
  }
`

const BrandStatement = styled.div`
  font-family: "Montserrat Alternates";
  font-size: 27px;
  text-align: center;
  color: rgb(137, 146, 173);

  @media (min-width: 840px) {
    text-align: left;
  }
  @media (min-width: 1050px) {
    font-size: 36px;
  }
`

const PersonalBrandStatement = styled.div`
  font-family: "Montserrat Alternates";
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
  color: rgb(77, 84, 107);

  @media (min-width: 840px) {
    font-size: 28;
    text-align: left;
    margin-right: 30%;
  }
`

const ResumeDownloadLink = styled.a`
  font-family: "Fira Code";
  font-size: 20px;
  width: 22%;
  margin-left: 39%;
  justify-content: center;
  text-align: center;
  display: block;
  height: 36px;
  padding: 10px 3px 3px 3px;
  text-decoration: none;
  color: rgb(114, 200, 179);
  border: 2px solid rgb(114, 200, 179);

  @media (min-width: 550px) {
    width: 20%;
    margin-left: 40%;
  }
  @media (min-width: 650px) {
    width: 18%;
    margin-left: 41%;
  }
  @media (min-width: 840px) {
    width: 14%;
    margin-left: 43%;
  }
  @media (min-width: 900px) {
    width: 12%;
    margin-left: 44%;
    text-align: center;
    display: block;
  }
  @media (min-width: 1050px) {
    width: 10%;
    margin-left: 45%;
  }
  @media (min-width: 1200px) {
    width: 8%;
    margin-left: 46%;
  }

  &:hover {
    text-shadow: 0 0 5px;
    color: #6ab4ff;
    border: 2px solid #6ab4ff;
  }
`

const AboutLink = styled.a`
  font-family: "Montserrat Alternates";
  font-size: 25px;
  color: white;
  display: flex;
  width: 220px;
  height: auto;
  padding: 3px;
  margin-top: 20px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  background-color: rgb(99, 95, 85);
  border: 2px solid darkblue;

  &:hover {
    color: rgb(110, 176, 249);
    background-color: darkblue;
    border: 2px solid black;
  }
`

const FreelanceLink = styled.a`
  font-family: "Montserrat Alternates";
  text-decoration: none;
  font-size: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 40px;
  width: 30%;
  height: auto;
  padding: 6px;
  border: 4px solid darkblue;
  background-color: rgb(99, 95, 85);
  color: white;
  cursor: pointer;

  @media (min-width: 675px) {
    width: 22.5%;
    font-size: 28px;
  }

  &:hover {
    border: 4px solid black;
    background-color: darkblue;
    color: rgb(110, 176, 249);
  }
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

const IndexPage = () => (
  <Layout>
    {/* <PersonalPhoto src="https://i.imgur.com/tpIBaSE.jpg"></PersonalPhoto> */}
    {/* <PersonalPhoto src="https://i.imgur.com/zG8yxep.jpg"></PersonalPhoto> */}
    <PersonalInfoContainer>
      <Name>My name is Michael Driscoll</Name>
      <BrandStatement>
        I am a software developer
        {/* I write code for a living */}
        {/* As a software engineer with client experience and proficiency in web
          design, coding and full stack development, I bring to the table a
          skill set crucial for finding success in the workplace. I am excited
          to grow in the tech industry using my talents in software engineering
          while continually seeking to keep up with the latest in cutting edge
          technology. See some of my projects below. */}
        {/* As a software engineer with client experience and proficiency in web
          design, coding and full stack development, I possess the skills and
          know how paramount to being a valued member of a devlopment team. I am
          excited to continue growing in the tech industry using my talents in
          software engineering while always seeking to expand my knowledge of
          the latest cutting edge technology. See some of my projects below. */}
      </BrandStatement>
      <PersonalBrandStatement>
        As a passionate software developer based in Los Angeles, I specialize in
        crafting innovative, high-performance solutions that drive digital
        transformation. With a keen eye for design and a commitment to
        excellence, I blend cutting-edge technology with user-centric design to
        build intuitive, impactful software. My portfolio showcases a diverse
        range of projects that reflect my dedication to clean code, creative
        problem-solving, and delivering exceptional user experiences. Whether
        it's developing dynamic web applications or streamlining backend
        processes, I bring a unique blend of technical skill and creativity to
        every project, aiming to make a meaningful impact in the ever-evolving
        tech landscape of LA and beyond.
      </PersonalBrandStatement>
    </PersonalInfoContainer>

    <ResumeDownloadLink href={MichaelDriscoll2023Resume} download>
      Resume
    </ResumeDownloadLink>
    {/* <ProjectSectionTitle>Projects</ProjectSectionTitle> */}
    {/* <ProjectSectionTitle>
      Site under renovation. Please check back soon.
    </ProjectSectionTitle> */}

    {/* <ProjectTitle>Modern Troussaeu</ProjectTitle>
    <FreelanceLink href="/freelance">Freelance</FreelanceLink>
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
    <ProjectLink href="/modern-trousseau">Learn More</ProjectLink> */}

    {/* <ProjectTitle>BrewBuddies</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/q25zOZm.jpg"></ProjectStill>
      <ProjectDescription>
        A freelance project I developed for the founder of a small beverage
        distribution company. I built this site using React and built in a few
        features to help the site look sleek and professional. This project
        remains ongoing to meet demands for client's growing business.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A freelance project I developed for the founder of a small beverage
      distribution company. I built this site using React and built in a few
      features to help the site look sleek and professional. This project
      remains ongoing to meet demands for client's growing business.
    </MobileProjectDescription>
    
    <ProjectLinkContainer>
      <DeployedLink href="https://brewbuddiesny.com/" target="_blank">
        BrewBuddies
      </DeployedLink>
      <GitHubLink
        href="https://github.com/mdrisco4/brew-buddies"
        target="_blank"
      >
        Github Repo
      </GitHubLink>
    </ProjectLinkContainer> */}

    {/* <ProjectTitle>Crypto Market</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/etbLxdD.jpg"></ProjectStill>
      <ProjectDescription>
        A side project I developed to learn a new front end library and to work
        on a site that focuses on a technology that I find interesting. I used
        Vue.js to develop this project which fetches data from a cryptocurrency
        API to give the user a dynamic layout of information on top rated
        digital coins. Additionally there is some information I compiled on the
        About Page that walks the user through the basics and provides some
        links to additional sources and exchanges if they want to dive right in
        to investing in crypto.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A side project I developed to learn a new front end library and to work on
      a site that focuses on a technology that I find interesting. I used Vue.js
      to develop this project which fetches data from a cryptocurrency API to
      give the user a dynamic layout of information on top rated digital coins.
      Additionally there is some information I compiled on the About Page that
      walks the user through the basics and provides some links to additional
      sources and exchanges if they want to dive right in to investing in
      crypto.
    </MobileProjectDescription>
    
    <ProjectLinkContainer>
      <DeployedLink
        href="https://inquisitive-basbousa-2c8988.netlify.app/"
        target="_blank"
      >
        Crypto Market
      </DeployedLink>
      <GitHubLink
        href="https://github.com/mdrisco4/vue-router-api-project"
        target="_blank"
      >
        Github Repo
      </GitHubLink>
    </ProjectLinkContainer> */}

    {/* <ProjectTitle>Photography Site</ProjectTitle>
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
   
    <ProjectLinkContainer>
      <DeployedLink
        href="https://www.fragnoli-photography.com/"
        target="_blank"
      >
        Photography
      </DeployedLink>
      <GitHubLink
        href="https://github.com/mdrisco4/brain-photo-site-frontend"
        target="_blank"
      >
        Github Repo
      </GitHubLink>
    </ProjectLinkContainer> */}

    {/* <ProjectTitle>Rochester Beer Community</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/HosJpMx.png"></ProjectStill>
      <ProjectDescription>
        A full stack site built with Django that provides menus, draft lists and
        brewery information for users. This site also allows for brewery owners
        and managers to access full CRUD capabilties to make changes to their
        menus and brewery information in real time.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A full stack site built with Django that provides menus, draft lists and
      brewery information for users. This site also allows for brewery owners
      and managers to access full CRUD capabilties to make changes to their
      menus and brewery information in real time.
    </MobileProjectDescription>
    <ProjectLink href="/rochester-breweries">Learn More</ProjectLink> */}

    {/* <ProjectTitle>National Parks Website</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/NjtX1by.png"></ProjectStill>
      <ProjectDescription>
        This is an interactive site that I built fetching data from the National
        Park Sevice API that provides users links to pages with details for
        national parks around the country. Built using React to specifications
        provided in an AdobeXD mockup.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      This is an interactive site that I built fetching data from the National
      Park Sevice API that provides users links to pages with details for
      national parks around the country. Built using React to specifications
      provided in an AdobeXD mockup.
    </MobileProjectDescription>
   
    <ProjectLinkContainer>
      <DeployedLink
        href="https://us-national-parks.netlify.com/"
        target="_blank"
      >
        National Parks
      </DeployedLink>
      <GitHubLink
        href="https://github.com/mdrisco4/National-Parks"
        target="_blank"
      >
        Github Repo
      </GitHubLink> */}
    {/* </ProjectLinkContainer> */}

    {/* <ProjectTitle>Trivia Game</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/AF5FHEm.png"></ProjectStill>
      <ProjectDescription>
        A fun trivia game with 3 selectable categories related to media. Written
        with HTML, CSS and Vanilla Javascript. Give it a try! Link on project
        page.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A fun trivia game with 3 selectable categories related to media. Written
      with HTML, CSS and Vanilla Javascript. Give it a try! Link on project
      page.
    </MobileProjectDescription>
  
    <ProjectLinkContainer>
      <DeployedLink
        href="https://mdrisco4.github.io/Unit-Project-1/"
        target="_blank"
      >
        Trivia
      </DeployedLink>
      <GitHubLink
        href="https://github.com/mdrisco4/Unit-Project-1"
        target="_blank"
      >
        Github Repo
      </GitHubLink> */}
    {/* </ProjectLinkContainer> */}

    {/* <ProjectTitle>Tic Tac Toe</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/akXEiZM.png"></ProjectStill>
      <ProjectDescription>
        One of my first projects! A fun and easy Tic-Tac-Toe game built with
        simple Javascript functions and a bit of DOM manipulation to alter the
        CSS as you play.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      One of my first projects! A fun and easy Tic-Tac-Toe game built with
      simple Javascript functions and a bit of DOM manipulation to alter the CSS
      as you play.
    </MobileProjectDescription>
    <ProjectLink href="/tic-tac-toe">Learn More</ProjectLink> */}

    {/* <ProjectTitle>Rochester Beer Community</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/HosJpMx.png"></ProjectStill>
      <ProjectDescription>
        A full stack site built with Django that provides menus, draft lists and
        brewery information for users. This site also allows for brewery owners
        and managers to access full CRUD capabilties to make changes to their
        menus and brewery information in real time.
      </ProjectDescription>
    </ImageWrapper>
    <ProjectLink href="/rochester-breweries">Learn More</ProjectLink>
    <MobileProjectDescription>
      A full stack site built with Django that provides menus, draft lists and
      brewery information for users. This site also allows for brewery owners
      and managers to access full CRUD capabilties to make changes to their
      menus and brewery information in real time.
    </MobileProjectDescription> */}

    {/* <ProjectTitle>Photography Site</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/s2xoqpd.png"></ProjectStill>
      <ProjectDescription>
        A freelance project I made for an aspiring professional photographer. I
        built this project with a Gatsby frontend and employed the Contentful
        content management system. With Contentful I authorized the client to
        add, delete or make changes to photos displayed in their portfolio. With
        a dynamic data fetch this allows the client to continue to update
        without needing me for frequent maintenence.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      A freelance project I made for an aspiring professional photographer. I
      built this project with a Gatsby frontend and employed the Contentful
      content management system. With Contentful I authorized the client to add,
      delete or make changes to photos displayed in their portfolio. With a
      dynamic data fetch this allows the client to continue to update without
      needing me for frequent maintenence.
    </MobileProjectDescription>
    <ProjectLink href="/fragnoli-photos">Learn More</ProjectLink> */}

    {/* <ProjectTitle>Modern Troussaeu</ProjectTitle>
    <ImageWrapper>
      <ProjectStill src="https://i.imgur.com/DOJXKHR.png"></ProjectStill>
      <ProjectDescription>
        An open source client project built with React, Contentful and GraphQL
        on an Agile team. I provided code for the front end working on a team
        utilizing Storybook for branch management.
      </ProjectDescription>
    </ImageWrapper>
    <MobileProjectDescription>
      An open source client project built with React, Contentful and GraphQL on
      an Agile team. I provided code for the front end working on a team
      utilizing Storybook for branch management.
    </MobileProjectDescription>
    <ProjectLink href="/modern-trousseau">Learn More</ProjectLink> */}
    <hr
      style={{
        border: "1px solid rgb(114, 200, 179)",
        marginTop: "140px",
      }}
    ></hr>
  </Layout>
)

export default IndexPage
