import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
 
// describe('Page', () => {
//   it('renders a heading', () => {
//     render(<Page />)
 
//     const heading = screen.getByRole('heading', { level: 1 })
 
//     expect(heading).toBeInTheDocument()
//   })
// })

describe('Home Page', () => {
  test('renders the home page with title and subtitle', () => {
    render(<Home />);

    // Check that the title and subtitle are present
    expect(screen.getByText('Find Your Dream in the World of Career')).toBeInTheDocument();
    expect(screen.getByText('Dive into the world of careers and discover your perfect fit. Start exploring today!')).toBeInTheDocument();
  });

  // test('renders the Navbar component', () => {
  //   render(<Home />);

  //   // Check that the Navbar is present (you may need to adjust this based on the actual content of Navbar)
  //   expect(screen.getByRole('navigation')).toBeInTheDocument();
  // });
});
