import React from "react";
import { View, Text } from "react-native";
import style from "../HomeSearch/style";


import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { BackgroundColor } from "chalk";

const HomeSearch = (props) => {
    return (
        <View>
            {/*input box*/}
            <View style={style.inputBox}>
                <Text style={style.inputText}>Aller a</Text>
                <View style={style.timeContainer}>
                    <Icon name={"chrome"} size={16} color={'#535353'} />
                    <Text>Now</Text>
                    <MaterialIcons name={"keyboard-arrow-down"} size={16} />
                </View>
            </View>

            {/*previous destination*/}
            <View style={style.row}>
                <View style={style.iconContainer}>
                    <Icon name={"chrome"} size={16} color={'#ffffff'} />
                </View>
                <Text style={style.destinationText}>Spin night club</Text>
            </View>

            {/*home destination*/}
            <View style={style.row}>
                <View style={[style.iconContainer, { BackgroundColor: '#218cff' }]}>
                    <Entypo name={"home"} size={20} color={'#ffffff'} />
                </View>
                <Text style={style.destinationText}>Home</Text>
            </View>

        </View>
    );
};

export default HomeSearch;