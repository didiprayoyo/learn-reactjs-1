import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    background: #63d471;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem cals((100vw - 1000px) / 2);
    z-index: 12;
    /* Third Nav
    justify-content: flex-start; */
`;

const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;

const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav
    margin-right: 24px;
    Third Nav
    width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export { Nav, NavLink, Bars, NavMenu };