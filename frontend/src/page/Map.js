import React, { useState } from "react";
import MapLayout from "../components/MapLayout";

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = event => {
    setSelectedLocation(event.target.attributes.name.value);
  };

  return (
    <MapLayout
      selectedLocation={selectedLocation}
      handleLocationClick={handleLocationClick}
    />
  );
};

export default Map;
