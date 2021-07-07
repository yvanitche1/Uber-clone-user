import React from "react";
import { View, Text, Image } from "react-native";
import style from "./style";
import Icon from 'react-native-vector-icons/FontAwesome'

const Logo = (props) => {
    return (
        <View style={style.container}>
            <Image source={require('../../assets/images/UberXL.jpeg')} style={{ height: 150, width: 280 }} />
            {/* <Icon name={"car"} size={150} /> */}
        </View>
    );
};

export default Logo;