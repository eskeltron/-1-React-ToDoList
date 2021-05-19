import "./App.css";
import Header from "./components/Header";
import Work from "./components/Works";

function App() {
    const title = "To do list";
    return (
        <div
            className="App"
            style={{ backgroundColor: "#f8efd7", height: "100vh" }}
        >
            <Header title={title} />
            <Work />
        </div>
    );
}

export default App;
