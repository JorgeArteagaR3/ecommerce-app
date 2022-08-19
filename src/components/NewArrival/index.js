import React, { useEffect, useState } from "react";
import "./index.css";
import { Item } from "../Item";
import { ItemSkeleton } from "../ItemSkeleton";
const NewArrival = ({ saveItem, openBagFunc }) => {
    const [products, setProducts] = useState([]);
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
        setProducts(newItems);
    }
    return (
        <div className="new-arrival-container">
            <h2>NEW ARRIVAL</h2>
            <div className="new-arrivals">
                {products.length ? (
                    products.map((product) => {
                        return (
                            <Item
                                openBagFunc={openBagFunc}
                                saveItem={saveItem}
                                products={products}
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                sizes={product.sizes}
                                name={product.title}
                                price={product.price}
                                color={product.color}
                            />
                        );
                    })
                ) : (
                    <>
                        <ItemSkeleton />
                        <ItemSkeleton />
                        <ItemSkeleton />
                        <ItemSkeleton />
                    </>
                )}
            </div>
        </div>
    );
};

export { NewArrival };
