import React, { useEffect, useRef } from "react";
import {AddSingleMarkers} from '~/component/addSingleMarkers'

const DEFAULT_CENTER = { lat: 48.8566, lng: 2.3522 };
const DEFAULT_ZOOM = 7;

export const GoogleMaps = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const locations = [
    { lat: 48.8566, lng: 2.3522 },
    { lat: 47.1533, lng: 2.9123 },
  ];
  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
      AddSingleMarkers({ locations, map });

    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{ width: "1000px", height: "700px" }}
    />
  );
};
