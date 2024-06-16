import './App.css';
import Signature from "./Signature";
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import BananaBread from "./pictures/BananaBread.jpg";
import CozyHut from "./pictures/CozyHut.jpg";
import ValleyMaui from "./pictures/ValleyMaui.jpg";
import FruitStand from "./pictures/FruitStand.jpg";

export default function Home() {
    useEffect(() => {
        let counter = 1;
        const intervalId = setInterval(function() {
            document.getElementById('radio' + counter).checked = true;
            counter++;

            if (counter > 4) {
                counter = 1;
            }
        }, 5000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    return(
        <div>
            <div id="nav_title">
                {/* TODO: Change font size and check font if it matches nav bar and capture the moment */}
                {/* TODO: Remove animation for signature for not home page */}
                <div id="title">
                        <Signature />
                </div>
                <nav className="navbar">
                    <Link to="/home">Home</Link> 
                    <Link to="/gallery">Gallery</Link> 
                    <a href="http://www.instagram.com/saisiddu321" target="_blank" rel="noopener noreferrer">Instagram</a>
                </nav>
            </div>
                <div id="typing">
                    {/* TODO : Ending punctuation */}
                    Capturing The Moment.
                </div>
			{/* <PictureDiv /> */}
            <div className='slider'>
                <div className='slides'>
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />

                    <div class="slide first">
                        <img src={FruitStand} alt="" />
                    </div>
                    <div class="slide">
                        <img src={ValleyMaui} alt="" />
                    </div>
                    <div class="slide">
                        <img src={CozyHut} alt="" />
                    </div>
                    <div class="slide">
                        <img src={BananaBread} alt="" />
                    </div>
                    <div class="navigation-auto">
                        <div class="auto-btn-1"></div>
                        <div class="auto-btn-2"></div>
                        <div class="auto-btn-3"></div>
                        <div class="auto-btn-4"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};