import React, { useState } from 'react';



function ProjectList ({ category }) {

    const [screenshot] = useState([
        {
        name: "Budget Tracker",
        category: "Projects",
        description: "No SQL Database App",
    }, 
    {
        name: "Just Tech Gun Show",
        category: "Projects",
        description: "First Full MERN stack Application",
    }, 
    {
        name: "Pizza Hunt",
        category: "Projects",
        description: "Sequlize and SQL",
    },   
    {
        name: "REGEX Tutorial",
        category: "Projects",
        description: "Technical Documentation",
    },             
    ]);

    const currentScreenshot = screenshot.filter((screenshot) => screenshot.category === category );

    return (
        <div> 
           <div className="flex-row">
               {currentScreenshot.map((image, i ) => (
                   <img
                   src={requestAnimationFrame(`../../assets/screenshot/${category}/${i}.jpg`)}
                   alt = {image.name}
                   className="img-thumbnail mx-1"
                   key={image.name}
                   />
               ))} 
           </div>
        </div>
    ) 
}

export default ProjectList