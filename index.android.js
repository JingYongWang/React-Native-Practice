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
  TextInput,
  TouchableOpacity,
  Image
  
} from 'react-native';

class FirstRNApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      /*預設值*/
      text: '',
      height: '',
      weight: '',
      result: '',
      pokedex:''
    }
  }
  
  
  onPress =  () => {
    console.log("pressed");
  }
  
  calc = (result,value) =>{
     value = this.state.height / 100;
     result = this.state.weight / (value * value);
     this.setState({result})
  }
  
  render() {
    return (
      <View style={styles.container}>
      
      <Text style = {styles.welocme}> Under Texts Are Input </Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 2}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      
      <TouchableOpacity onPress = {this.onPress}>
        <Text>Button</Text>
      </TouchableOpacity>
     
      <Text style={styles.welcome}>{this.state.text}</Text>
    
        
        <Text style = {styles.welcome} >
          請輸入BMI
        </Text>
        <Text style = {styles.welcome} >
          身高(CM)
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 2}}

          onChangeText={(height) => this.setState({height})}
          value={this.state.height}
        />
        <Text style = {styles.welcome} >
          體重(KG)
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 2}}
          onChangeText={(weight) => this.setState({weight})}
          value={this.state.weight}
        />
        
        <TouchableOpacity onPress = {this.calc} >
          <Text>Button</Text>
        </TouchableOpacity>        
        
        <Text>{this.state.result}</Text>
        
       <Image
          style={{width: 87,height: 87}}
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
        />        
        
        <Text>神奇寶貝輸入</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 2}}
          onChangeText={(pokedex) => this.setState({pokedex})}
          value={this.state.pokedex}
        />     
        <Image
          style={{width: 87,height: 87}}
          source={{uri: `https://pokeadvisor.com/img/mon/${this.state.pokedex}.png`}}
        /> 
        
        
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
