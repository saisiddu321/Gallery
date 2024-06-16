import './App.css';
import './Pic.css';
import './Sphere.css';
import Signature from './Signature';
import {Link} from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import NightTech from "./pictures/NightTech.jpg";

export default function Tech() {

    return (
        <div className="bannerContainer">
            <div>
                <Link to="/gallery"><Signature /></Link> 
			</div>
            <div id="sphereHeader">
                <a href="https://www.gatech.edu/" target="_blank" rel="noopener noreferrer"><h2>
                    Rainy Night at Tech.
                </h2></a>
                <br></br>
                <p>
                    Atlanta, Georgia. In the heart of midtown Georgia, Georgia Tech stands out from the surrounding city-scape<br />
                    This picture shows a wet and dark pathway illuminated by colorful lights for students to follow<br />
                    to eventually end up at the library where they will be met with hundredsd of other students.

                </p>
            </div>
            <ParallaxBanner
                layers={[
                    {image:NightTech, speed: -30 },
                    {
                        speed: -15,
                        children: (
                            <div>Hello world!</div>
                        ),
                    },
                ]}
                className="bannerbg"
            >
            </ParallaxBanner>
            
        </div>
    )
};