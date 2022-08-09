import React from "react";
import "./style.css";
const Item = ({ image, name, color, price }) => {
    return (
        <div className="item">
            <img src={image} alt={name} />
            <div className="hover-content">
                <p className="quick-add">Quick Add</p>
                <div className="item-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <div className="item-details">
                <p className="item-color">{color}</p>
                <p className="item-name">{name}</p>
                <p className="item-price">${price}</p>
            </div>
        </div>
    );
};

export { Item };
