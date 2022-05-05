import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Destination from "./Components/Destination";
// import "./styles/Styles.css";
import "./styles/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          {/* <Route path="/destination" element={<Destination />} />
        <Route path="/destination" element={<Destination />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
