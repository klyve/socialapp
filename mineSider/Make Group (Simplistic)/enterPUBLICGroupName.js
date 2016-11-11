import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableHighlight,
} from 'react-native'
const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height

function person (){//The object containing the userinfo during registration
  this.nick;
  this.pic;
}

function createUser (usr,nick, pic)
{
  usr.nick = nick;
  usr.pic = pic;
  console.log(arguments)
}



 var newUser = new person();


export default class social extends Component {

  constructor(props)
  {
    super()
    this.state={text: ''}
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.textInput}
          placeholder={"Choose Group Name"}
          placeholderTextColor={'rgba(255,255,255,0.4)'}
          textColor
          onChangeText={(text) => {
            if(text.length > 13)
            {
              alert("Group name must be 3-13 chars")
            }
            this.setState({text})}}
          onSubmitEditing={(event) => {
            createUser(newUser,this.state.text,'placeholder')
            if(this.state.text.length < 3 || this.state.text.length > 13)
            {
              alert("Nickname must be 3-13 chars")
            }else {
              alert("NICK IS OK")
              createUser(newUser,this.state.text,'placeholder')
            }}}
            //this.setState({text: ''})
          value={(this.state && this.state.text) || ''}
        />
        <TouchableHighlight style={styles.confirm}
          onPress={() =>{
            if(this.state.text.length < 3 || this.state.text.length > 16)
            {
              alert("Groupname must be 3-16 chars")
            }else {
              createGroup(newGroup,this.state.text,'placeholder')
            }
          }}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>

          <Text style={{fontSize:20, color: '#eeeeee', paddingRight: 8,}}>Next</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.previous}
          onPress={() =>{

          }}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>

          <Text style={{fontSize:20, color: '#eeeeee', paddingRight: 8,}}>Previous</Text>
        </TouchableHighlight>

        <Text style={styles.bottomText}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur
          id elementum turpis, elementum convallis elit.
          Ut interdum porttitor consequat. Cras sagittis
          auctor libero sit amet viverra.
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
    backgroundColor: '#3498db',
    width: DEVICE_WIDTH,

  },
  textInput: {
      fontSize: 30,
      color: "#eeeeee",
      textAlign: 'center',
      margin: 10,
      height: 60,
      paddingLeft: 20,
      width: 100,
      borderWidth: 0,
      borderColor: "rgba(0,0,0,0.74)",
      width: DEVICE_WIDTH,
      textAlign: 'left',
      alignItems: 'center',

    },
    previous: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 10,
    },
    confirm: {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 10,
    },
    bottomText: {
      position: 'absolute',
      bottom: 0,
      textAlign: 'left',
      padding: 10,
      color: "#eeeeee",
    },
});

AppRegistry.registerComponent('social', () => social);
