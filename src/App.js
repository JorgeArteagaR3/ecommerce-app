import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NewArrival } from "./components/NewArrival";
function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <NewArrival />
        </div>
    );
}

export default App;
