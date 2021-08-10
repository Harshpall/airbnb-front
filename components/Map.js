import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";
function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 28.38,
    longitude: 77.12,
    zoom: 11,
  });
  // transform sthe search result object

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/harsh7492/cks5m2oc1087e17qpxs2x6vh7"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}

export default Map;
