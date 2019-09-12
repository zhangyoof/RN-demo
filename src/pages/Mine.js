import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Mine extends Component {

  static navigationOptions = {
    headerTitle: '我的',
    headerLeft: null,
  };

  componentDidMount() {
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome Mine!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18
  },
  text: {
    marginTop: 8,
    fontSize: 20
  }
});

export default Mine;
