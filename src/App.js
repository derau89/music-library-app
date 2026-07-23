import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Song from './components/Song';

class App extends Component {

  componentDidMount() {
    console.log("La app se cargó correctamente");

  }

  render() {
  return (
    <div className="App">
      <Header />

      <Song 
  title="Neon Skies"
  artist="Luna Vector"
  album="City Lights"
  image="https://picsum.photos/100/100?random=1"
/>

<Song 
  title="Echoes of Tomorrow"
  artist="The Midnight Code"
  album="Digital Dreams"
  image="https://picsum.photos/100/100?random=2"
/>

<Song 
  title="Ocean Without Waves"
  artist="Marina Blue"
  album="Infinite Horizon"
  image="https://picsum.photos/100/100?random=3"
/>

<Song 
  title="Crimson Horizon"
  artist="Velvet Pulse"
  album="Red Signals"
  image="https://picsum.photos/100/100?random=4"
/>

<Song 
  title="Silent Revolution"
  artist="Nova Echo"
  album="Fragments of Tomorrow"
  image="https://picsum.photos/100/100?random=5"
/>

<Song 
  title="Midnight Frequency"
  artist="Shadow Circuit"
  album="Neon Afterglow"
  image="https://picsum.photos/100/100?random=6"
/>

    </div>
  );
}
}

export default App;
