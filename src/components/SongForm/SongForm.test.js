import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SongForm from './SongForm';

describe('SongForm', () => {
  it('should display the inputs and buttons', () => {
    render (
      <SongForm />
    )

    const titleInput = screen.getByPlaceholderText('Title');
    const artistInput = screen.getByPlaceholderText('Artist');
    const linkInput = screen.getByPlaceholderText('Link');
    const addSongButton = screen.getByRole('button');

    expect(titleInput).toBeInTheDocument();
    expect(artistInput).toBeInTheDocument();
    expect(linkInput).toBeInTheDocument();
    expect(addSongButton).toBeInTheDocument();
  })
})
