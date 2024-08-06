import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage"; // Ensure this path is correct
import NavBar from "./components/NavBar"; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Add other routes here as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
