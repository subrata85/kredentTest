import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const ButtonComponent = props => {
  console.log('disableForm', props.disableForm);
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.btnAction()}>
      <Text style={styles.btnTxt}>{props.text}</Text>
      {props.disableForm ? (
        <ActivityIndicator size="small" color="#00ff00" />
      ) : null}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#2cc2ea',
  },
  btnTxt: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 5,
    fontWeight: 'bold',
  },
});
