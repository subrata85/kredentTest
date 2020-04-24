import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import {ListItem, Left, Body} from 'native-base';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressLogout = () => {
    Alert.alert('Logout', 'Do you want to logout ?', [
      {text: 'No', onPress: () => false},
      {text: 'Yes', onPress: () => this.logOutRequest()},
    ]);
    return true;
  };

  logOutRequest = () => {
    this.props.navigation.navigate('login');
  };

  navigateToPage = pageName => {
    this.props.navigation.navigate(pageName);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuView}>
          <Text style={styles.menuText}>Menu</Text>
        </View>
        <ScrollView style={styles.ListStyle}>
          <ListItem icon style={styles.ListStyle}>
            <Left />
            <Body>
              <TouchableOpacity onPress={() => this.navigateToPage('profile')}>
                <Text style={styles.text}>Profile</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
          <ListItem icon style={styles.ListStyle}>
            <Left />
            <Body>
              <TouchableOpacity
                onPress={() => this.navigateToPage('commentPost')}>
                <Text style={styles.text}>Comment & Post</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
          <ListItem icon style={styles.ListStyle}>
            <Left />
            <Body>
              <TouchableOpacity onPress={() => this.onPressLogout()}>
                <Text style={styles.text}>Logout</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  menuView: {
    backgroundColor: '#28b2d7',
    // alignItems: "center"
  },
  menuText: {
    color: '#ffffff',
    fontSize: 20,
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 50,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  ListStyle: {
    marginTop: 20,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  iconStyle: {
    color: '#2D8C78',
    fontSize: 20,
    //backgroundColor:"red",
    width: 30,
  },
});

export default SideMenu;
