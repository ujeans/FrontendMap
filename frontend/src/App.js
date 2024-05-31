import React, { useState } from "react";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import southKoreaMap from "@svg-maps/south-korea";
import "./index.css";
import Map from "./pages/Map";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = event => {
    setSelectedLocation(event.target.attributes.name.value);
  };

  return (
    // <div>
    //   <h1>South Korea Map</h1>
    //   <SVGMap map={southKoreaMap} onLocationClick={handleLocationClick} />
    //   {selectedLocation && <p>Selected Location: {selectedLocation}</p>}
    // </div>
    <>
      <Map />
    </>
  );
}

export default App;
