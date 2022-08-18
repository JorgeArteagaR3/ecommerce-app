import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../Item/index";
const GenderClothing = () => {
    const { gender } = useParams();
    const [products, setProducts] = useState([]);
    const newKeyword = gender.split("-").join(" ");
    const getClothesByGender = async () => {
        const res = await fetch(
            `https://fakestoreapi.com/products/category/${newKeyword}`
        );
        const data = await res.json();
        setProducts(data);
    };
    useEffect(() => {
        getClothesByGender();
    }, []);
    return (
        <div className="products-container">
            {products.map((product) => (
                <Item
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    sizes={product.sizes}
                    name={product.title}
                    price={product.price}
                    color={product.color}
                />
            ))}
        </div>
    );
};

export { GenderClothing };
