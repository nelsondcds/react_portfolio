import React from 'react';
import portrait from "../../assets/img/portrait.jpg";

const About = () => {
    return (
        <section className="my-5">
            <h1 id="about">About me</h1>
            <div className="portrait">
                <img src={portrait} alt="Nelson Carlos Da Silva smiling for the camera." />
            </div>
            <p>My name is Nelson Carlos Da Silva. I am a junior computer science engineer currently working towards a coding certification from GWU.</p>
        </section>
    )
}

export default About;
