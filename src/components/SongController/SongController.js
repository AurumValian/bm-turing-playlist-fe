import React from 'react';

const SongController = ( { showNextSong } ) => {

  return (
    <div>
      <button onClick={showNextSong}>Next Song</button>
    </div>
  );
};

export default SongController;
