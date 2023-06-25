import "./App.css";

import Tiles from "./components/cards/Tiles";
import Tiles2 from "./components/cards/Tiles2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./components/cards/Table.js";
import "antd/dist/reset.css";
import Charts from "./components/cards/Charts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tablet />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/Charts" element={<Charts />} />
      </Routes>
    </Router>
  );
}

const Tablet = () => {
  return (
    <div className="App">
      <h1>Choose what kind of data you want</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "10%",
        }}
      >
        <Tiles />
        <Tiles2 />
      </div>
    </div>
  );
};

export default App;
