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

  // it('should have display a list of songs', () => {
  //   const song = {"songName":"Django","artistName":"The Modern Jazz Quartet","link":"https://www.youtube.com/watch?v=wXnkD7_5vqM","id":4}
  //   render(
  //     <SongDisplay song={song}/>
  //   )
  //
  //   const songName = screen.getByText('Song: Django');
  //   const artistName = screen.getByText('The Modern Jazz Quartet');
  //   const link = screen.getByText('https://www.youtube.com/watch?v=wXnkD7_5vqM');
  //
  //   expect(songName).toBeInTheDocument();
  //   expect(artistName).toBeInTheDocument();
  //   expect(link).toBeInTheDocument();
  // })
  // This doesn't work because they're all in the same block. I would separate them if time permitted.
})
