import React, { Component } from "react";
import "./App.css";
import ArtistList from "./ArtistList";
import FormArtist from "./FormArtist";

class App extends Component {
  state = {
    artists: [
      {
        artistName: "Calexico",
        musicStyle: "Rock fusion",
        albums: [
          "Spoke",
          "The Black Light",
          "Roadmap",
          "Travelall",
          "Hot Rail",
        ],
        image: "",
      },
      {
        artistName: "Chillbump",
        musicStyle: "Rap",
        albums: ["Ego Trip", "Going Nowhere", "Ondubground X Chilbump"],
        image: "",
      },
      {
        artistName: "Georges Brassens",
        musicStyle: "Musique Française",
        albums: [
          "La Mauvaise Réputation",
          "Le Vent",
          "Les Sabots d'Hélène",
          "Je me suis Fais Tout Petit",
          "Oncle Archibald",
          "Le pronographe",
        ],
        image: "",
      },
      {
        artistName: "Clutch",
        musicStyle: "Stoner Rock",
        albums: [
          "Transnational Speedway League",
          "Clutch",
          "The Elephant Riders",
          "Jam Room",
          "Pure Rock Fury",
          "Blast Tyrant",
          "Robot Hive/Exodus",
          "From Beale Street to Oblivion",
          "Strange Cousins from the West",
          "Earth Rocker",
          "Psychic Warfare",
        ],
      },
    ],
    isAddArtistClicked: false,
  };

  addArtistClick = () => {
    this.setState({ isAddArtistClicked: !this.state.isAddArtistClicked });
  };

  addArtist = (artistname, musicstyle) => {
    this.setState({
      artists: [
        ...this.state.artists,
        {
          artistName: artistname,
          musicStyle: musicstyle,
          albums: [],
          image: "",
        },
      ],
    });
  };

  render() {
    return this.state.isAddArtistClicked ? (
      <div>
        <FormArtist addArtist={this.addArtist} />
        <button onClick={this.addArtistClick}>Retour</button>
      </div>
    ) : (
      <div>
        <h1>Artistes</h1>

        <ArtistList artistsData={this.state.artists} />
        <button onClick={this.addArtistClick}>Ajouter un artiste</button>
      </div>
    );
  }
}

export default App;
