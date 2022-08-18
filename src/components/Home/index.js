import React from "react";
import { useState } from "react";
import { Hero } from "../Hero";
import { MenWomen } from "../MenWomen";
import { NewArrival } from "../NewArrival";
import { BagModal } from "../BagModal";

const Home = ({
    openBag,
    setOpenBag,
    openBagFunc,
    saveItem,
    bagItems,
    setBagItems,
    deleteItem,
}) => {
    return (
        <>
            <Hero />
            <NewArrival openBagFunc={openBagFunc} saveItem={saveItem} />
            <MenWomen />
            <BagModal
                openBagFunc={openBagFunc}
                openBag={openBag}
                setOpenBag={setOpenBag}
                bagItems={bagItems}
                setBagItems={setBagItems}
                deleteItem={deleteItem}
            />
        </>
    );
};

export { Home };
