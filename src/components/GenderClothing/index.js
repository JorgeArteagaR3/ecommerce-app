import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../Item/index";
import { ItemSkeleton } from "../ItemSkeleton";
import "./style.css";
const GenderClothing = ({ saveItem, openBagFunc }) => {
    const { gender } = useParams();
    const [products, setProducts] = useState([]);
    let newKeyword;
    if (gender.includes("-")) {
        newKeyword = gender.split("-").join(" ");
    } else {
        newKeyword = gender;
    }
    const getClothesByGender = async () => {
        const res = await fetch(
            `https://fakestoreapi.com/products/category/${newKeyword}`
        );
        const data = await res.json();
        const newItems = data.map((item) => {
            item["sizes"] = ["S", "M", "L", "XL", "XXL"];
            item["color"] = "black";

            return item;
        });
        setProducts(newItems);
    };
    useEffect(() => {
        getClothesByGender();
        console.log(products);
    }, [newKeyword]);
    return (
        <div className="products-container">
            {products.length ? (
                products.map((product) => {
                    return (
                        <Item
                            openBagFunc={openBagFunc}
                            saveItem={saveItem}
                            products={products}
                            setProducts={setProducts}
                            key={product.id + product.title}
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
    );
};

export { GenderClothing };
