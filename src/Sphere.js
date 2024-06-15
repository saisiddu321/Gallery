import './App.css';
import './Pic.css';
import './Sphere.css';
import Signature from './Signature';
import {Link} from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import AmazonSphere from "./pictures/AmazonSphere.jpg";

export default function Sphere() {

    return (
        <div className="bannerContainer">
            <div>
                <Link to="/gallery"><Signature /></Link> 
			</div>
            <div id="sphereHeader">
                <a href="https://www.seattlespheres.com/" target="_blank" rel="noopener noreferrer"><h2>
                    Day at Amazon Spheres.
                </h2></a>
                <br></br>
                <p>
                    Seattle, Washington. In the heart of downtown Seattle, the Amazon Spheres stand as an unseeming office space <br />
                    for amazon employees. What initally appears to be a life-sized terrarium is actually a unique and <br />
                    immersive workspace where employees can connect with both ideas and the flora within.

                </p>
            </div>
            <ParallaxBanner
                layers={[
                    {image:AmazonSphere, speed: -30 },
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