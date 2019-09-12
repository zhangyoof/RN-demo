import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import appUrlConfig from '../services/appPortalConfig';


class Home extends Component {

  static navigationOptions = {
    headerTitle: '智慧建设',
    headerLeft: null,
  };

  componentDidMount() {
  }



  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome home!
          
        </Text>
        <Text style={styles.text}>
        请点击底部通讯录功能，通讯录功能每条点击可跳转至详情
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

export default Home;
