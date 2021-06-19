import React from 'react';

function Nav() {

    const categories = [
        {
            name: "Projects",
            description: "Things I have made.",
        },
        { name: "Resume", description: "My Resume." },
    ];


    function categorySelected() {
        console.log(`clicked`)
    }

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="skull">💀</span> Danger By Design
                </a>
            </h2>
            <nav>
                <ul className="felx-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                             <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
