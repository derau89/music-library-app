import "./styles.css";
import Song from "../Song/Song";

const SearchResults = ({ results = [], addToLibrary }) => {
  return (
    <div className="search-results">

      {results.map((song) => (
        <div className="search-item" key={song.id}>

          <Song
            title={song.title}
            artist={song.artist}
            album={song.album}
          />

          <button className="btn btn-danger" 
          onClick={() => addToLibrary(song)}>
            Add to Library
          </button>

        </div>
      ))}

    </div>
  );
};

export default SearchResults;