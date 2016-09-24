import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
      this.setState({ albums: response.data });
      console.log('response.data: ', response.data);
    });
  }

  render() {
    return (
      <View>
        {this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)}
      </View>
    );
  }
}

export default AlbumList;
