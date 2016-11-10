import NavigationBar from 'react-native-navbar'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Switch,
} from 'react-native';

export default class social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Press to edit',
    };
  }
  render() {
    return (
      <View style = {styles.container}>
        <NavigationBar
           title={{ title: 'Bio', tintColor: 'black', }}
           leftButton={{ title: 'Cancel', }}
           rightButton={{ title: 'Save', }}
           style={styles.navbar}
           statusBar={{ tintColor: "white", }}
         />
         <View style = {styles.body}>
            <View style = {styles.header}>
              <Text style = {{fontSize: 16, paddingLeft: 20, width: 300, color: 'grey'}}>Turn bio on/off</Text>
                <Switch
                value={(this.state && this.state.switchValue) || false}
                onValueChange={(value) => {
                  this.setState({switchValue: value})
                }}
                // Color props are iOS-only
                // thumbTintColor={'white'} // Removes shadow
                tintColor={"rgba(230,230,230,1)"}
                onTintColor={"rgba(68,219,94,1)"}/>
            </View>
           <TextInput
             value = {this.state.text}
             multiline = {true}
             numberOfLines = {10}
             onChangeText={(text) => this.setState({text})}
             editable = {true}
             maxLength = {250}
             style = {styles.textInput}
           />
         </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  navbar: {
    height: 70,
    backgroundColor: "#2ecc71",
  },
  body: {
    flex: 1/1.1,
  },
  header: {
    alignItems: 'center',
    flex: 1/8,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'black'
  },
  textInput: {
    paddingLeft: 10,
    color: 'grey',
    textAlign: 'left',
    fontSize: 18,
    flex: 1/1.1,
    borderBottomWidth: 3,
    borderColor: 'black',
  },
});

AppRegistry.registerComponent('social', () => social);
