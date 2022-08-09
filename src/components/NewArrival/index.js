import React, { useState } from "react";
import "./index.css";
import { Item } from "../Item";
const NewArrival = () => {
    const products = [
        {
            name: "Universal Coz Polo",
            price: "78",
            color: "Black",
            sizes: ["S", "M", "L", "XL", "XXL"],
            id: "pN5ok9",
            img: "https://i.imgur.com/ZAaM1Nt.png",
        },
        {
            name: "Fear of God Essentials",
            price: "63",
            color: "Harvest",
            sizes: ["S", "M", "L", "XL", "XXL"],
            id: "IklaSo",
            img: "https://i.imgur.com/ODVJTlv.png",
        },
        {
            name: "Universal Coz Polo",
            price: "78",
            color: "Black",
            sizes: ["S", "M", "L", "XL", "XXL"],
            id: "pN5ok9",
            img: "https://i.imgur.com/ZAaM1Nt.png",
        },
        {
            name: "Fear of God Essentials",
            price: "63",
            color: "Harvest",
            sizes: ["S", "M", "L", "XL", "XXL"],
            id: "IklaSo",
            img: "https://i.imgur.com/ODVJTlv.png",
        },
    ];
    const [arrival, setArrival] = useState(products);
    return (
        <div className="new-arrival-container">
            <h2>NEW ARRIVAL</h2>
            <div className="new-arrivals">
                {arrival.map((product) => {
                    return (
                        <Item
                            arrival={arrival}
                            setArrival={setArrival}
                            key={product.id}
                            image={product.img}
                            name={product.name}
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
