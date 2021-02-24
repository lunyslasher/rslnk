import React from "react";
import "materialize-css";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { Navbar } from "./components/Navbar";

function App() {
    const routes = useRoutes();
    return (
        <Router>
            <Navbar />
            <div className="wrap">
                <div className="main">{routes}</div>
            </div>
        </Router>
    );
}

export default App;
