import React from "react";
import "./style.css";
const Item = ({ arrival, image, name, color, price, sizes, id, saveItem }) => {
    const sendBagItem = (e) => {
        const filteredItem = arrival.find((item) => item.id === id);
        filteredItem["size"] = e.target.textContent;
        filteredItem["quantity"] = 1;
        console.log(filteredItem);
        saveItem(filteredItem);
    };
    return (
        <div className="item">
            <div className="item--image-container">
                <img src={image} alt={name} />
            </div>

            <div className="hover-content">
                <p className="quick-add">Quick Add</p>
                <div className="item-sizes">
                    {sizes.map((size) => (
                        <div key={size} onClick={sendBagItem}>
                            {size}
                        </div>
                    ))}
                </div>
            </div>
            <div className="item-details">
                <p className="item-color">{color}</p>
                <p className="item-name">{name}</p>
                <p className="item-price">${Math.round(price)}</p>
            </div>
        </div>
    );
};

export { Item };
