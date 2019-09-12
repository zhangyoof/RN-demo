import React, { Component,Fragment } from 'react';
import { View, StyleSheet, TextInput, Text, Image,SafeAreaView } from 'react-native';
import request from '../services/request'
import appUrlConfig from '../services/appPortalConfig'

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '13751430006',
      password: 'a123456',
    }
  }

  login = () => {
    const {username, password} = this.state;

    let param = {
      username: username,
      password: password,
      accountType: 'PERSONAL'
    };
      request('post', appUrlConfig.login.userLogin,param , false)
        .then((res)=> {
            console.log(res);
          if (res.code === 'SUCCESS') {
            const token = res.result;
            appUrlConfig.token = token;
            // this.props.navigation.reset();
            this.props.navigation.navigate('Main');
          } else {
            alert(res.message);
          }
        })
        .catch(() => {
          alert('网络异常!');
        })

  };

  render() {
    return (
        <Fragment>
          {/* <StatusBar barStyle="dark-content" /> */}
          <SafeAreaView style={{ flex: 1,}}>
            <View style={styles.viewBox}>
              <View style={styles.loginBox}>
                <View>
                  <View style={styles.itemBox}>
                    {/* <Text style={styles.label}>123</Text> */}
                    <TextInput style={styles.input} placeholder='请输入用户名' value={this.state.username}></TextInput>
                  </View>
                  <View style={styles.itemBox}>
                    {/* <Text style={styles.label}>123</Text> */}
                    <TextInput style={styles.input} placeholder='请输入密码' value={this.state.password} secureTextEntry={true}></TextInput>
                  </View>
                </View>
                <View style={styles.btnBox}>
                  <Text style={styles.btn} onPress={this.login}>登 录</Text>
                </View>
              </View>
              <Image style={styles.backgroundImage} resizeMode='cover' source={require('../assets/loginBCImg.png')}></Image>
            </View >
          </SafeAreaView>
        </Fragment>
    );
  }

}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height:null,
    width:null,
    zIndex: -50
  },
  viewBox:{
// backgroundColor:'red',
    justifyContent:'center',
// flexDirection:'row'
    flex:1,
    zIndex:10,
  },
  itemBox:{
// height:30,
    flexDirection:'row',
    paddingHorizontal:50,
    marginBottom:30
  },
  loginBox:{
    height:500,
// 边框样式 (solid-固体/立方体、dotted-布满的/打点的、dashed-虚线)
// borderStyle: 'dashed',
// 边框颜色
// borderColor: 'red',
// 边框宽度
// borderWidth: 1,
// justifyContent:'space-around'
  },
  label:{
    width:100,
    textAlign:'right',
    paddingRight:5
  },
  input:{
    flex:1,
    borderColor:'#fff',
    borderStyle:'solid',
    borderWidth:1,
    fontSize:16,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:15
  },
  btnBox:{
    paddingHorizontal:50,
    marginTop:60
  },
  btn:{
    borderRadius:20,
    paddingVertical:12,
    textAlign:'center',
    backgroundColor:'#4b85fc',
    color:'#fff'
  }
});

export default Login;
