
import React from "react";
import { Library as StyledLibrary } from "./styles";
import Song from "../Song/Song";
import SearchResultsComponent from "../SearchResults/SearchResults";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetchMusic";

function Library({ searchTerm }) {
    const url = searchTerm
        ? `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
        : null;

    const { data, isLoading, error } = useFetch(url);
    const library = useSelector(state => state);

    const searchResults = (data?.album || []).map(album => ({
        id: album.idAlbum,
        title: album.strAlbum,
        artist: album.strArtist,
        album: album.strAlbum,
    }));

    return (
        <StyledLibrary>
            {searchTerm && (
                <>
                    {!isLoading && !error && searchResults.length > 0 && (
    <SearchResultsComponent results={searchResults} />
)}

{!isLoading && !error && searchResults.length === 0 && (
    <p>No se encontraron álbumes. Intenta con otro artista.</p>
)}
                </>
            )}

            <h2>Mi biblioteca</h2>

            {library.map((song) => (
                <Song
                    key={song.id}
                    id={song.id}
                    title={song.title}
                    artist={song.artist}
                    album={song.album}
                    favorite={false}
                />
            ))}
        </StyledLibrary>
    );
}

export default Library;
