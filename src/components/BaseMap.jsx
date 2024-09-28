import { APIProvider, Map } from "@vis.gl/react-google-maps";

export const BaseMap = () => {
  // Define the bounds for Dharavi (rough approximation of the area)
  const dharaviBounds = {
    north: 19.059861, // northern boundary
    south: 19.036278, // southern boundary
    east: 72.871944, // eastern boundary
    west: 72.84225, // western boundary
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div
        style={{
          display: "flex", // Use flexbox for centering
          justifyContent: "center", // Horizontally center
          alignItems: "center", // Vertically center
          width: "100vw", // Full viewport width
          height: "100vh", // Full viewport height
        }}
      >
        <div style={{ width: "75vw", height: "75vh" }}>
          {/* Map container 75% of screen */}
          <Map
            defaultCenter={{ lat: 19.0402, lng: 72.8539 }} // Centering on Dharavi
            defaultZoom={15}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            options={{
              restriction: {
                latLngBounds: dharaviBounds, // Restrict to Dharavi bounds
                strictBounds: true, // Ensure the map stays within bounds
              },
              minZoom: 15, // Prevent users from zooming out beyond Dharavi
              maxZoom: 18, // Optional: Restrict zoom level
            }}
            style={{ width: "100%", height: "100%" }} // Make map fill its container
          />
        </div>
      </div>
    </APIProvider>
  );
};
