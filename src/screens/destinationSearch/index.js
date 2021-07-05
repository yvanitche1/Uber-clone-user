import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import style from './style';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const destinationSearch = (props) => {
    const [fromText, setFromText] = useState('');
    const [destinationText, setdestinationText] = useState('');
    return (
        <SafeAreaView>
            <View style={style.container}>
                <TextInput
                    value={fromText}
                    onChangeText={setFromText}
                    style={style.textInput}
                    placeholder="De.." />
                <TextInput
                    value={destinationText}
                    onChangeText={setdestinationText}
                    style={style.textInput}
                    placeholder="Aller a?" />

                <GooglePlacesAutocomplete
                    placeholder='Search'

                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        Key: "AIzaSyAOQWitO0Xq85ynVfFsyZaLBDjrIqNBkbQ",
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default destinationSearch;