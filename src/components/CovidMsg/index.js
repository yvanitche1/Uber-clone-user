import React from "react";
import style from "./style";
import { View, Text } from "react-native";

const CovidMsg = (props) => {
    return (
        <View style={style.container}>
            <Text style={style.title}> Travel omline is necessary</Text>
            <Text style={style.text}> blablablablablabalnlabalna</Text>
            <Text style={style.learnmore}> Learn more</Text>
        </View>

    );
};

export default CovidMsg;