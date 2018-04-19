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

// props是一个组件的参数，在父控件中设置，不可改变
// state是一个组件mounts时设置的属性，子空间自身可以管理自己的state
class Timber extends Component {
  constructor(props){
    super(props)
    this.state = {count:0};
  }
  componentDidMount(){
    let that = this;
    setInterval(function () {
      that.increase()
    },1000)
  }

  increase(){
    this.setState({count:this.state.count + 1})
  }

  render(){
    return (
      <View>
        <Text>
          count:{this.state.count}
        </Text>
      </View>
    )
  }

}

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
        <Timber/>
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
