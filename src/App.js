import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// di react auto udah ada jsx, cek aja modules
// TO DO: How to do best practices for pages routing?
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { RandomComments } from './pages/RandomComments'; // export tanpa default, bisa juga dari sini, tapi ini pages, best practicenya import 1 default pages utama aja
import ImageSearch from './pages/ImageSearch';
import VideoSearch from './pages/VideoSearch';
import Playground from './pages/Playground';

import { Navbar, BootstrapNavbar } from './navbar/Navbar.js';

// Beda jsx dan component, serta cara pakainya
const Desc = <h1>This is React</h1>;
const DescCard = () => {
    return (
        <div class="card">
            <div class="card-body">
                {Desc}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <>  
            <Router>
                {/* navbar harus dalem BrowserRouter biar bisa didestructure */}
                <BootstrapNavbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/contact" element={<Contact contacts />} />
                    <Route path="/comment" element={<RandomComments />} />
                    <Route path="/image-search" element={<ImageSearch />} />
                    <Route path="/video-search" element={<VideoSearch />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/playground" element={<Playground />} />
                </Routes>
            </Router>

            {/* <DescCard /> */}
        </>
    )
}

export default App;