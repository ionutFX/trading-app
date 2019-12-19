import React, {Component} from 'react';
import { ActivityIndicator } from 'react-native';
// import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/screens';
import { images } from './src/constants/images';
import { cacheImages } from './src/utils/cacheImages';
import { render } from 'react-dom';
import { AppLoading } from 'expo';
import { UtilityThemeProvider , Box, Text} from 'react-native-design-utility';
import { theme } from "./src/constants/theme";


export default class App extends React.Component {

  state = {
    isReady: false
  }

  // componentDidMount(){
  //   this.cacheAssets();
  // }

  _loadAssetsAsync = async () =>{
    const imagesAssets = cacheImages(Object.values( images ));

    await Promise.all([...imagesAssets]);

  }

  render(){
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <UtilityThemeProvider theme={theme}>
        <Navigation>
        </Navigation>
      </UtilityThemeProvider>
    );
  };
}

