import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Error, Home, Hotel, List } from "./pages/Index";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
