import React from 'react';
import { AppRegistry, Text } from 'react-native';

import Header from './src/components/Header';

const App = () => (
	<Header />
);

AppRegistry.registerComponent('GriderAlbums', () => App);
