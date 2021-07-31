import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"
import Common from "./Common"
import web from "../src/images/side-img-1.jpg"
const About = () => {
    return (
        <>
            <Common 
            name="Welcome to About page"
            imgsrc={web}
            visit="/contact"
            btname="Contact Now"/>

            
        </>

    )
}

export default About;
