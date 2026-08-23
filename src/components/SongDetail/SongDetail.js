import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SongDetail() {
    const { id } = useParams();

    const [album, setAlbum] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [error, setError] = useState(null);

    const fetchAlbum = async () => {
        try {
            setError(null);

            const response = await axios.get(
                `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${id}`
            );

            const albumData = response.data.album?.[0];

            if (!albumData) {
                setError("Album not found");
                return;
            }

            setAlbum(albumData);
        } catch (error) {
            console.error("Error fetching album:", error);
            setError("Error fetching album");
        }
    };

    const fetchTracks = async () => {
        try {
            const response = await axios.get(
                `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${id}`
            );

            const tracksData = response.data.track || [];

            console.log("Tracks response:", response.data);
            console.log("numero de tracks:", tracksData.length);

            setTracks(tracksData);
        } catch (error) {
            console.error("Error fetching tracks:", error);
            setTracks([]);
        }
    };

    const fetchData = () => {
        fetchAlbum();
        fetchTracks();
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    if (error) {
        return (
            <div>
                <p>{error}</p>

                <button onClick={fetchData}>
                    Intentar nuevamente
                </button>
            </div>
        );
    }

    if (!album) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <p>Album: {album.strAlbum}</p>
            <p>Artist: {album.strArtist}</p>
            <p>Year: {album.intYearReleased}</p>

            <h2>Tracks:</h2>

            {tracks.length > 0 ? (
                tracks.map((track) => (
                    <p key={track.idTrack}>
                        {track.strTrack}
                    </p>
                ))
            ) : (
                <p>No tracks found.</p>
            )}
        </div>
    );
}

export default SongDetail;