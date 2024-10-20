import React from "react";
import './OptionContainer.css'
import { Link } from 'react-router-dom'; 



function OptionContainer() {

    return (
        <div id="OptionContainer">
            <Link to="/guess" id="choose">
                <img src="https://i.postimg.cc/TYZ6WBzc/icon.webp" alt="icon" id="optionIMG" />
                <div id="container_text">
                    <p id="text">Guess the Character</p>
                </div>
            </Link>
        </div>
    )

}

export default OptionContainer