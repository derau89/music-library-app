import React from "react";
import "./Library.css";
import Song from "../Song/Song";

const Library = ({ librarySongs = [] }) => {
    return (
        <div className="library">
            <h2>Library</h2>

            {librarySongs.length === 0 ? (
                <p>No songs in the library.</p>
            ) : (
                librarySongs.map((song) => (
                    <Song
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        album={song.album}
                    />
                ))
            )}
        </div>
    );
};

export default Library;