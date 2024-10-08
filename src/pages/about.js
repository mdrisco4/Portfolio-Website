import React from "react"
import "../styles/fonts.css"

import Layout from "../components/layout"
import styled from "styled-components"

const PageTitle = styled.div`
  font-family: "Montserrat Alternates";
  color: rgb(206, 214, 243);
  font-size: 55px;
  text-align: center;
  padding-top: 100px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;

  @media (min-width: 1100px) {
    height: auto;
    flex-direction: row;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`

const PhotoBlurbContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 650px) {
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

const AboutPhoto = styled.img`
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  @media (min-width: 400px) {
    height: auto;
    width: 60%;
    flex-direction: row;
  }
  @media (min-width: 550px) {
    height: auto;
    width: 50%;
    flex-direction: row;
  }
  @media (min-width: 650px) {
    height: auto;
    width: 45%;
    flex-direction: row;
  }
  @media (min-width: 850px) {
    height: auto;
    /* width: 20%; */
    flex-direction: row;
  }
  @media (min-width: 1000px) {
    height: auto;
    width: 20%;
    height: 80%;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    height: auto;
    width: 20%;
    flex-direction: row;
  }
`

const PersonalInfo = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 850px) {
    height: 100%;
    margin: auto;
    flex-direction: row;
  }
`

const Title = styled.h1`
  font-family: "Montserrat Alternates";
  margin: 0 0 8px 0;
  font-size: 40px;
  color: rgb(206, 214, 243);
`

const AboutDetails = styled.h3`
  font-family: "Montserrat Alternates";
  margin: 4px 6px 0 6px;
  font-size: 20px;
  color: rgb(137, 146, 173);
  @media (min-width: 400px) {
  }
  @media (min-width: 550px) {
  }
  @media (min-width: 650px) {
  }
  @media (min-width: 850px) {
  }
  @media (min-width: 1000px) {
  }
  @media (min-width: 1200px) {
  }
`

const GetInTouch = styled.a`
  font-family: "Fira Code";
  font-size: 40px;
  color: rgb(114, 200, 179);
  display: flex;
  width: 320px;
  height: auto;
  padding: 3px;
  margin-top: 20px;
  justify-content: center;
  border: 4px solid rgb(114, 200, 179);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  text-decoration: none;
  &:hover {
    color: #6ab4ff;
    text-shadow: 0 0 5px;
    border: 4px solid #6ab4ff;
  }
`

const About = () => (
  <Layout>
    <PageTitle>ABOUT ME</PageTitle>
    <Container>
      <PersonalInfo>
        <Title>My Background</Title>
        <PhotoBlurbContainer>
          <AboutDetails>
            {/* I graduated from the University of Rochester with a physics degree in
          2013 and have always been interested in all things science and
          technology. I am always seeking to challenge myself and tackle new
          challenges and software development is the perfect outlet for that
          drive. Currently with the skills to meet a junior level role I would
          love to manage my own team a few years down the road. */}
            {/* I graduated from the University of Rochester with a physics degree in
          2013 and have always been interested in all things science and
          technology. I am always seeking to push myself and tackle new
          challenges, and aim to find bigger and more difficult problems to
          tackle along the way. I have learned a great deal in my first few
          years as a software engineer and am eager to expand my knowledge base
          and serve to contribute to exciting new projects along the way. */}
            {/* Graduating with a degree in Physics from the University of Rochester
            in 2013, I embarked on a career in software development, leveraging
            my strong analytical background to excel in this field. Over the
            past four years, I’ve been a software developer for the federal
            government, where I’ve successfully managed and executed a variety
            of projects, optimizing systems and developing innovative solutions.
            My experience has honed my technical skills and deepened my
            understanding of complex systems, making me adept at problem-solving
            and adapting to new challenges. As I look to the next phase of my
            career, I am eager to bring my expertise and passion for coding to a
            new role that offers growth and new opportunities.  */}
            With a degree in Physics from the University of Rochester and four
            years of experience as a software developer and government
            contractor, I bring a strong analytical background and a passion for
            STEM to my work. My academic training has honed my problem-solving
            skills and deepened my understanding of complex systems, which I’ve
            leveraged to deliver innovative software solutions in a high-stakes
            environment. Now, I’m seeking new opportunities where I can apply my
            technical expertise and enthusiasm for technology to tackle exciting
            challenges and contribute to cutting-edge projects.
          </AboutDetails>
          <AboutPhoto src="https://i.imgur.com/ErbODus.jpeg"></AboutPhoto>
        </PhotoBlurbContainer>
        <Title>Interests and Hobbies</Title>
        <PhotoBlurbContainer>
          <AboutPhoto src="https://i.imgur.com/YDwdtd7.jpeg"></AboutPhoto>
          <AboutDetails>
            {/* Outside of my interests in science and technology I enjoy all things
          film, from small independent movies to gigantic blockbusters. I also
          am into craft brewing, sports, camping and am an avid cyclist. A
          current DC resident, I am looking to establish myself in Southern
          California in the near future. */}
            In addition to my professional expertise as a software developer, I
            bring a diverse set of interests that reflect my dynamic and
            well-rounded personality. My passion for film fuels my creativity
            and attention to detail, qualities that translate seamlessly into my
            tech work. I enjoy camping, which not only provides a refreshing
            break from the screen but also enhances my problem-solving skills in
            real-world scenarios. While my love of cycling keeps me energized and
            disciplined, reinforcing my commitment to both personal and
            professional goals. These varied interests contribute to my
            adaptability and enthusiasm, making me a well-rounded candidate
            ready to bring a unique perspective to any team.
            {/* JUST BEFORE CYCLING: Craft beer tasting is a hobby that sharpens my
            appreciation for quality and innovation, while poker sharpens my
            strategic thinking and decision-making abilities.  */}
          </AboutDetails>
        </PhotoBlurbContainer>
      </PersonalInfo>
    </Container>
    <GetInTouch href="/contact">Contact Me</GetInTouch>
    {/* <AboutPhoto src="https://i.imgur.com/tpIBaSE.jpg"></AboutPhoto> */}
  </Layout>
)

export default About
