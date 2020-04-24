import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  Image,
} from 'react-native';
import {Header, Left, Icon, Right, Body, Title, Item, Input} from 'native-base';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
    };
  }

  onPressBack = () => {
    this.props.navigation.goBack();
  };

  toggleSearch = () => {
    let name = '';
    this.setState({
      search: !this.state.search,
    });
    this.props.searchData(name);
  };

  render() {
    return (
      <Header style={{backgroundColor: '#0073bb'}}>
        <Left>
          <TouchableOpacity
            transparent
            onPress={() => this.props.openDrawer()}
            style={{paddingTop: 7, paddingBottom: 7, paddingRight: 20}}>
            <Icon name="menu" style={{color: '#ffffff'}} />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  viewTotalItemStyle: {
    flexDirection: 'row',
  },
  searchBox: {
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    height: 40,
    width: 100,
  },
});

export default HeaderComponent;
