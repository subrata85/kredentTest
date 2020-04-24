import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  AsyncStorage,
  Image,
} from 'react-native';

import {ListItem, Left, Right, Button, Switch, Body} from 'native-base';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressLogout = () => {
    Alert.alert('LogOut confirmation', 'Do you want to log out?', [
      {text: 'No', onPress: () => (No = 'no')},
      {text: 'Yes', onPress: () => this.logOutRequest()},
    ]);
  };

  logOutRequest = () => {
    this.props.onClose();
    api.logout().then(d => {
      //AsyncStorage.clear();
      AsyncStorage.removeItem('userId');
      AsyncStorage.removeItem('firstName');
      AsyncStorage.removeItem('lastName');
      AsyncStorage.removeItem('email');
      AsyncStorage.removeItem('phoneNo');
      this.props.navigation.navigate('loginScreen');
    });
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
              <TouchableOpacity onPress={() => this.goToHome()}>
                <Text style={styles.text}>Home</Text>
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
