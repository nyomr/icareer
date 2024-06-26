import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
 
describe('Home Page', () => {
  test('renders the home page with title and subtitle', () => {
    render(<Home />);

    expect(screen.getByText('Testing')).toBeInTheDocument();
    expect(screen.getByText('Dive into the world of careers and discover your perfect fit. Start exploring today!')).toBeInTheDocument();
  });

});
