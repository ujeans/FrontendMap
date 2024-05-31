import React from "react";
import styled from "styled-components";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import southKoreaMap from "@svg-maps/south-korea";

const MapLayout = ({ selectedLocation, handleLocationClick }) => {
  return (
    <Container>
      <Wrapper>
        <Title>South Korea Map</Title>
        <MapWrapper>
          <SVGContainer>
            <SVGMap map={southKoreaMap} onLocationClick={handleLocationClick} />
          </SVGContainer>
          {selectedLocation && (
            <SelectedLocation>
              Selected Location: {selectedLocation}
            </SelectedLocation>
          )}
        </MapWrapper>
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
  color: white; /* 타이틀 글씨를 잘 보이게 하기 위해 */
`;

const MapWrapper = styled.div`
  width: 30%;
  z-index: 2;
  position: relative;
`;

const SVGContainer = styled.div`
  width: 100%;
  height: auto;
`;

const SelectedLocation = styled.p`
  margin-top: 10px;
  color: white;
  font-weight: bold;
`;
