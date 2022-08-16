import React, { useEffect, useState } from "react";
import "./index.css";
import { Item } from "../Item";
const NewArrival = ({ saveItem }) => {
    const [arrival, setArrival] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const res = await fetch(
            "https://fakestoreapi.com/products/category/men's clothing"
        );
        const data = await res.json();
        const newItems = data.map((item) => {
            item["sizes"] = ["S", "M", "L", "XL", "XXL"];
            item["color"] = "black";

            return item;
        });
        setArrival(newItems);
    }
    return (
        <div className="new-arrival-container">
            <h2>NEW ARRIVAL</h2>
            <div className="new-arrivals">
                {arrival.map((product) => {
                    return (
                        <Item
                            saveItem={saveItem}
                            arrival={arrival}
                            setArrival={setArrival}
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            sizes={product.sizes}
                            name={product.title}
                            price={product.price}
                            color={product.color}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export { NewArrival };
