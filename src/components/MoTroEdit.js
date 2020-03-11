// import React from "react";
// import ReactDOM from "react-dom";
// import styled from "styled-components";
// import Logo from "../components/FullLogo/Logo";
// import NavMenuDesktop from "../components/NavMenu/NavMenuDesktop";
// import Footer from "../components/Footer/Footer";
// import NavBar from "../components/NavBar/NavBar";
// import GownHeader from "../components/GownHeader/GownHeader";
// import CollectionList from "../components/CollectionList/CollectionList";
// import Layout from "../global/Layout";
// import { Link } from "gatsby";
// import { useStaticQuery, graphql } from "gatsby";


import React from "react";
import styled from "styled-components";

import imageFile1 from "../images/images/Fall-2020-1.png";
import imageFile2 from "../images/images/Fall-2020-2.png";
import imageFile3 from "../images/images/Spring-2020-1.jpeg";
import imageFile4 from "../images/images/Spring-2020-2.jpeg";
import imageFile5 from "../images/images/Trending-Now-1.jpeg";
import imageFile6 from "../images/images/Trending-Now-2.jpeg";
import imageFile7 from "../images/images/Classics-1.jpeg";
import imageFile8 from "../images/images/Classics-2.jpeg";

const slideData = [
  {
    image: imageFile1,
    mobileLabel: "LUCA",
    desktopLabel: "Luca",
    index: 0
  },
  {
    image: imageFile2,
    mobileLabel: "VIDA",
    desktopLabel: "Vida",
    index: 1
  },
  {
    image: imageFile3,
    mobileLabel: "ALWAYS",
    desktopLabel: "Always",
    index: 2
  },
  {
    image: imageFile4,
    mobileLabel: "BELIZE",
    desktopLabel: "Belize",
    index: 3
  },
  {
    image: imageFile5,
    mobileLabel: "ALICE",
    desktopLabel: "Alice",
    index: 4
  },
  {
    image: imageFile6,
    mobileLabel: "EVELYN",
    desktopLabel: "Evelyn",
    index: 5
  },
  {
    image: imageFile7,
    mobileLabel: "AINSLEY",
    desktopLabel: "Ainsley",
    index: 6
  },
  {
    image: imageFile8,
    mobileLabel: "ANNIE",
    desktopLabel: "Annie",
    index: 7
  }
];

const DesktopCard = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0 12px 0 0;
    background-color: #E5E5E5;
  }
`;

const MobileCard = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Slide = styled.div`
    width: 100%;
    display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 100%;
    padding-top: 12px;
    background-color: #E5E5E5;
  }
`;

const Button = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    background-color: #E5E5E5;
    border: 0;
    margin: 0;
    font-size: 36px;
    height: 100%;
  }
`;

const ImageContainer = styled.div`
    display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const SlideImage = styled.img`
    display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 400px;
    width: 100%;
    margin-bottom: 0;
  }
`;

const DesktopSlideText = styled.p`
  text-align: center;
  margin: 10px 0 0 0;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

const ButtonIcon = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin-top: 1300%;
  }
`;

const MobileImage = styled.img`
    width: 94%;
    display: flex;
    font-size: 20px;
    margin: 3%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileText = styled.p`
  text-align: center;
  margin-top: 16px;
  font-weight: 800;
`;

const MobileImageContainer = styled.div`
  width: 50%;
  height: auto;
`;

const SliderA = ({ propertyA }) => {
  const { image, mobileLabel, index } = propertyA;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage src={image} />
        <DesktopSlideText>{`${mobileLabel}`}</DesktopSlideText>
      </ImageContainer>
    </Slide>
  );
};

const SliderB = ({ propertyB }) => {
  const { image, mobileLabel, index } = propertyB;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage src={image} />
        <DesktopSlideText>{`${mobileLabel}`}</DesktopSlideText>
      </ImageContainer>
    </Slide>
  );
};

const SliderC = ({ propertyC }) => {
  const { image, mobileLabel, index } = propertyC;
  return (
    <Slide id={`slide-${index}`}>
      <ImageContainer>
        <SlideImage src={image} />
        <DesktopSlideText>{`${mobileLabel}`}</DesktopSlideText>
      </ImageContainer>
    </Slide>
  );
};

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: slideData,
      propertyA: slideData[0],
      propertyB: slideData[1],
      propertyC: slideData[2]
    };
  }

  prevProperty = () => {
    if (
      this.state.propertyA.index > 0 &&
      this.state.propertyB.index > 0 &&
      this.state.propertyC.index > 0
    ) {
      const newIndexA = this.state.propertyA.index - 1;
      const newIndexB = this.state.propertyB.index - 1;
      const newIndexC = this.state.propertyC.index - 1;
      this.setState({
        propertyA: slideData[newIndexA],
        propertyB: slideData[newIndexB],
        propertyC: slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index === 0 &&
      this.state.propertyB.index !== 0 &&
      this.state.propertyC.index !== 0
    ) {
      const newIndexA = slideData.length - 1;
      const newIndexB = this.state.propertyB.index - 1;
      const newIndexC = this.state.propertyC.index - 1;
      this.setState({
        propertyA: slideData[newIndexA],
        propertyB: slideData[newIndexB],
        propertyC: slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index !== 0 &&
      this.state.propertyB.index === 0 &&
      this.state.propertyC.index !== 0
    ) {
      const newIndexA = this.state.propertyA.index - 1;
      const newIndexB = slideData.length - 1;
      const newIndexC = this.state.propertyC.index - 1;
      this.setState({
        propertyA: slideData[newIndexA],
        propertyB: slideData[newIndexB],
        propertyC: slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index !== 0 &&
      this.state.propertyB.index !== 0 &&
      this.state.propertyC.index === 0
    ) {
      const newIndexA = this.state.propertyA.index - 1;
      const newIndexB = this.state.propertyB.index - 1;
      const newIndexC = slideData.length - 1;
      this.setState({
        propertyA: slideData[newIndexA],
        propertyB: slideData[newIndexB],
        propertyC: slideData[newIndexC]
      });
    }
  };

  nextProperty = () => {
    if (
      this.state.propertyA.index !== slideData.length &&
      this.state.propertyB.index !== slideData.length &&
      this.state.propertyC.index !== slideData.length
    ) {
      const newIndexA = this.state.propertyA.index + 1;
      const newIndexB = this.state.propertyB.index + 1;
      const newIndexC = this.state.propertyC.index + 1;
      this.setState({
        propertyA: slideData[newIndexA],
        propertyB: slideData[newIndexB],
        propertyC: slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index !== slideData.length - 1 &&
      this.state.propertyB.index !== slideData.length - 1 &&
      this.state.propertyC.index === slideData.length - 1
    ) {
      const newIndexA = this.state.propertyA.index + 1;
      const newIndexB = this.state.propertyB.index + 1;
      const newIndexC = 0;
      this.setState({
        propertyA: slideData[newIndexA],
        propertyB: slideData[newIndexB],
        propertyC: slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index !== slideData.length - 1 &&
      this.state.propertyB.index === slideData.length - 1 &&
      this.state.propertyC.index !== slideData.length - 1
    ) {
      const newIndexA = this.state.propertyA.index + 1;
      const newIndexB = 0;
      const newIndexC = this.state.propertyC.index + 1;
      this.setState({
        propertyA: slideData[newIndexA],
        propertyB: slideData[newIndexB],
        propertyC: slideData[newIndexC]
      });
    }
    if (
      this.state.propertyA.index === slideData.length - 1 &&
      this.state.propertyB.index !== slideData.length - 1 &&
      this.state.propertyC.index !== slideData.length - 1
    ) {
      const newIndexA = 0;
      const newIndexB = this.state.propertyB.index + 1;
      const newIndexC = this.state.propertyC.index + 1;
      this.setState({
        propertyA: slideData[newIndexA],
        propertyB: slideData[newIndexB],
        propertyC: slideData[newIndexC]
      });
    }
  };

  render() {
    const { propertyA, propertyB, propertyC } = this.state;
    return (
      <div>
        <DesktopCard>
          <Button onClick={() => this.prevProperty()}>
            <ButtonIcon>&#10094;</ButtonIcon>
          </Button>
          <SliderA propertyA={propertyA} />
          <SliderB propertyB={propertyB} />
          <SliderC propertyC={propertyC} />
          <Button onClick={() => this.nextProperty()}>
            <ButtonIcon>&#10095;</ButtonIcon>
          </Button>
        </DesktopCard>
        <MobileCard>
          <MobileImageContainer>
            <MobileImage src={this.state.properties[2].image}></MobileImage>
            <MobileText>{this.state.properties[2].desktopLabel}</MobileText>
          </MobileImageContainer>
          <MobileImageContainer>
            <MobileImage src={this.state.properties[3].image}></MobileImage>
            <MobileText>{this.state.properties[3].desktopLabel}</MobileText>
          </MobileImageContainer>
        </MobileCard>
      </div>
    );
  }
}

export default CollectionList;