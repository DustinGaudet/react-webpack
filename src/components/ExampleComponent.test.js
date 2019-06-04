import React from 'react'
import renderer from 'react-test-renderer';
import ExampleComponent from './ExampleComponent'

describe('Examining the syntax of Jest tests', () => {
    it('renders without crashing', () => {
        renderer.create(<ExampleComponent />)
    })
    
});