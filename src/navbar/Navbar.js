import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements"; // styling
import { Link } from 'react-router-dom'; // atau NavLink as Link

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>Home</NavLink>
                    <NavLink to="/home" activeStyle>About</NavLink>
                    <NavLink to="/contact" activeStyle>Contact</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

const BootstrapNavbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand disabled" aria-disabled="true">BOOTCAMP batch 8: Experiment with ReactJS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* pake Link to, instead of a href */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" activeStyle>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" activeStyle>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/comment">Comment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/image-search">Image Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/video-search">Video Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" activeStyle>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/playground" >Playground</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export { BootstrapNavbar, Navbar};