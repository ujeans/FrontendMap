import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import southKoreaMap from "@svg-maps/south-korea";
import GalleryPage from "../page/GalleryPage";

const MapLayout = ({ selectedLocation, handleLocationClick }) => {
  const [isMoved, setIsMoved] = useState(false);

  useEffect(() => {
    if (selectedLocation) {
      setIsMoved(true);
    }
  }, [selectedLocation]);

  return (
    <Container>
      <Wrapper>
        <Title>South Korea Map</Title>
        <Content>
          <MapWrapper isMoved={isMoved}>
            <SVGContainer>
              <SVGMap
                map={southKoreaMap}
                onLocationClick={handleLocationClick}
              />
            </SVGContainer>
            {/* {selectedLocation && (
              <SelectedLocation>
                Selected Location: {selectedLocation}
              </SelectedLocation>
            )} */}
          </MapWrapper>
          {isMoved && <GalleryPage selectedLocation={selectedLocation} />}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default MapLayout;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #87ceeb; /* 하늘색 배경 추가 */
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 80px;
  font-size: 28px;
  font-weight: 900;
  color: white;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px;
`;

const MapWrapper = styled.div`
  width: 30%;
  z-index: 2;
  position: relative;
  transition: transform 0.5s ease-in-out;
  transform: ${({ isMoved }) =>
    isMoved ? "translateX(-80px)" : "translateX(0)"};
`;

const SVGContainer = styled.div`
  width: 100%;
  height: auto;
`;
