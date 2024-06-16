import './App.css';
import Signature from './Signature';
import {Link} from 'react-router-dom';
import './Pic.css';
import NightTech from "./pictures/NightTech.jpg";
import AmazonSphere from "./pictures/AmazonSphere.jpg";
import VanCanada from "./pictures/VanCanada.jpg";
import SharpRock from "./pictures/SharpRock.jpg";
import Lake from "./pictures/Lake.jpg";
import BananaBread from "./pictures/BananaBread.jpg";
import CozyHut from "./pictures/CozyHut.jpg";
import Haleakala from "./pictures/Haleakala.jpg";

export default function Gallery() {
    return(
        <div>
            <div id="title">
					<Signature />
			</div>
            <nav className="navbar">
                <Link to="/home">Home</Link> 
                <Link to="/gallery">Gallery</Link> 
                <a href="http://www.instagram.com/saisiddu321" target="_blank" rel="noopener noreferrer">Instagram</a>
            </nav>
            <div class="container2">
                <div class="tile">
                    <Link to="/gallery/vanc"><img src={VanCanada} alt="Day at Vanc"></img></Link> 
                </div>
                <div class="tile">
                    <Link to="/gallery/sphere"><img src={AmazonSphere} alt="Day at the Spheres"></img></Link> 
                </div>
                <div class="tile">
                    <Link to="/gallery/tech"><img src={NightTech} alt="Night at Tech"></img></Link>
                </div>
                <div class="tile">
                    <img src={Lake} alt="Day at Lake"></img>
                </div>
                <div class="tile">
                    <img src={SharpRock} alt="Huge Rock"></img>
                </div>
                <div class="tile">
                    <img src={BananaBread} alt="Eating bread"></img>
                </div>
                <div class="tile">
                    <img src={Haleakala} alt="Volcano"></img>
                </div>
                <div class="tile">
                    <img src={CozyHut} alt="Aesthetic huts"></img>
                </div>
            </div>
            
        </div>
    )
}