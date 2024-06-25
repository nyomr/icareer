import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../src/components/Search';

describe('Search Component', () => {

  test('renders search input', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('changes input value', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement.value).toBe('test');
  });

});
