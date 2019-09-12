/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import AppConfig from './src/AppConfig';
// import SketchRouter from "./src/router"
class App extends Component{
  render(){
    return (
      // <View>
        <AppConfig />
      // </View>
    );
  }
};
export default App;

// export default function App() {
//   class App extends Component {
//     render() {
//       return (
//           <AppConfig />
//       );
//     }
//   }

//   return App;
// }
