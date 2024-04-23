import React from 'react';
import ReactDOM from 'react-dom'; // render to specific DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// di react auto udah ada jsx, cek aja modules
// TO DO: How to do best practices for pages routing?
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

// how to do best practices for components and using them
import Navbar from './components/Navbar';
import RandomComments from './components/RandomComments';

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
        <Router>
            <Navbar />
            <DescCard />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/contact" element={<Contact contacts />} />
                <Route path="/comment" element={<RandomComments />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}

export default App;