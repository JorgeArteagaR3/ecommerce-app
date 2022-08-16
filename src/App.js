import { useState } from "react";
import "./App.css";
import { BagModal } from "./components/BagModal";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NewArrival } from "./components/NewArrival";
function App() {
    const localStorageProducts =
        JSON.parse(localStorage.getItem("bag-product")) || [];
    const [bagItems, setBagItems] = useState(localStorageProducts || []);

    const saveItem = (item) => {
        const localStorageItems = localStorage.getItem("bag-product") || "[]";
        const parsedItems = JSON.parse(localStorageItems);
        parsedItems.push(item);
        const stringifiedItem = JSON.stringify(parsedItems);
        localStorage.setItem("bag-product", stringifiedItem);
        setBagItems(parsedItems);
    };

    const deleteItem = (item) => {
        const stringifiedItem = JSON.stringify(item);
        localStorage.setItem("bag-product", stringifiedItem);
        setBagItems(item);
    };

    const [openBag, setOpenBag] = useState(false);

    return (
        <div className="App">
            <Header openBag={openBag} setOpenBag={setOpenBag} />
            <Hero />
            <NewArrival saveItem={saveItem} />
            <BagModal
                openBag={openBag}
                setOpenBag={setOpenBag}
                bagItems={bagItems}
                setBagItems={setBagItems}
                deleteItem={deleteItem}
            />
        </div>
    );
}

export default App;
