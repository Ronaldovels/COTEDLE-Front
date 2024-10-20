import React from 'react';
import './HomeBanner.css'

import { Link } from 'react-router-dom'; // Importar Link para navegação


function Banner() {
    return (
        <main>
            <nav>
                <Link to="/" id='link_title'>
                    <h1 id='home'>
                        <div id="pinkB">C</div>
                        <div id="whiteB">O</div>
                        <div id="whiteB">T</div>
                        <div id="whiteB">E</div>
                        <div id="wineB">D</div>
                        <div id="whiteB">L</div>
                        <div id="whiteB">E</div>
                    </h1>
                </Link>
                <Link to="/" id='link_sub'>
                    <p id='subtitle'>
                        As long as
                        I emerge victorious
                        in the end, that's
                        all
                        that matters.
                    </p>
                </Link>
            </nav>
        </main>
    )
}

export default Banner