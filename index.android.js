/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class FirstRNApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      /*預設值*/
      text: '123'
    }
  }
  
  onPress = () => {
    console.log("pressed");
  }
  
  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
     
      <Text style={styles.welcome}>{this.state.text}</Text>
      
        <Text style={styles.welcome} onPress = { this.onPress }  >
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Test!!!!!!!!!!!!!!!! 
        </Text>        
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstRNApp', () => FirstRNApp);
