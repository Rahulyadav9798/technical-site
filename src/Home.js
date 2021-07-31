import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"
import Common from"./Common"
import web from "../src/images/side-img-1.jpg"
const Home = () => {
    return (
        <>

            <Common 
            name="Grow your business with"
            imgsrc={web}
            visit="/service"
            btname="Get started"/>

        </>

    )
}

export default Home;
