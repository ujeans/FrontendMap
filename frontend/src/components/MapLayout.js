import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import southKoreaMap from "@svg-maps/south-korea";
import GalleryPage from "../page/GalleryPage";

// 지역별 이미지 매핑 객체
const imageMapping = {
  // Gangwon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/dXAhQuT.jpg",
  // Gyeonggi: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/LZkivxR.jpg",
  // Seoul: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/hqcMtrF.jpg",
  // Incheon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/l867sBU.jpg",
  "South Chungcheong":
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/7cQCk5I.jpg",
  Sejong: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/dXAhQuT.jpg",
  Daejeon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/LZkivxR.jpg",
  "North Chungcheong":
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/hqcMtrF.jpg",
  "North Gyeongsang":
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/l867sBU.jpg",
  Ulsan: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/7cQCk5I.jpg",
  Daegu: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/dXAhQuT.jpg",
  "North Jeolla":
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/LZkivxR.jpg",
  "South Jeolla":
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/hqcMtrF.jpg",
  Gwangju: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/l867sBU.jpg",
  "South Gyeongsang":
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/7cQCk5I.jpg",
  Jeju: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/dXAhQuT.jpg",
};

// 영어 이름을 한글 이름으로 매핑하는 객체
const locationMapping = {
  Gangwon: "강원",
  Gyeonggi: "경기",
  Seoul: "서울",
  Incheon: "인천",
  "South Chungcheong": "충남",
  Sejong: "세종",
  Daejeon: "대전",
  "North Chungcheong": "충북",
  "North Gyeongsang": "경북",
  Ulsan: "울산",
  Daegu: "대구",
  "North Jeolla": "전북",
  "South Jeolla": "전남",
  Gwangju: "광주",
  "South Gyeongsang": "경남",
  Jeju: "제주",
};

const MapLayout = ({ selectedLocation, handleLocationClick }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [koreanLocation, setKoreanLocation] = useState("");

  useEffect(() => {
    if (selectedLocation) {
      setIsMoved(true);
      const locationNameInKorean =
        locationMapping[selectedLocation] || selectedLocation;
      setKoreanLocation(locationNameInKorean);
    }
  }, [selectedLocation]);

  // selectedLocation에 맞는 이미지를 가져옵니다.
  const selectedImage = imageMapping[selectedLocation] || "";

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
          </MapWrapper>
          {isMoved && (
            <GalleryPage
              selectedLocation={koreanLocation}
              selectedImage={selectedImage}
            />
          )}
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
