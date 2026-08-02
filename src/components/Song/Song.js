import React from 'react';
import './styles.css';
const Song = ({ title, artist, album }) => {
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
};

export default Song;