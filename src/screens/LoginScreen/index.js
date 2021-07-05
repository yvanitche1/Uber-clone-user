import React from "react";
import Login from "../../components/Login";
import Logo from '../../components/Logo'
import { View, Text } from "react-native";
import style from "./style";

const LoginScreen = (props) => {
    return (
        <View style={style.container}>
            <View>
                <Logo />
            </View>
            <View>
                <Login />
            </View>
        </View>
    );
};

export default LoginScreen;