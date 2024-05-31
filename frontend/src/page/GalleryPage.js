import React, { useEffect, useState } from "react";
import styled from "styled-components";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import cry from "../assets/cry.gif";

const GalleryPage = ({ selectedLocation, selectedImage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <SvgWrapper>
        <Svg src={left} alt="left arrow" />
      </SvgWrapper>

      <Item isVisible={isVisible}>
        <Polaroid>
          {selectedImage ? (
            <Image src={selectedImage} alt={`Image of ${selectedLocation}`} />
          ) : (
            <NoImageWrapper>
              <NoImageGif src={cry} alt="No travel gif" />
              <NoImageText>아직 여행을 가지 못했어요!</NoImageText>
            </NoImageWrapper>
          )}
          {selectedLocation && (
            <SelectedLocation>
              <Caption>{selectedLocation}</Caption>
            </SelectedLocation>
          )}
        </Polaroid>
      </Item>

      <SvgWrapper>
        <Svg src={right} alt="right arrow" />
      </SvgWrapper>
    </Container>
  );
};

export default GalleryPage;

const Container = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SvgWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Svg = styled.img`
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  z-index: 3;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const Polaroid = styled.div`
  background: #fff;
  padding: 1rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 500px;
  height: auto;
`;

const NoImageWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoImageText = styled.div`
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 10px;
`;

const NoImageGif = styled.img`
  width: 300px;
  /* height: auto; */
  margin-bottom: 10px;
`;

const Caption = styled.div`
  font-size: 1.125rem;
  text-align: center;
  line-height: 2em;
`;

const SelectedLocation = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;
