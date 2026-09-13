import React from "react";
import { Library as StyledLibrary } from "./styles";
import Song from "../Song/Song";
import useFetch from "../hooks/useFetchMusic";

function Library({ searchTerm }) {
    const url = searchTerm
        ? `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${searchTerm}`
        : null;

    const { data, isLoading, error } = useFetch(url);

    if (isLoading) {
        return <p>Loading music...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <StyledLibrary>
            {data.album?.map((song) => (
                <Song
                    key={song.idAlbum}
                    idAlbum={song.idAlbum}
                    title={song.strAlbum}
                    artist={song.strArtist}
                    album={song.strAlbum}
                    favorite={false}
                />
            ))}
        </StyledLibrary>
    );
}

export default Library;