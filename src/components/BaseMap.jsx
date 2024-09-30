import {
  Map,
  useApiIsLoaded,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { templeData } from "../coordinates/temple";

export const BaseMap = () => {
  const apiIsLoaded = useApiIsLoaded();
  const [mapInstance, setMapInstance] = useState(null);

  const map = useMap();

  useEffect(() => {
    if (!apiIsLoaded || !map) return;

    setMapInstance(map);
  }, [apiIsLoaded, map]);

  useEffect(() => {
    if (!mapInstance) return;

    async function loadLibraries() {
      const { AdvancedMarkerElement, PinElement } =
        await window.google.maps.importLibrary("marker");

      templeData.forEach((temple) => {
        const pinGlyph = new PinElement({
          glyphColor: "white",
        });
        new AdvancedMarkerElement({
          map: mapInstance,
          position: { lat: temple.lat, lng: temple.lng },
          title: temple.name,
          content: pinGlyph.element,
        });
      });
    }

    loadLibraries();
  }, [mapInstance]);

  const mapsLib = useMapsLibrary("maps");

  useEffect(() => {
    if (!mapsLib || !mapInstance) return;

    // const svc = new mapsLib.PlacesService(mapInstance);
    // Do something with the places service
  }, [mapsLib, mapInstance]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: "75vw", height: "75vh" }}>
        <Map
          mapId={import.meta.env.VITE_MAP_ID_1} // Roadways and Railways
          defaultCenter={{ lat: 19.0402, lng: 72.8539 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          options={{
            restriction: {
              latLngBounds: {
                north: 19.059861,
                south: 19.036278,
                east: 72.871944,
                west: 72.84225,
              },
              strictBounds: true,
            },
            minZoom: 15,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
