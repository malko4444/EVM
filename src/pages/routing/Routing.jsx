import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from '../home/Home';
import Vote from '../vote/Vote';
import About from '../about/About';
import AddCandidates from '../addCandidate/AddCandidates';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vote" element={<Vote/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/addCandidate" element={<AddCandidates/>} />
            </Routes>
        </Router>
    );
}
