import './App.css';
import { useParallax } from "react-scroll-parallax";
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import NightTech from "./pictures/NightTech.jpg"
import AmazonSphere from "./pictures/AmazonSphere.jpg"
import VanCanada from "./pictures/VanCanada.jpg"
import SharpRock from "./pictures/SharpRock.jpg"

export default function PictureDiv() {
    const [parallaxProps, setParallaxProps] = useState({});

    useEffect(() => {
        const handleResize = () => {
            const isLargeScreen = window.innerWidth > 1024;
            if (isLargeScreen) {
                setParallaxProps({
                    scale: [0.5, 1, 0.5, "easeIn"]
                });
            } else {
                setParallaxProps({});
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sphere = useParallax(parallaxProps);
    const tech = useParallax(parallaxProps);
    const vanc = useParallax(parallaxProps);
    const rock = useParallax(parallaxProps);

    return (
        <div id='container'>
            <div className='images-wrapper'>
                {/* <img 
                    ref={sphere.ref}
                    src={AmazonSphere}
                    alt='Day at the spheres'
                    className='aspect34'
                /> */}
                <Link to="/gallery/sphere">
                    <img ref={sphere.ref} src={AmazonSphere} alt="Day at the Spheres" className='aspect34' />
                </Link>
            </div>
            <div className='images-wrapper'>
                <img 
                    ref={tech.ref}
                    src={NightTech}
                    alt='Night at Tech'
                    className='aspect34'
                />
            </div>
            <div className='images-wrapper'>
                <img 
                    ref={vanc.ref}
                    src={VanCanada}
                    alt='Day at Vancouver'
                    className='aspect2_21'
                />
            </div>
            <div className='images-wrapper'>
                <img 
                    ref={rock.ref}
                    src={SharpRock}
                    alt='Time to hike!'
                    className='aspect2_21'
                />
            </div>
        </div>
    )
};
