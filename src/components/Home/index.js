import React from "react";
import { Hero } from "../Hero";
import { MenWomen } from "../MenWomen";
import { NewArrival } from "../NewArrival";
import { BagModal } from "../BagModal";

const Home = ({ openBagFunc, saveItem }) => {
    return (
        <>
            <Hero />
            <NewArrival openBagFunc={openBagFunc} saveItem={saveItem} />
            <MenWomen />
        </>
    );
};

export { Home };
