import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./Dashboard";
import BitcoinPrice from "./pages/bitcoin/BitcoinPrice";

const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/bitcoin-price" element={<BitcoinPrice />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
