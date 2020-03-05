import React from "react";
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from "react-native";
import { Toast } from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//import action
import { userLogin } from "../../reduxModules/actions/index"


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isChecked: false,
            disableForm: false
        }
    }

    onLogin = () => {
        let data = {
            email: "email",
            password: "password"
        }
        this.props.userLogin(data);


    }

    render() {
        const { email, password, isChecked, disableForm } = this.state;
        return (
            <View style={styles.mainView} pointerEvents={disableForm ? 'none' : 'auto'}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <ScrollView keyboardShouldPersistTaps={"always"}>
                    <TouchableOpacity style={styles.btnLogin} onPress={() => this.onLogin()}>
                        <Text style={styles.btnTxtLogin}>Login</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // messageType: state.userStore.messageType,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userLogin
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    mainView: { marginHorizontal: 10, marginTop: 50 },

    txtColor: { color: "#E4801D" },


    btnLogin: { backgroundColor: "#E4801D", padding: 20, marginTop: 25, alignItems: "center", justifyContent: "center" },
    btnTxtLogin: { color: "#ffffff", fontSize: 18, fontWeight: "bold" },


})