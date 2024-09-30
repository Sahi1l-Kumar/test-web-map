import { APIProvider } from "@vis.gl/react-google-maps";
import "./App.css";
import { BaseMap } from "./components/BaseMap";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <BaseMap />
      </div>
    </APIProvider>
  );
}

export default App;
