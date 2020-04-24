import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Container, Content, Item, Label, Input, Toast, Icon} from 'native-base';
import ToastMessage from '../../component/toastMessage/toastMessage';
import ButtonComponent from '../../component/button/button';

import {createUser, resetUserMessage} from '../../reduxModules/actions/index';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'a',
      lastName: 'a',
      email: 'a@a.com',
      phoneNo: '1',
      password: '1',
      confirmPassword: '1',
      disableForm: false,
    };
  }

  clearState = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: '',
      password: '',
      confirmPassword: '',
      disableForm: true,
    });
  };

  onPressCreateUser = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNo,
      password,
      confirmPassword,
    } = this.state;
    const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (firstName === '') {
      ToastMessage({
        message: 'Enter First Name',
        type: 'warning',
      });
    } else if (lastName === '') {
      ToastMessage({
        message: 'Enter Last Name',
        type: 'warning',
      });
    } else if (email === '' || regEmail.test(email) !== true) {
      ToastMessage({
        message: 'Enter a Valid Email',
        type: 'warning',
      });
    } else if (password === '') {
      ToastMessage({message: 'Enter your password', type: 'warning'});
    } else if (password !== confirmPassword) {
      ToastMessage({
        message: 'Your password and confirmation password do not match',
        type: 'warning',
      });
    } else {
      this.setState({disableForm: true});
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phoneNo,
        password: password,
      };
      this.props.createUser(data);
    }
  };

  // componentDidUpdate(prevProps){
  //   if ( prevProps.country !== this.props.country.length ) {
  //     doSomething(); //example calling redux action
  //   }
  // }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.userData.messageType) {
      ToastMessage({
        message: newProps.userData.message,
        type: newProps.userData.messageType,
      });
      this.props.resetUserMessage();
      this.props.navigation.replace('login');
    }
    this.setState({
      disableForm: false,
    });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      phoneNo,
      password,
      confirmPassword,
      disableForm,
    } = this.state;
    return (
      <Container style={{backgroundColor: '#f2fcff'}}>
        <View style={styles.headeView}>
          <Text style={styles.titleTxt}>Create user</Text>
        </View>
        <Content padder style={styles.container}>
          <View pointerEvents={disableForm ? 'none' : 'auto'}>
            <Item rounded style={styles.itemView}>
              <Input
                placeholder="First Name"
                returnKeyType="next"
                value={firstName}
                autoCorrect={true}
                onChangeText={firstName => {
                  this.setState({firstName: firstName});
                }}
                autoFocus={true}
              />
            </Item>

            <Item rounded style={styles.itemView}>
              <Input
                placeholder="Last Name"
                returnKeyType="next"
                value={lastName}
                //ref={lastName => (this.lastName = lastName)}
                onChangeText={lastName => {
                  this.setState({lastName: lastName});
                }}
              />
            </Item>

            <Item rounded style={styles.itemView}>
              <Input
                placeholder="Email Address"
                returnKeyType="next"
                keyboardType="email-address"
                value={email}
                onChangeText={email => {
                  this.setState({email: email});
                }}
              />
            </Item>

            <Item rounded style={styles.itemView}>
              <Input
                placeholder="Phone Number"
                returnKeyType="next"
                keyboardType="numeric"
                value={phoneNo}
                onChangeText={phoneNo => {
                  this.setState({phoneNo: phoneNo});
                }}
              />
            </Item>

            <Item rounded style={styles.itemView}>
              <Input
                placeholder="Password"
                returnKeyType="next"
                secureTextEntry={true}
                value={password}
                onChangeText={password => {
                  this.setState({password: password});
                }}
              />
            </Item>

            <Item rounded style={styles.itemView}>
              <Input
                placeholder="Confirm Password"
                returnKeyType="done"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={confirmPassword => {
                  this.setState({confirmPassword: confirmPassword});
                }}
                onSubmitEditing={() => {
                  this.onPressCreateUser();
                }}
              />
            </Item>
            <View style={styles.buttonView}>
              <ButtonComponent
                text={'CREATE USER'}
                btnAction={this.onPressCreateUser}
                disableForm={disableForm}
              />
            </View>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('login');
                }}>
                <Text>Login</Text>
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
      createUser,
      resetUserMessage,
    },
    dispatch,
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2fcff',
    marginBottom: 20,
  },
  headeView: {alignItems: 'center', margin: 20},
  titleTxt: {fontSize: 20, fontWeight: 'bold'},
  itemView: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    padding: 5,
  },
  buttonView: {
    marginTop: 20,
  },
  createButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#2cc2ea',
    width: 350,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
