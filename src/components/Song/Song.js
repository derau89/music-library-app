
import React from 'react';
import { Link } from 'react-router-dom';
import { SongCard, SongInfo } from './styles';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeSong } from '../../Redux/libraryActions';

function Song({ id, idAlbum, title, artist, album, favorite, showDelete = true }) {
    const dispatch = useDispatch();
    const songId = id ?? idAlbum;

    const handleDelete = () => {
        dispatch(removeSong(songId));
    };

    return (
        <SongCard $favorite={favorite}>
            <SongInfo>
                <h5>Title: {title}</h5>
                <p>Artist: {artist}</p>
                <p>Album: {album}</p>
                <Link to={`/song/${songId}`}>View Details</Link>
            </SongInfo>

            {showDelete && (
                <button onClick={handleDelete}>
                    Eliminar
                </button>
            )}
        </SongCard>
    );
}

Song.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    idAlbum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    favorite: PropTypes.bool,
    showDelete: PropTypes.bool
};

export default Song;