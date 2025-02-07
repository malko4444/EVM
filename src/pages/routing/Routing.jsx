import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from '../home/Home';
import Vote from '../vote/Vote';
import About from '../about/About';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vote" element={<Vote/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </Router>
    );
}
