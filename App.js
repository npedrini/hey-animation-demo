/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AppContainer from './app/container/AppContainer';
import styles from './app/component/styles';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
        <AppContainer />
    </View>
  );
};

export default App;