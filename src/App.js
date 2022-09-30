import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
import Technology from "./Components/Technology";
import "./styles/Crew.css";
import "./styles/Technology.css";
import "./styles/media.css";
// import "./styles/Styles.css";
import "./styles/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/destination" element={<Destination />} />
          <Route eaxct path="/crew" element={<Crew />} />
          <Route eaxct path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
