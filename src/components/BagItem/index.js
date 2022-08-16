import React from "react";
const BagItem = ({
    img,
    size,
    name,
    price,
    id,
    deleteItem,
    bagItems,
    quantity,
    setBagItems,
}) => {
    const increaseItem = () => {
        const specificItem = bagItems.find((item) => item.id === id);
        specificItem.quantity += 1;
        const specificIndex = bagItems.findIndex((item) => item.id === id);
        const newItems = bagItems.filter((item) => item.id !== id);
        newItems.splice(specificIndex, 0, specificItem);
        console.log(newItems);
        localStorage.setItem("bag-product", JSON.stringify(newItems));
        setBagItems(newItems);
    };
    const decreaseItem = () => {
        const specificItem = bagItems.find((item) => item.id === id);
        if (specificItem.quantity > 1) {
            specificItem.quantity -= 1;
        }
        const specificIndex = bagItems.findIndex((item) => item.id === id);
        const newItems = bagItems.filter((item) => item.id !== id);
        newItems.splice(specificIndex, 0, specificItem);
        console.log(newItems);
        localStorage.setItem("bag-product", JSON.stringify(newItems));
        setBagItems(newItems);
    };
    return (
        <div className="bag-item">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="bag-item--details">
                <p className="size">{size}</p>
                <p className="name">{name}</p>
                <div className="increaser">
                    <span onClick={decreaseItem}>-</span>
                    <span className="quantity">{quantity}</span>
                    <span onClick={increaseItem}>+</span>
                </div>
            </div>
            <div className="price-container">
                <p
                    className="delete-item"
                    onClick={() => {
                        console.log(id);
                        const filteredItems = bagItems.filter(
                            (item) => item.id !== id
                        );
                        deleteItem(filteredItems);
                    }}
                >
                    X
                </p>
                <p>${Math.round(price)}</p>
            </div>
        </div>
    );
};

export { BagItem };
