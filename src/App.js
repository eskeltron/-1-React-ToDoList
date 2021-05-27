import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
    const title = "To do list";
    return (
        <div
            className="App"
            style={{ backgroundColor: "#f8efd7", height: "100vh" }}
        >
            <Header title={title} />
            <Tasks />
        </div>
    );
}

export default App;
