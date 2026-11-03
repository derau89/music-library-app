import React from "react";
import { useSelector } from "react-redux";
import { Library as StyledLibrary } from "./styles";
import Song from "../Song/Song";
import SearchResultsComponent from "../SearchResults/SearchResults";

function Library({ searchTerm }) {
  const library = useSelector((state) => state.library.library);
  const { results, loading, error } = useSelector((state) => state.search);

  return (
    <StyledLibrary>
      {searchTerm && (
        <>
          {loading && <p>Cargando...</p>}

          {error && <p role="alert">{error}</p>}

          {!loading && !error && results.length > 0 && (
            <SearchResultsComponent results={results} />
          )}

          {!loading && !error && results.length === 0 && (
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