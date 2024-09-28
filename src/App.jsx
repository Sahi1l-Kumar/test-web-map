import "./App.css";
import { BaseMap } from "./components/BaseMap";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <BaseMap />
    </div>
  );
}

export default App;
