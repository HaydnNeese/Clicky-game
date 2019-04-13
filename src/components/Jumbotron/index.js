import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center shadow-text">NFL Memory Game</h1>
                <p className="lead text-center">Click <strong>ALL</strong> of the images once and only once. If you click an image more than once it is game over.</p>
            </div>
        </div>
    )
}

export default Jumbotron;