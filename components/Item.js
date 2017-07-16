import React from 'react';
import {
  Button,
  View,
  AppRegistry,
  Text,StyleSheet
} from 'react-native';

export class Item extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    const target = this.props.target;
    const title = this.props.title;
    return (
    <View style = {styles.subContainer}>
      <Button onPress={() => navigate(target)}
          title={title}
      />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    justifyContent : "space-around",
    alignItems: 'center',
    padding : 5,
    margin : 5
  },
});
