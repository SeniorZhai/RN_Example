/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class User extends Component {
  render(){
    const user = this.props.data;
    this.props.onReady("I am ready!")
    return (
      <View>
        <Text>
          Name:{user.name}
          Age:{user.age}
        </Text>
      </View>
    )
  }

}
User.defaultProps = {age:0}

var user = {name:"foo",age:20}
export default class App extends Component {
  getDefaultProps(){
    //
  }
  getInitialState(){
    //
  }

  componentWillMount(){

  }

  handlerReady(str){
    console.log(str)
  }

  render() {
    return (
      <View style={styles.container}>
        <User data={user} onReady={this.handlerReady}/>
      </View>
    );
  }

  componentDidMount(){

  }
  componentWillReceiveProps() {

  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  componentWillUpdate(){

  }

  componentDidUpdate(){

  }
  componentWillUnmount(){

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
