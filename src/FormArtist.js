import React, { Component } from "react";

class FormArtist extends Component {
  initialState = {
    artistName: "",
    musicStyle: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmitArtist = (event) => {
    event.preventDefault();
    this.props.addArtist(this.state.artistName, this.state.musicStyle);
    this.setState(this.initialState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitArtist}>
        <label htmlFor="artistName">Nom</label>
        <input
          type="text"
          id="artistName"
          name="artistName"
          value={this.state.artistName}
          onChange={this.handleChange}
        />

        <label htmlFor="musicStyle">Style</label>
        <input
          type="text"
          id="musicStyle"
          name="musicStyle"
          value={this.state.musicStyle}
          onChange={this.handleChange}
        />

        <input type="submit" value="Ajouter" />
      </form>
    );
  }
}
export default FormArtist;
