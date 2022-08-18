import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { GenderClothing } from "./components/GenderClothing";
import { Header } from "./components/Header";
import { Home } from "./components/Home/index";

function App() {
    const [openBag, setOpenBag] = useState(false);
    const openBagFunc = () => setOpenBag(!openBag);
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
    return (
        <div className="App">
            <BrowserRouter>
                <Header openBag={openBag} setOpenBag={setOpenBag} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                openBag={openBag}
                                setOpenBag={setOpenBag}
                                saveItem={saveItem}
                                bagItems={bagItems}
                                setBagItems={setBagItems}
                                deleteItem={deleteItem}
                                openBagFunc={openBagFunc}
                            />
                        }
                    />
                    <Route
                        path="/clothing/:gender"
                        element={<GenderClothing />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
