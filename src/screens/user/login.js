import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Container, Content, Item, Input, Toast, Form} from 'native-base';
import ToastMessage from '../../component/toastMessage/toastMessage';
import ButtonComponent from '../../component/button/button';

import {userLogin} from '../../reduxModules/actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'a@a.com',
      password: '1',
      disableForm: false,
      registeredUser: [],
    };
  }

  onLogin = () => {
    const {email, password, registeredUser} = this.state;
    const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (email === '' || regEmail.test(email) !== true) {
      ToastMessage({
        message: 'Enter Valid Email',
        type: 'warning',
      });
    } else if (password === '') {
      ToastMessage({
        message: 'Enter Valid Password',
        type: 'warning',
      });
    } else {
      let data = {
        email: email,
        password: password,
      };
      this.props.userLogin(data);
    }
  };

  clearState = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.userData.createdUser.length > 0) {
      this.setState({
        registeredUser: newProps.userData.createdUser,
      });
    }
    if (newProps.userData.loginSuccess.length > 0) {
      this.props.navigation.navigate('home');
    } else {
      ToastMessage({
        message: 'Please Registar First',
        type: 'warning',
      });
    }
  }

  render() {
    const {email, password, disableForm} = this.state;
    return (
      <Container>
        <View style={styles.headeView}>
          <Text style={styles.titleTxt}>Login</Text>
        </View>
        <Content padder style={styles.container}>
          <Item rounded style={styles.itemView}>
            <Input
              placeholder="Email Address"
              returnKeyType="go"
              keyboardType="email-address"
              value={email}
              autoCorrect={true}
              onChangeText={email => {
                this.setState({email: email});
              }}
              onSubmitEditing={() => {
                this.onPressLogin();
              }}
            />
          </Item>
          <Item rounded style={styles.itemView}>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              returnKeyType="go"
              value={password}
              onChangeText={password => {
                this.setState({password: password});
              }}
              onSubmitEditing={() => {
                this.onPressLogin();
              }}
            />
          </Item>
          <View style={styles.buttonView}>
            <View style={styles.buttonView}>
              <ButtonComponent
                text={'LOGIN'}
                btnAction={() => this.onLogin()}
                disableForm={disableForm}
              />
            </View>

            <View style={{alignItems: 'center', marginTop: 20}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('registration');
                }}>
                <Text>CREATE NEW ACCOUNT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userStore,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      userLogin,
    },
    dispatch,
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2fcff',
  },
  headeView: {alignItems: 'center', margin: 20},
  titleTxt: {fontSize: 20, fontWeight: 'bold'},
  itemView: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  buttonView: {
    marginTop: 20,
  },
  buttonStyle: {
    padding: 20,
    width: 350,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#2cc2ea',
  },
  singUpButton: {
    backgroundColor: '#4de9c9',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
