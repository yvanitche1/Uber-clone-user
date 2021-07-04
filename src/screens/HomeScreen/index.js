import React from "react";
import HomeMap from "../../components/HomeMap";
import CovidMsg from "../../components/CovidMsg";
import HomeSearch from "../../components/HomeSearch";
import { View, Text } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <HomeMap />
            {/*covid message*/}
            <CovidMsg />
            {/*bottom component*/}
            <HomeSearch />
        </View>
    );
};

export default HomeScreen;