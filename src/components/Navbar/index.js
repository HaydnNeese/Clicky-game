import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-around navbar-fixed-top" id="navbar-color">
            <a className="navbar-brand" href="/"><img id="nfl-logo" src="https://www.thewrap.com/wp-content/uploads/2016/01/NFL-logo.jpg" alt="nfl logo"/></a>
            <div id="score-tracker">
                <p>Score: {props.score} | Top-Score: {props.topScore}</p>
            </div>
        </nav>
    )
}

export default Navbar;