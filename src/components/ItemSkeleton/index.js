import React from "react";
import "./style.css";

const ItemSkeleton = () => {
    return (
        <div className="item">
            <div className="item--image-container">
                <div className="image-skeleton skeleton"></div>
            </div>

            <div className="">
                <p className=""></p>
                <div className="item-sizes"></div>
            </div>
            <div className="item-details">
                <p className="item-color item-color-skeleton skeleton"></p>
                <p className="item-name skeleton item-name-skeleton skeleton"></p>
                <p className="item-price skeleton item-price-skeleton skeleton"></p>
            </div>
        </div>
    );
};

export { ItemSkeleton };
