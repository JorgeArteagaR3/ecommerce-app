import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./index.css";
const Header = ({ openBag, setOpenBag }) => {
    return (
        <header>
            <nav className="header-nav">
                <h1>
                    <Link to={"/"}>MasterMind</Link>
                </h1>
                <ul>
                    <li>
                        <a href="/">Men</a>
                    </li>
                    <li>
                        <a href="/">Women</a>
                    </li>
                    <li>
                        <a href="/">Kids</a>
                    </li>
                    <li>
                        <a href="/">Accesories</a>
                    </li>
                </ul>
                <div className="icons-container">
                    <FiSearch size="20px" />
                    <HiOutlineUser size="20px" />
                    <IoBagHandleOutline
                        onClick={() => {
                            setOpenBag(!openBag);
                        }}
                        size="20px"
                    />
                </div>
            </nav>
        </header>
    );
};

export { Header };
