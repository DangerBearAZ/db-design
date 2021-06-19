import React from 'react';
import CoverImage from "../../assets/cover/beach-party.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about"> Claire Ogesen</h1>
            <img src={CoverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About; 
