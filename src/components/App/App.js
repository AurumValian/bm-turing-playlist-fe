import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import SongDisplay from '../SongDisplay/SongDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],
      currentSongIndex: 0,
      currentSong: {}
    }

    this.showNextSong = this.showNextSong.bind(this);
  }

  componentDidMount() {
    this.getSongs('http://localhost:8080/api/v1/playlist')
  }

  getSongs(url) {
    fetch(url)
      .then(response => response.json())
      .then(songs => this.setState({songQueue: songs, currentSong: songs[0]}))
  }

  showNextSong() {
    this.setState({
      currentSongIndex: this.state.currentSongIndex + 1 === this.state.songQueue.length ?
      this.state.currentSongIndex + 1 : 0
    })
    this.setState({currentSong: this.state.songQueue[this.state.currentSong]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <SongDisplay
              currentSong={this.state.currentSong}
            />
            <SongController />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
