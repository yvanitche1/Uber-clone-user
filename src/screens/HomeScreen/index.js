import React from "react";
import HomeMap from "../../components/HomeMap";
import CovidMsg from "../../components/CovidMsg";
import HomeSearch from "../../components/HomeSearch";
import { View, Text, Dimensions } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <View style={{ height: Dimensions.get('window').height - 300 }}>
                <HomeMap />
            </View>
            {/*covid message*/}
            <CovidMsg />
            {/*bottom component*/}
            <HomeSearch />
        </View>
    );
};

export default HomeScreen;