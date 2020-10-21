import React from 'react'
import {render} from '@testing-library/react'
import Main from '../u2-main/Main'

test('renders learn react link', () => {
    const {getByText} = render(<Main/>)
    const linkElement = getByText(/x/i)
    expect(linkElement).toBeInTheDocument()
});
