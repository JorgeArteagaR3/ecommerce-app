import React from "react";
import woman from "../../assets/images/woman.jpg";
import man from "../../assets/images/man.webp";
import { Link } from "react-router-dom";
import "./style.css";
const MenWomen = () => {
    return (
        <section className="men-women-container">
            <div className="man-container image-content">
                <div>
                    <p>Shop All Men's</p>
                    <Link to="/clothing/men's-clothing">Shop Now</Link>
                </div>
                <img src={man} alt="" />
            </div>
            <div className="women-container image-content">
                <div>
                    <p>Shop All Women's</p>
                    <Link to="/clothing/women's-clothing">Shop Now</Link>
                </div>
                <img src={woman} alt="" />
            </div>
        </section>
    );
};

export { MenWomen };
