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

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: '',
      password: '',
      confirmPassword: '',
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
    });
  };

  //   handelTextInput = (name, value) =>{
  // this.setState({
  //     [name]:value
  // })
  //   }

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
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phoneNo,
      password,
      confirmPassword,
    } = this.state;
    return (
      <Container style={{backgroundColor: '#f2fcff'}}>
        <View style={styles.headeView}>
          <Text style={styles.titleTxt}>Create user</Text>
        </View>
        <Content padder style={styles.container}>
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
            <TouchableOpacity
              style={styles.createButton}
              onPress={() => this.onPressCreateUser()}>
              <Text style={styles.buttonText}>CREATE USER</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

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
    alignItems: 'center',
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

const mapStateToProps = state => {
  return {
    // messageType: state.userStore.messageType,
    // message: state.userStore.message
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // resetMessage,
      //createUserAccount
    },
    dispatch,
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
