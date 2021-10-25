import React from 'react';

const Resume = () => {
    return (
        <section className="my-5 resume">
            <h1>Resume</h1>
            <div className="a-btn">
                <a href="../../assets/doc/NelsonCarlosDaSilva.docx" download>
                    Download my resume
                </a>
            </div>
            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Material UI</li>
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
            </ul>
        </section>
    )
}

export default Resume;
