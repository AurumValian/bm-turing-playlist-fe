import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// test('true should be true', () => {
//   expect(true).toEqual(true);
// });

describe('App', () => {
  it('should be able to add a new song', () => {
    render(
      <App />
    )

    fireEvent.change(screen.getByPlaceholderText('Title'), {target: {value: "My Shiny Teeth and Me"}})
    fireEvent.change(screen.getByPlaceholderText('Artist'), {target: {value: "Chip Skylark"}})
    fireEvent.change(screen.getByPlaceholderText('Link'), {target: {value: "https://www.youtube.com/watch?v=amffOYclBD8"}})
    fireEvent.click(screen.getByText('Add Song'))

    expect(screen.getByPlaceholderText('Title').value).toEqual('');
    expect(screen.getByPlaceholderText('Artist').value).toEqual('');
    expect(screen.getByPlaceholderText('Link').value).toEqual('');

    fireEvent.click(screen.getByText('Next Song'))
    fireEvent.click(screen.getByText('Next Song'))
    fireEvent.click(screen.getByText('Next Song'))
    fireEvent.click(screen.getByText('Next Song'))

    const songTitle = screen.getByText(/My Shiny Teeth and Me/);

    expect(songTitle).toBeInTheDocument;
  })
})
