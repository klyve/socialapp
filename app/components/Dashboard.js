import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as groups from '../actions/groups';
import styles from './styles/Dashboard';
import {
  MainHeader,
  Blocks,
  FriendBlock,
} from './modules';



class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
    }
  }

  gotoGroup(groupId) {
      Actions.groupdashboard(this.props.groups[groupId])
  }

  showNotifications() {
    Actions.notifications()
  }

  renderNotifications() {
    let notifications = 3;

    if(notifications <= 0)
      return false;

    return (
      <TouchableHighlight style={styles.notifications}
        onPress={() => this.showNotifications()}
      >
        <Text style={styles.notificationsText}>New Invites: {notifications}</Text>
      </TouchableHighlight>
    )
  }
  componentWillMount() {
    let { dispatch } = this.props
    dispatch(groups.getUserGroups());
  }

  render() {
    let showGroups;
    console.log(this.props.groups.length)
    if(this.props.groups.length > 0) {
       showGroups = this.props.groups.map((a,b) => {

        let itemstyles = (a.unread == 0) ? styles.noUnreadDot : styles.unreadDot;
        return (
          <FriendBlock
            onPress={() => {this.gotoGroup(b)}}
            image={a.image}
            name={a.name}
            unread={a.unread}
            key={b}
          />
        )
      })
    } else {
      showGroups = false;
    }
    return (
      <View style={styles.container}>
        {this.renderNotifications()}
        <ScrollView>
          <Blocks>
            {showGroups}
          </Blocks>
        </ScrollView>
      </View>
    );
  }
}


export default connect(state => ({
    groups: state.groups.groups
  })
)(Dashboard);
