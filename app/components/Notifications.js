import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';
import {
  Blocks,
  FriendBlock
} from './modules';
import styles from './styles/notifications';
import { Actions } from 'react-native-router-flux';

function request() {
  this.called = "";
  this.type = "";
  this.status = "";
  this.senderName = "";
  this.senderImgPath = "";
}

var ntnu = new request();
  ntnu.called = "NTNU Gjøvik";
  ntnu.type = 'group';
  ntnu.staus = 'pending';
  ntnu.senderName = 'Henrik';
  ntnu.senderImgPath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var ntnu2 = new request();
  ntnu2.called = "Pølsefest";
  ntnu2.type = 'group';
  ntnu2.staus = 'pending';
  ntnu2.senderName = 'Henrik';
  ntnu2.senderImgPath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var ntnu3 = new request();
  ntnu3.called = "Pied Piper 2.0";
  ntnu3.type = 'Challenge';
  ntnu3.staus = 'accepted';
  ntnu3.senderName = 'Jørgen';
  ntnu3.senderImgPath = "http://facebookcraze.com/wp-content/uploads/2009/12/funny_profile_pic_for_facebook_rape.jpg";

var requests = [ntnu, ntnu2, ntnu3];


export default class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      requests
    }
  }
  render() {
    let showRequests = this.state.requests.map((a, b) => {
    console.log(a.called)
    return (

      <FriendBlock
        onPress={() => {}}
        image={a.senderImgPath}
        name={a.called}
        key={b}
        small
      />

      /*

      <TouchableHighlight
      key = {b}
      onPress={() => {}}
      activeOpacity={75 / 100}
      underlayColor={"rgb(210,210,210)"} >
          <View style = {styles.request}>
            <Image
            style = {styles.senderImage}
            source = {{uri: a.senderImgPath}}/>
            <Text
            style = {styles.requestText}
            >
              {a.called}: invited by {a.senderName}
            </Text>
            <TouchableHighlight
            onPress={(a) => {
              requests.splice(b,1)
              this.setState({requests})
            }}
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}
            style = {styles.declineButton}>
            <Text>X</Text>
            </TouchableHighlight>
          </View>
      </TouchableHighlight>

      */

    )
  })
    return (
      <View style={styles.container}>
        <View style = {styles.navbar}></View>
        <View style = {styles.body}>
          <ScrollView style = {styles.requestContainer}>
            {showRequests}
          </ScrollView>
        </View>
        <TouchableHighlight
        onPress={() => {
          Actions.pop()
        }}
        activeOpacity={75 / 100}
        underlayColor={"rgb(210,210,210)"}
        style = {styles.closePage}>
          <Text style={styles.closeButtonText}>CLOSE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
