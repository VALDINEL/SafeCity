import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReportIncident from "./pages/ReportIncident";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/report" element={<ReportIncident />} />
            </Routes>
        </Router>
    );
}

export default App;
