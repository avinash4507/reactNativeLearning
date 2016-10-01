// Index.ios.js: Place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';


// Create a component

const App = () => (
    <Header headerText={'Albums'} />
);

// render it to the device

AppRegistry.registerComponent('reactNativeAlbums', () => App);
