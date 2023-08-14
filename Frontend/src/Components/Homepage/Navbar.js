

import React from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaHeart } from 'react-icons/fa';
import "./Navbar.css";
import {  useDisclosure } from '@chakra-ui/react';
import Signup from "../LoginSignup/Signup"
import { Link } from "react-router-dom"


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <nav className="navbar">
            <div className="top-bar">
                <img src='https://www.bialetti.com/static/version1686550349/frontend/bialetti/bialetti_italia/en_US/icons/Truck.svg' />
                <div className="free-shipping"> <p> Free shipping for orders over 59,90€ </p></div>
            </div>
            <div className="language">
                <span>EN</span>----<span>IT</span>
            </div>
            <div className="logo">
                <Link to='/'>
                    <img src="https://www.bialetti.com/media/logo/default/5-layers_3x.png" alt="Logo" />
                </Link>

            </div>
            <div className="icons">
                <a href="">
                    <FaSearch />
                </a>
                <a href="#">
                    <FaHeart />

                </a>

                <a href="#" onClick={onOpen} >
                    <FaUser />
                </a>
                <Link to="./cart">
                    <FaShoppingBag />

                </Link>

            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="https://www.bialetti.com/it_en/bialetti-torrefazione">
                            COFFEE ROASTING BIALETTI
                        </a>
                    </li>
                    <li>
                            MOKA EXPRES
                    </li>
                    <Link to="./product">
                        <li>
                            PRODUCTS
                        </li>
                    </Link>
                    <li>
                        <a href="#">NEWS</a>
                    </li>
                    <li>
                        <a href="#">INSPIRATION</a>
                    </li>
                    <li>
                        <a href="#">STORES</a>
                    </li>
                </ul>
            </div>
            <Signup
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
            />
        </nav>

    );
}

export default Navbar;
