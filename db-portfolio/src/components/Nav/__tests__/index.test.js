import React from 'react';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Nav from '..'; 

afterEach(cleanup);

describe('Nav component', () => {
    //baseline 
    it('renders', () => {
        render(<Nav />);
    });

    //snapshot 
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
});

// check for emoji 
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render ( <Nav /> );

        expect(getByLabelText('skull')).toHaveTextContent('💀');
    });
});

//test for links 
describe('links are visable', () => {
    it('inserts text into the links', () => {
        //arrange 
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Danger By Design');
        expect(getByTestId('about')).toHaveTextContent('About Me');
        //assert 
    })
})