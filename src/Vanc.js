import './App.css';
import './Pic.css';
import './Vanc.css';
import Signature from './Signature';
import {Link} from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import VanCanada from "./pictures/VanCanada.jpg";

export default function Vanc() {

    return (
        <div className='container3'>
            <div>
                <Link to="/gallery"><Signature /></Link> 
			</div>
            <div>
                <ParallaxBanner
                    layers={[{image:VanCanada, speed: -30 }]}
                    className="bannerbg2"
                />
            </div>
            <div id="vancHeader">
                <a href="https://www.seatoskygondola.com/" target="_blank" rel="noopener noreferrer"><h2>
                    On Top of Vancouver.
                </h2></a>
                <br></br>
                <p>
                    Squamish, Canada. North of Vancouver is a beautiful viewpoint that overlooks<br />
                    the mountain vistas of Howe Sound. Getting to the viewpoint either consists of a beautiful ride <br />
                    on a gondola lift or long hike up the hill for the more adventerous.
                </p>
            </div>
        </div>
    )
};