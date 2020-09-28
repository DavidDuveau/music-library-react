import React, { Component } from "react";

class ArtistList extends Component {
  render() {
    const artistLi = this.props.artistsData.map((artist, i) => {
      return <li key={i}>{artist.artistName}</li>;
    });
    return <ul>{artistLi}</ul>;
  }
}
export default ArtistList;
