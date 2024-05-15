import Navbar from './Component/Navbar/Navbar';
import HeroSection from './Component/HeroSection/HeroSection';
import Card from './Component/Card/Card';
import { useEffect, useState } from 'react';
import axios from "axios"
import Section from './Component/Section/Section';
import FilterSection from './Component/FilterSection/FilterSection';

const ENDPOINT = "https://qtify-backend-labs.crio.do/"


function App() {

  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(()=>{
    axios.get(`${ENDPOINT}albums/top`)
      .then(({data}) =>{
        setTopAlbums(data)
        console.log("Top Albums", data)
      })

      axios.get(`${ENDPOINT}albums/new`)
      .then((res) =>{
        setNewAlbums(res.data)
      })

      axios.get(`${ENDPOINT}songs`)
      .then((res) =>{
        setSongs(res.data)
        setFilteredSongs(res.data)
      })

      axios.get(`${ENDPOINT}genres`)
      .then((res) =>{
        setGenres([ { key: "all", label: "All" }, ...res.data.data])
      })

  },[])

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section title='Top Albums' data={ topAlbums} navId='topalbum'/>
      <Section title='New Albums' data={ newAlbums}navId='newalbum'/>
      <FilterSection title='Songs' data={ filteredSongs} filters={genres}
      executeFilter={(genre =>{
        if(genre === 'all') {
          setFilteredSongs(songs)
        } else {
          setFilteredSongs(songs.filter(song => song.genre.key === genre))
        }
      })}
      />
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
