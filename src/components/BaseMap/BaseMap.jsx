import {
  Map,
  useApiIsLoaded,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import "./BaseMap.css";
import { templeData } from "../../coordinates/temple";
import { storeData } from "../../coordinates/store";
import { barData } from "../../coordinates/bar";
import { churchData } from "../../coordinates/church";
import { marketData } from "../../coordinates/market";
import { parkData } from "../../coordinates/park";
import { potterData } from "../../coordinates/potter";
import { toiletData } from "../../coordinates/toilet";
import { bankData } from "../../coordinates/bank";
import { collegeData } from "../../coordinates/college";
import { hospitalData } from "../../coordinates/hospital";
import { hotelData } from "../../coordinates/hotel";
import { mosqueData } from "../../coordinates/mosque";
import { restaurantData } from "../../coordinates/restaurant";
import { schoolData } from "../../coordinates/school";

export const BaseMap = () => {
  const apiIsLoaded = useApiIsLoaded();
  const [mapInstance, setMapInstance] = useState(null);

  const map = useMap();

  useEffect(() => {
    if (!apiIsLoaded || !map) return;

    setMapInstance(map);
  }, [apiIsLoaded, map]);

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    async function loadLibraries() {
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary(
        "marker"
      );
      //Temple Markers
      templeData.forEach((temple) => {
        const markerContent = buildContent(temple);

        const templeMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: temple.lat, lng: temple.lng },
          title: temple.name,
        });

        templeMarker.addListener("click", () => {
          toggleHighlight(templeMarker);
        });
      });

      //Store Markers
      storeData.forEach((store) => {
        const markerContent = buildContent(store);

        const storeMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: store.lat, lng: store.lng },
          title: store.name,
        });

        storeMarker.addListener("click", () => {
          toggleHighlight(storeMarker);
        });
      });

      //Bar Markers
      barData.forEach((bar) => {
        const markerContent = buildContent(bar);

        const barMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: bar.lat, lng: bar.lng },
          title: bar.name,
        });

        barMarker.addListener("click", () => {
          toggleHighlight(barMarker);
        });
      });

      //Church Markers
      churchData.forEach((church) => {
        const markerContent = buildContent(church);

        const churchMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: church.lat, lng: church.lng },
          title: church.name,
        });

        churchMarker.addListener("click", () => {
          toggleHighlight(churchMarker);
        });
      });

      //Market Markers
      marketData.forEach((market) => {
        const markerContent = buildContent(market);

        const marketMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: market.lat, lng: market.lng },
          title: market.name,
        });

        marketMarker.addListener("click", () => {
          toggleHighlight(marketMarker);
        });
      });

      //Park Markers
      parkData.forEach((park) => {
        const markerContent = buildContent(park);

        const parkMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: park.lat, lng: park.lng },
          title: park.name,
        });

        parkMarker.addListener("click", () => {
          toggleHighlight(parkMarker);
        });
      });

      //Potter Markers
      potterData.forEach((potter) => {
        const markerContent = buildContent(potter);

        const potterMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: potter.lat, lng: potter.lng },
          title: potter.name,
        });

        potterMarker.addListener("click", () => {
          toggleHighlight(potterMarker);
        });
      });

      //Toilet Markers
      toiletData.forEach((toilet) => {
        const markerContent = buildContent(toilet);

        const toiletMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: toilet.lat, lng: toilet.lng },
          title: toilet.name,
        });

        toiletMarker.addListener("click", () => {
          toggleHighlight(toiletMarker);
        });
      });

      //Bank Markers
      bankData.forEach((bank) => {
        const markerContent = buildContent(bank);

        const bankMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: bank.lat, lng: bank.lng },
          title: bank.name,
        });

        bankMarker.addListener("click", () => {
          toggleHighlight(bankMarker);
        });
      });

      //College Markers
      collegeData.forEach((college) => {
        const markerContent = buildContent(college);

        const collegeMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: college.lat, lng: college.lng },
          title: college.name,
        });

        collegeMarker.addListener("click", () => {
          toggleHighlight(collegeMarker);
        });
      });

      //Hospital Markers
      hospitalData.forEach((hospital) => {
        const markerContent = buildContent(hospital);

        const hospitalMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: hospital.lat, lng: hospital.lng },
          title: hospital.name,
        });

        hospitalMarker.addListener("click", () => {
          toggleHighlight(hospitalMarker);
        });
      });

      //Hotel Markers
      hotelData.forEach((hotel) => {
        const markerContent = buildContent(hotel);

        const hotelMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: hotel.lat, lng: hotel.lng },
          title: hotel.name,
        });

        hotelMarker.addListener("click", () => {
          toggleHighlight(hotelMarker);
        });
      });

      //Mosque Markers
      mosqueData.forEach((mosque) => {
        const markerContent = buildContent(mosque);

        const mosqueMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: mosque.lat, lng: mosque.lng },
          title: mosque.name,
        });

        mosqueMarker.addListener("click", () => {
          toggleHighlight(mosqueMarker);
        });
      });

      //Restaurant Markers
      restaurantData.forEach((restaurant) => {
        const markerContent = buildContent(restaurant);

        const restaurantMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: restaurant.lat, lng: restaurant.lng },
          title: restaurant.name,
        });

        restaurantMarker.addListener("click", () => {
          toggleHighlight(restaurantMarker);
        });
      });

      //School Markers
      schoolData.forEach((school) => {
        const markerContent = buildContent(school);

        const schoolMarker = new AdvancedMarkerElement({
          map: mapInstance,
          content: markerContent,
          position: { lat: school.lat, lng: school.lng },
          title: school.name,
        });

        schoolMarker.addListener("click", () => {
          toggleHighlight(schoolMarker);
        });
      });

      //Marking code is ending here
    }

    // Same as the initMap logic
    function toggleHighlight(markerView) {
      if (markerView.content.classList.contains("highlight")) {
        markerView.content.classList.remove("highlight");
        markerView.zIndex = null;
      } else {
        markerView.content.classList.add("highlight");
        markerView.zIndex = 1;
      }
    }

    function buildContent(property) {
      const content = document.createElement("div");

      content.classList.add("property");
      content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
        <div class="name">${property.name}</div>
        <div class="coordinates">${property.lat}, ${property.lng}</div>
    </div>
    `;
      return content;
    }

    // Call the function to load libraries and add markers
    loadLibraries();
  }, [mapInstance]);

  // Add the Navigation buttons once the map is ready
  useEffect(() => {
    if (mapInstance) {
      // Will be used to navigate between markers
      const dharavi = { lat: 19.041908, lng: 72.855031 };

      function createNavigateMarkers() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");
        prevButton.classList.add("navigate-map-button");
        nextButton.classList.add("navigate-map-button");
        prevButton.innerHTML = `<i class="fa-solid fa-arrow-left"></i> Prev`;
        nextButton.innerHTML = `Next <i class="fa-solid fa-arrow-right"></i>`;

        prevButton.addEventListener("click", () => {
          mapInstance.setCenter(dharavi);
        });

        nextButton.addEventListener("click", () => {
          mapInstance.setCenter(dharavi);
        });

        const navigateDiv = document.createElement("div");
        navigateDiv.appendChild(prevButton);
        navigateDiv.appendChild(nextButton);
        mapInstance.controls[
          window.google.maps.ControlPosition.BOTTOM_CENTER
        ].push(navigateDiv);
      }
      createNavigateMarkers();
    }
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
