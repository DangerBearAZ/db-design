import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'
import photo from "../../assets/screenshot/budget.jpg"

function projects(props) { 
    const currentCategory = {
        name: "Projects",
        description: "Things I have created"
    }
    return (
        <section>
            <h1> {capitalizeFirstLetter(currentCategory.name)} </h1>
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img
                src={photo}
                alt="example work"
                className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );

}

export default projects