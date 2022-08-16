import React from "react";
import "./style.css";
import { IoIosArrowUp } from "react-icons/io";
import { BagItem } from "../BagItem";
const BagModal = ({
    openBag,
    setOpenBag,
    bagItems,
    deleteItem,
    setBagItems,
}) => {
    const prices = bagItems.map((product) =>
        Number(product.price * product.quantity)
    );
    const total = prices.reduce((a, b) => a + b, 0);
    return (
        <>
            {openBag && <div className="bag-modal-container"></div>}
            <div className={openBag ? "bag bag-open" : "bag"}>
                <div className="back-cart-container">
                    <IoIosArrowUp
                        className="back-arrow"
                        size="30px"
                        onClick={() => {
                            setOpenBag(!openBag);
                        }}
                    />
                    <p>Your Shopping Cart</p>
                </div>

                <div className="cart-content">
                    {bagItems.length ? (
                        bagItems.map((product) => (
                            <BagItem
                                setBagItems={setBagItems}
                                key={product.id}
                                img={product.image}
                                size={product.size}
                                name={product.title}
                                price={product.price}
                                id={product.id}
                                quantity={product.quantity}
                                bagItems={bagItems}
                                deleteItem={deleteItem}
                            />
                        ))
                    ) : (
                        <p className="empty-cart">
                            Your cart is currently empty.
                        </p>
                    )}
                </div>
                <div className="checkout-container">
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span>${Math.round(total)}</span>
                    </div>
                    <span className="taxes">
                        Shipping, taxes and discounts calculated at checkout.
                    </span>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </>
    );
};

export { BagModal };
