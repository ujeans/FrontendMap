import styled from "styled-components";
import { useState } from "react";

import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import southKoreaMap from "@svg-maps/south-korea";

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = event => {
    setSelectedLocation(event.target.attributes.name.value);
  };

  return (
    <Container>
      <Wrapper>
        <Title>South Korea Map</Title>
        <MapWrapper>
          <SVGContainer>
            <SVGMap map={southKoreaMap} onLocationClick={handleLocationClick} />
          </SVGContainer>
          {selectedLocation && <p>Selected Location: {selectedLocation}</p>}
        </MapWrapper>
      </Wrapper>
    </Container>
  );
};

export default Map;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div``;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  font-size: 28px;
  font-weight: 900;
`;

const MapWrapper = styled.div`
  width: 400px;
`;

const SVGContainer = styled.div``;
