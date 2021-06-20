import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'
import ProjectList from "../Project-List"

function Projects(props) { 
    const { currentCategory } = props;
    return (
        <section>
            <h1 data-testid="h1tag"> {capitalizeFirstLetter(currentCategory.name)} </h1>
            <p>{currentCategory.description}</p>
            <ProjectList category={currentCategory.name} />
        </section>
    );

}

export default Projects;