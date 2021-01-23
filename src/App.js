import "./App.css";
import Footers from "./Footers";
import Headers from "./Headers";
import CastRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <div style={{ marginTop: "80px" }}>
        <CastRoutes></CastRoutes>
      </div>
      <Footers></Footers>
    </div>
  );
}

export default App;
