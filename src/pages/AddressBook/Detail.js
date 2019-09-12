import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item:{}
    }
  }

  componentDidMount() {
    const { item } = this.props.navigation.state.params || {};
    this.setState({item: item})
  }



  render() {

    /** item 结构
     * commonFlag: 1
     companyName: "新业主(三部专用)"
     companyType: null
     hiddenFlag: 0
     id: "1d69ad92a8c14a81a8aeda750bb6bafc"
     imgUrl: null
     name: "zsh业主审核人02"
     phone: "13751430007"
     */

    const {name, phone} = this.state.item;

    return (
      <View style={styles.container}>
        <Image
            source={require('../../assets/gravatar.png')}
            style={styles.thumb}
        />
        <Text style={styles.text}>
          {name}
        </Text>
        <View style={styles.phoneView}>
          <Text style={[styles.text, {color: '#666666', marginRight: 10}]}>
            手机
          </Text>
          <Text style={[styles.text, {color: '#4e85fc'}]}>
            {phone}
          </Text>
        </View>

        <View style={styles.btnBox1}>
          <Text style={styles.btn1}>拨 打</Text>
        </View>
        <View style={styles.btnBox2}>
          <Text style={styles.btn2}>常用联系人</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 30,
    alignItems: 'center',
  },
  text: {
    marginTop: 8,
    fontSize: 16
  },
  thumb: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
    backgroundColor: '#EEEEEE'
  },
  phoneView: {
    display: 'flex',
    flexDirection:'row'
  },
  btnBox1:{
    marginTop:40,
    width: '90%',
  },
  btn1:{
    borderRadius:20,
    paddingVertical:12,
    textAlign:'center',
    backgroundColor:'#4b85fc',
    color:'#fff',
    fontSize: 16,
  },
  btnBox2:{
    marginTop:20,
    width: '90%',
    borderColor: '#bababa'
  },
  btn2:{
    borderRadius:20,
    paddingVertical:12,
    textAlign:'center',
    borderColor: '#bababa',
    borderWidth: 1,
    color:'#333333',
    fontSize: 16,
  }
});

export default Detail;
