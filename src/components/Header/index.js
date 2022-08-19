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
                        <Link to={"/clothing/men's-clothing"}>Men</Link>
                    </li>
                    <li>
                        <Link to={"/clothing/women's-clothing"}>Women</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Kids</Link>
                    </li>
                    <li>
                        <Link to={"/clothing/jewelery"}>Accesories</Link>
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
