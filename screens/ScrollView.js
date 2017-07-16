import React from 'react';
import {
  View,AppRegistry,Text,
  StyleSheet,ScrollView,Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export class Scroll extends React.Component {
  static navigationOptions = {
    title: 'Scroll',
  };
  render() {

    return (
      <ScrollView style= {styles.container}>
        <ScrollView horizontal>
          <Image
            source={require("../res/images/react-logo.png")}
            />
        </ScrollView>
      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button : {
    justifyContent : 'center',
    backgroundColor : 'skyblue',
    borderColor : 'steelblue'
  }
});
//AppRegistry.registerComponent('Tutorial', () => SimpleApp);
