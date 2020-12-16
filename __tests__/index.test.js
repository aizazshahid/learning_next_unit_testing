
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../pages/index'

test('Landing page load test', () => {

    render(<Index />)
    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.queryByText("Incredible")).toBeInTheDocument()

})