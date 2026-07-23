import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { title, artist, album } = this.props;

    return (
      <div className="song-card">

        <div className="song-info">
          <h5>{title}</h5>
          <p>{artist}</p>
          <small>{album}</small>
        </div>

        <button className="btn btn-danger play-btn">
          ▶
        </button>

      </div>
    );
  }
}

export default Song;