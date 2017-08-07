import React from 'react';
import {
  View,
  AppRegistry,
  Text,StyleSheet,ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';
import {Scroll} from './screens/ScrollView'
import {Flex} from './screens/Flex'
import {MyImage} from './screens/Image'
import {MySectionList} from './screens/MySectionList'
import {MyFlatList} from './screens/MyFlatList'
import {Anim} from './screens/Animation'
import {AnimList} from './screens/AnimationList'
import {Gestures} from './screens/Gestures'
import {Networking} from './screens/Networking'
import {FacebookShare} from './screens/facebookShare'
import {Item} from './components/Item'
import { StackNavigator } from 'react-navigation';

class Tutorial extends React.Component {

  static navigationOptions = {
    title: 'Welcome to Tutorial',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
  <ScrollView>
    <Item title = "Flex Box"
      navigation = {this.props.navigation} target = "flx"/>

    <Item title = "Scroll View"
      navigation = {this.props.navigation} target = "scv"/>

    <Item title = "Image View"
      navigation = {this.props.navigation} target = "img"/>

    <Item title = "Flat List"
    navigation = {this.props.navigation} target = "flst"/>

    <Item title = "Section List"
    navigation = {this.props.navigation} target = "slst"/>

    <Item title = "Animation"
      navigation = {this.props.navigation} target = "anim"/>

    <Item title = "Animation List"
      navigation = {this.props.navigation} target = "animls"/>

    <Item title = "Gestures"
      navigation = {this.props.navigation} target = "ges"/>

    <Item title = "Networking"
      navigation = {this.props.navigation} target = "nt"/>
      <Item title = "FacebookShare"
        navigation = {this.props.navigation} target = "fb"/>

    <Button
      raised
      icon={{name: 'home', size: 32}}
      buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
      textStyle={{textAlign: 'center'}}
      title={`Welcome to\nReact Native Elements`}
/>

  </ScrollView>

    );

  }
}
const SimpleApp = StackNavigator({
  Home: { screen: Tutorial },
  scv : {screen : Scroll},
  flx : {screen : Flex},
  img : {screen : MyImage},
  flst : {screen : MyFlatList},
  slst : {screen : MySectionList},
  anim : {screen : Anim},
  animls : {screen : AnimList},
  ges : {screen : Gestures},
  nt : {screen : Networking},
  fb : {screen : FacebookShare},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
    alignItems: 'center',
    padding : 20
  },
});
AppRegistry.registerComponent('Tutorial', () => SimpleApp);
