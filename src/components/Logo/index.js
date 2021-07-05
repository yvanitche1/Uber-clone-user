import React from "react";
import { View, Text, Image } from "react-native";
import style from "./style";

const Logo = (props) => {
    return (
        <View style={style.container}>
            <Image source={{ https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png}} />
        </View>
            );
};

            export default Logo;