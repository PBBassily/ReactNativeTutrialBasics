import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import {LoginButton, ShareDialog} from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SocialIcon } from 'react-native-elements'
import {
  shareOnFacebook,
  shareOnTwitter,
} from 'react-native-social-share';

import FabricTwitterKit from 'react-native-fabric-twitterkit'

export class FacebookShare extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://play.google.com/store/apps/details?id=com.espace.ninetyseconds',
      contentDescription: 'Facebook sharing is easy!'
    };

    this.state = {shareLinkContent: shareLinkContent,};
  }
  /////////////////////////////////////////////////////////
  tweet () {
    shareOnTwitter({
        'text':'Global democratized marketplace for art \n' + "https://play.google.com/store/apps/details?id=com.espace.ninetyseconds",
        'link':"https://play.google.com/store/apps/details?id=com.espace.ninetyseconds",
      //  'imagelink':'https://artboost.com/apple-touch-icon-144x144.png',
        //or use image
      //  'image': 'artboost-icon',
      },
      (results) => {
        console.log(results);
      }
    );
  }

  facebookShare () {

    shareOnFacebook({

        'link':'https://artboost.com/',
        'imagelink':'https://artboost.com/apple-touch-icon-144x144.png',
        //or use image
        'image': 'artboost-icon',
      },
      (results) => {
        console.log(results);
      }
    );
  }

  /////////////////////////////////////////////////////////
  mySuperCoolFunction() {

	FabricTwitterKit.composeTweet({
		body: 'انا جبت كذا ... انت جبت كام ؟\n#90Sanya\nhttps://play.google.com/store/apps/details?id=com.espace.ninetyseconds'
	}, (completed, cancelled, error) => {
		console.log('completed: ' + completed + ' cancelled: ' + cancelled + ' error: ' + error);
	});

}
  /////////////////////////////////////////////////////////
  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent).then(
      function(canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      }
    ).then(
      function(result) {
        if (result.isCancelled) {
          alert('Share cancelled');
        } else {
          alert('Share success with postId: ' + result.postId);
        }
      },
      function(error) {
        alert('Share fail with error: ' + error);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>

          <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.shareLinkWithShareDialog.bind(this)}>
            Share
          </Icon.Button>
          <Icon.Button name="twitter" backgroundColor="#00aced" onPress={this.shareLinkWithShareDialog.bind(this)}>
            tweet
          </Icon.Button>
        <TouchableHighlight  style = {styles.facebook}onPress={this.shareLinkWithShareDialog.bind(this)}>
            <Text style={styles.shareText}>Share link with ShareDialog</Text>
        </TouchableHighlight>

        <SocialIcon
          title= "شارك النتيجة "
          button
          type='facebook'
          style = {{padding :20}}
          onPress={this.facebookShare}
          />

          <SocialIcon
            style = {{padding :20}}
            title= " شوف الفيديو "
            button
            type='youtube'
          />

          <SocialIcon
            title= "شارك النتيجة "
            button
            type='twitter'
            style = {{padding :20}}
            onPress={this.mySuperCoolFunction}
            />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection :"column",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  shareText: {
    fontSize: 20,
    margin: 10,
    color :"white"
  },
  facebook : {
    backgroundColor :"#3b5998",
    borderRadius : 7
  }
});
