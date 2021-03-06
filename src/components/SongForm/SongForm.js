import React, { Component } from 'react';
import './SongForm.css';

class SongForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      artist: '',
      link: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.addSong = this.addSong.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  addSong(event) {
    event.preventDefault();
    const newSong = {
      songName: this.state.title,
      artistName: this.state.artist,
      link: this.state.link,
      id: this.props.songQueue.length + 1
    }
    this.props.addNewSong(newSong);
    this.setState({
      title: '',
      artist: '',
      link: ''
    })
  }

  render() {
    return (
      <form>
        <h3>Add New Song</h3>
        <input
          type="text"
          className="title-input"
          value={this.state.title}
          placeholder="Title"
          name="title"
          onChange={this.handleChange}>
        </input>
        <input
          type="text"
          className="artist-input"
          value={this.state.artist}
          placeholder="Artist"
          name="artist"
          onChange={this.handleChange}>
        </input>
        <input
          type="text"
          className="link-input"
          value={this.state.link}
          placeholder="Link"
          name="link"
          onChange={this.handleChange}>
        </input>
        <button onClick={this.addSong}>Add Song</button>
      </form>
    )
  }
}

export default SongForm;
