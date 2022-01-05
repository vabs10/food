import React from 'react';
import Common from "./Common"
import Aboutus from "./image/aboutus.png";
function About() {
    return (
        <div>
            <Common 
                start="About Us"
                name="Our mission is to be the smartest
                      and most helpful food platform
                      in existence"
                des="We're fulfilling this mission by improving life in the kitchen
                    for millions of home cooks around the world."
                btn="About us"
                img={Aboutus}


            />
        </div>
    )
}

export default About;
