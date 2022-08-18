import React from "react";
import "./style.css";
const Item = ({
    products,
    image,
    name,
    color,
    price,
    sizes,
    id,
    saveItem,
    openBagFunc,
}) => {
    const sendBagItem = (e) => {
        const filteredItem = products.find((item) => item.id === id);
        filteredItem["size"] = e.target.textContent;
        filteredItem["quantity"] = 1;
        console.log(filteredItem);
        openBagFunc();
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
