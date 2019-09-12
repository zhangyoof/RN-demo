import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import configAppNavigator from './router';

class AppConfig extends Component {
    
  render() {
    const AppNavigator = configAppNavigator();
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AppConfig;