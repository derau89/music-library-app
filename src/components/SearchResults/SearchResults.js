
import Song from "../Song/Song";
import { SearchResults, SearchItem, BtnDanger } from "./styles";
import { useDispatch } from 'react-redux';
import { addSong } from '../../Redux/libraryActions';

const SearchResultsComponent = ({ results = [] }) => {
  const dispatch = useDispatch();
  return (
    <SearchResults>

      {results.map((song) => (
        <SearchItem key={song.id}>

          <Song
    title={song.title}
    artist={song.artist}
    album={song.album}
    id={song.id}
    showDelete={false}
/>

          <BtnDanger onClick={() => dispatch(addSong(song))}>
            Add to Library
          </BtnDanger>

        </SearchItem>
      ))}

    </SearchResults>
  );
};

export default SearchResultsComponent;