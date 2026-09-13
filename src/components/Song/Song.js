import React from 'react';
import { Link } from 'react-router-dom';
import { SongCard, SongInfo, Playbtn } from './styles';

function Song({ idAlbum, title, artist, album, favorite }) {
    return (
        <SongCard $favorite={favorite}>
            <SongInfo>
                <h5>Title: {title}</h5>
                <p>Artist: {artist}</p>
                <p>Album: {album}</p>

            <Link to={`/song/${idAlbum}`}>View Details</Link>
            </SongInfo>
        </SongCard>
    );
}

export default Song;