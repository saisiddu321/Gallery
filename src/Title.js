import './App.css';
import { motion } from "framer-motion";
import {React} from "react";

const text = "Capturing the moment."

export default function Title() {
    const words = text.split(" ");
    const draw = {
        hidden: {opacity: 0},
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.25, delayChildren: 0.25 * i},
        }),
    };
    const child = {
        visible: {
            opacity: 1,
            // x: "50vw",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100, 
            },
        },
        hidden: {
            opacity: 0,
            // x: "50vw",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };
    return (
        <motion.div id="title"
            style={{fontSize:"2rem"}}
            variants={draw}
            initial="hidden"
            animate="visible"
        >
        {words.map((word, index) => (
            <motion.span
                variants={child}
                style={{ marginRight: "5px"}}
                key={index}
            >
                {word}
            </motion.span>
        ))}    
        </motion.div>
    );
};

