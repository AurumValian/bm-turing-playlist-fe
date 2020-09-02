import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SongDisplay from './SongDisplay';

describe('Song Display', () => {
  it('should have a current song header', () => {
    const song = {"songName":"Django","artistName":"The Modern Jazz Quartet","link":"https://www.youtube.com/watch?v=wXnkD7_5vqM","id":4}
    render(
      <SongDisplay song={song}/>
    )

    const header = screen.getByText('Current Song');

    expect(header).toBeInTheDocument();

  })

  it('should have display a song', () => {
    const song = {"songName":"Django","artistName":"The Modern Jazz Quartet","link":"https://www.youtube.com/watch?v=wXnkD7_5vqM","id":4}
    render(
      <SongDisplay song={song}/>
    )

    const songName = screen.getByText(/Song: Django/i);
    const artistName = screen.getByText(/The Modern Jazz Quartet/i);

    expect(songName).toBeInTheDocument();
    expect(artistName).toBeInTheDocument();
  })
  // The link doesn't work because of all the slashes.
})
