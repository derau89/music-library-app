import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Song({ idAlbum, title, artist, album }) {
    return (
        <div>
            <p>Title: {title}</p>
            <p>Artist: {artist}</p>
            <p>Album: {album}</p>

            <Link to={`/song/${idAlbum}`}>View Details</Link>
        </div>
    );
}

export default Song;