import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Image, Platform } from 'react-native';
import Login from './pages/Login';
import Home from './pages/Home';
import AddressBook from './pages/AddressBook/AddressBook';
import Detail from './pages/AddressBook/Detail';
import Mine from './pages/Mine';

export function TabBarIcon({ source }) {
  return <Image resizeMode="contain" style={tabIconStyle} source={source} />;
}

const tabIconStyle = {
  height: Platform.OS === 'ios' ? 20 : 22,
  width: Platform.OS === 'ios' ? 20 : 22,
  marginTop: Platform.OS === 'ios' ? 7 : 0
};

const Main = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: {
        elevation: 0, // header取消底部阴影效果
        // backgroundColor: '#F2F4F5'
      },
      headerTitleStyle:{
        textAlign: 'center',
        flex:1,
      },
      tabBarLabel: '首页',
      tabBarIcon: ({ focused }) => {
        const icon = require('./assets/homeTab/sou_ye_WXZ.png');
        const active_icon = require('./assets/homeTab/sou_ye_XZ.png');

        return <TabBarIcon source={focused ? active_icon : icon} />;
      }
      // 占位 为了使安卓headerTitle居中显示
      // headerRight: <View style={{ marginLeft: 5, width: 30 }} />,
      // headerLeft: <View style={{ marginLeft: 5, width: 30 }} />,
    }
  },
  AddressBook: {
    screen: AddressBook,
    navigationOptions: {
      tabBarLabel: '通讯录',
      headerStyle: {
        elevation: 0,
      },
      headerTitleStyle:{
        textAlign: 'center',
        flex:1,
      },
      tabBarIcon: ({ focused }) => {
        const icon = require('./assets/homeTab/sou_ye_WXZ.png');
        const active_icon = require('./assets/homeTab/sou_ye_XZ.png');

        return <TabBarIcon source={focused ? active_icon : icon} />;
      }
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      headerStyle: {
        elevation: 0,
      },
      headerTitleStyle:{
        textAlign: 'center',
        flex:1,
      },
      tabBarIcon: ({ focused }) => {
        const icon = require('./assets/homeTab/sou_ye_WXZ.png');
        const active_icon = require('./assets/homeTab/sou_ye_XZ.png');

        return <TabBarIcon source={focused ? active_icon : icon} />;
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#3399FF',
    inactiveTintColor: '#666',
    showIcon: true,
    style: {
      elevation: 0, //header取消底部阴影效果
      backgroundColor: 'white',
      borderTopWidth: 0.3,
      borderColor: '#dbdbdb'
    },
    tabStyle: {
      backgroundColor: 'white',
      height: 50
    },
    labelStyle: {
      marginHorizontal: 0,
      marginBottom: Platform.OS === 'ios' ? 5 : 0,
      marginTop: 2,
      fontSize: 10
    },
    indicatorStyle: {
      backgroundColor: 'transparent'
    },
    iconStyle: {
      width: 50
    }
  },
  tabBarPosition: 'bottom',
  initialRouteName: 'Home',
  backBehavior: true, //后退按钮是否会使Tab键切换到初始选项卡
  swipeEnabled: false,
  animationEnabled: false,
});

export default function configAppNavigator() {
  return StackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        // headerTitle: '登录',
        header: null,
      }
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        headerTitle: '联系人',
      }
    },
    Main: {
      screen: Main
    },
  }, {
    initialRouteName: 'Login'
  });
};
