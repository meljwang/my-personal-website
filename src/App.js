import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Footnote from "./components/Footnote";

const App = () => {
  return (
    <Router>
      <div className="scroll-container">
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;
