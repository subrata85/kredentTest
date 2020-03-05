import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Splash extends React.Component {

    componentDidMount() {
        this.props.navigation.navigate("login")
    }
    render() {
        return (
            <View>
                <Text>Splash screen</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch)
}

export default Splash;