import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';

const App = () => {
  const [searchResults] = useState([
    {
      id: 1,
      title: "Ocean Without Waves",
      artist: "Marina Blue",
      album: "Infinite Horizon"
    },
    {
      id: 2,
      title:"Crimson Horizon",
      artist:"Velvet Pulse",
      album: "Red Signals"
    }, 
    {
      id: 3,
      title: "Silent Revolution",
      artist: "Nova Echo",
      album: "Fragments of Tomorrow"
    },
    {
      id: 4,
      title: "Midnight Frequency",
      artist: "Shadow Circuit",
      album: "Neon Afterglow"
    },
    {
      id: 5,
      title: "Neon Skies",
      artist: "Luna Vector",
      album: "City Lights"
    },
    {
      id: 6,
      title: "Echoes of Tomorrow",
      artist: "The Midnight Code",
      album: "Digital Dreams"
    },
    {
      id: 7,
      title: "Speed of Light",
      artist: "Predator Pulse",
      album: "Quantum Drive"
    }
  ]);


  const [librarySongs, setLibrarySongs] = useState([]);

  useEffect(() => {
  console.log("Library Songs Updated:", librarySongs);
}, [librarySongs]);

  return (
    <div className="App">
      <Header appName="Music Library" />
      <SearchResults 
      results={searchResults} 
      addToLibrary={(song) => 
        setLibrarySongs([...librarySongs, song])} />
      <Library librarySongs={librarySongs} />
    </div>
  );
}


  
export default App;