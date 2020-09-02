import React from 'react';
import './SongDisplay.css';

function SongDisplay(props) {
  return (
    <section className="song-display">
      Song: {props.song.songName}<br />
      Artist: {props.song.artistName} <br />
      Link: {props.song.link}
    </section>
  )
}

export default SongDisplay;
