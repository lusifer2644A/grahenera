import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function MyComponent({ containerStyle, state }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div style={{ color: "white" }}>Loading</div>;
  return <Map state={state} />;
}

function Map({ state }) {
  const center = useMemo(() => state.center, []);
  return (
    <GoogleMap
      zoom={state.zoom}
      center={state.center}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    ></GoogleMap>
  );
}

export default React.memo(MyComponent);
