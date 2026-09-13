
import Song from "../Song/Song";
import { SearchResults, SearchItem, BtnDanger } from "./styles";

const SearchResultsComponent = ({ results = [], addToLibrary }) => {
  return (
    <SearchResults>

      {results.map((song) => (
        <SearchItem key={song.id}>

          <Song
            title={song.title}
            artist={song.artist}
            album={song.album}
          />

          <BtnDanger onClick={() => addToLibrary(song)}>
            Add to Library
          </BtnDanger>

        </SearchItem>
      ))}

    </SearchResults>
  );
};

export default SearchResultsComponent;