import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet,View,Text } from 'react-native'

export class MyImage extends Component {
  static navigationOptions = {
    title: 'Image',
  };
  render() {
    return (
      <View style = {styles.container}>
      <Text > HelLo from Image</Text>
      <Image style = {styles.image}
        source={require("../res/images/react-logo.png")}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
    alignItems: 'center',
    padding : 20
  },
  image : {
    width : 200 ,
    height : 200
  }
})
