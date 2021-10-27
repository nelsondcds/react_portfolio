import React, { useState } from 'react';
import Project from '../Project';


function Portfolio() {

    const [projects] = useState([
        {
          name: 'The Cocktail Menu',
          filename: 'TheCocktailMenu.jpg',
          link: 'https://still-garden-29231.herokuapp.com/',
          repo: 'https://github.com/nelsondcds/Project-2-The-Cocktail-Menu'
        },
        {
            name: 'Weightlifting-Genie',
            filename: 'WeightliftingGenie.jpg',
            link: 'https://weightlifting-genie.herokuapp.com/',
            repo: 'https://github.com/nelsondcds/Project_3'
        },
        {
            name: 'Budget Tracker',
            filename: 'BudgetTracker.jpg',
            link: 'https://rocky-refuge-98533.herokuapp.com/',
            repo: 'https://github.com/nelsondcds/budget_tracker'
        },
        {
            name: 'Food Festival',
            filename: 'food-festival.jpg',
            link: 'https://nelsondcds.github.io/food-festival/',
            repo: 'https://github.com/nelsondcds/food-festival'
        },
        {
            name: 'Note Taker',
            filename: 'note-taker.jpg',
            link: 'https://fathomless-dusk-58895.herokuapp.com/',
            repo: 'https://github.com/nelsondcds/note-taker'
        },
        {
            name: "Lysa's Photo Portfolio",
            filename: 'photo-port.jpg',
            link: 'https://nelsondcds.github.io/photo-port/',
            repo: 'https://github.com/nelsondcds/photo-port'
        }
    ]);


    return (
        <section className="my-5">
            <h1>Portfolio</h1>
            <div className="flex-row space-between portfolio">
            {projects.map(project => (
                <Project project={project}/>
            ))}
            </div>
        </section>
    );
}

export default Portfolio;
