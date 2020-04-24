import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content, Drawer} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SideMenu from '../../component/sideMenu/sideMenu';
import HeaderComponent from '../../component/header/header';
import ButtonComponent from '../../component/button/button';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUser: [],
    };
  }

  componentDidMount() {
    if (this.props.userData.loginSuccess.length > 0) {
      this.setState({
        loginUser: this.props.userData.loginSuccess,
      });
    }
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    console.log('state loginUser', this.state.loginUser);
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <SideMenu
            navigation={this.props.navigation}
            onClose={this.closeDrawer}
          />
        }
        onClose={() => this.closeDrawer()}>
        <Container style={{backgroundColor: '#f2fcff'}}>
          <HeaderComponent
            title="Profile"
            navigation={this.props.navigation}
            openDrawer={this.openDrawer}
            onClose={this.closeDrawer}
          />
          <Content padder style={styles.container}>
            {this.state.loginUser.length > 0 ? (
              <View>
                <Text style={styles.userContentText}>
                  First Name : <Text>{this.state.loginUser[0].firstName}</Text>
                </Text>
                <Text style={styles.userContentText}>
                  Last Name : <Text>{this.state.loginUser[0].lastName}</Text>
                </Text>
                <Text style={styles.userContentText}>
                  Email : <Text>{this.state.loginUser[0].email}</Text>
                </Text>
              </View>
            ) : (
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  No User found
                </Text>
              </View>
            )}
            <View style={styles.ViewStyle}>
              <ButtonComponent text={'EDIT PROFILE'} />
            </View>
          </Content>
        </Container>
      </Drawer>
    );
  }
}
const mapStateToProps = state => {
  return {
    userData: state.userStore,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2fcff',
    marginBottom: 20,
  },
  imageStyle: {
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  totalView: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#e6f2ff',
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  ViewStyle: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  userContentText: {
    marginLeft: 30,
    color: '#1ab2ff',
    fontSize: 18,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#2cc2ea',
    padding: 15,
    width: 340,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  },
});
