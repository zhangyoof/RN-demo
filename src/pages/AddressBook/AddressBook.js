import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableNativeFeedback, Image } from 'react-native';
import request from '../../services/request';
import appUrlConfig from '../../services/appPortalConfig';


class AddressBook extends Component {

    static navigationOptions = {
        headerTitle: '通讯录',
        headerLeft: null,
    };

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.getAddressList();
  }

  componentDidMount() {

  }

  getAddressList = () => {
    request('get', appUrlConfig.addressBook.getCompanyContractList,null , false)
        .then((res)=> {
          console.log('获取联系人列表---');
          console.log(res)
          if (res.code === 'SUCCESS') {
            if(res.result && res.result[0]) {
              let list = res.result[0].children;
              console.log(list)
              this.setState({list: list})
            }
          } else {
            alert(res.message);
          }
        })
        .catch(() => {
          alert('网络异常!');
        })
  }

  renderItem = ({item, index}: any) => {
    return <View>
      {item.index ? <Text style={styles.index}>{item.index}</Text> : null}
      <TouchableNativeFeedback
          onPress={() => {
            console.log(item);
              this.props.navigation.navigate('Detail', {'item': item});
            // this.props.navigation.push(EAddressbookRoutes.Contract, {...item})
          }}>
        <View style={styles.viewItem}>
          <Image
              source={require('../../assets/gravatar.png')}
              style={styles.thumb}
          />
          <Text style={styles.item}>{item.name}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  }

  keyExtactor = (item: any) => {return item.id};

  render() {

    const {list} = this.state;

    return (
        <View style={styles.container}>
          <FlatList
              data={list}
              keyExtractor={this.keyExtactor}
              renderItem={this.renderItem}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 18
    paddingLeft: 10
  },
  text: {
    marginTop: 8,
    fontSize: 20
  }
  ,viewStyle: {
  backgroundColor: '#ccc'
},
textStyle: {
  textAlign:'center',
      color:'#fff',
      fontWeight:'700',
      fontSize:16
},
item: {
  padding: 10,
      fontSize: 18,
      height: 44,
},
viewItem: {
  flex: 1,
      flexDirection: 'row',
      padding: 5
},
thumb: {
  width: 36,
      height: 36,
      borderRadius: 18,
      resizeMode: 'cover',
      backgroundColor: '#EEEEEE'
},
index:{
  paddingLeft: 10,
      paddingBottom: 5,
      paddingTop: 5,
}
});

export default AddressBook;
