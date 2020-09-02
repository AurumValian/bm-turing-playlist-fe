import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import SongDisplay from '../SongDisplay/SongDisplay';

const url = 'http://localhost:8080';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],
      currentSong: {}
    }
  }

  getSongs(url) {
    fetch(url)
      .then(response => response.json())
      .then(songs => this.setState({songQueue: songs}))
  }

  getRandomSong

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <SongDisplay />
            <SongController />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
