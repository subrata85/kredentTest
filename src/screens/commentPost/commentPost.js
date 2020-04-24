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

class CommentPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {email, password, disableForm} = this.state;
    console.log('registeredUser', this.state.registeredUser);
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

          <View style={styles.buttonView}>
            <ButtonComponent
              text={'LOGIN'}
              btnAction={() => this.onLogin()}
              disableForm={disableForm}
            />
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
  return bindActionCreators({}, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentPost);

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
