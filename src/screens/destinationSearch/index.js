import React, { useState, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import style from './style';
import { GooglePlacesAutocomplete, GooglePlaceDetail, GooglePlaceData } from 'react-native-google-places-autocomplete';

const destinationSearch = (props) => {
    const [OriginPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        console.warn('useeffect is called');
        if (OriginPlace && destinationPlace) {
            console.warn('redirect to results');
        }
    }, [OriginPlace, destinationPlace]);

    return (
        <SafeAreaView>
            <View style={style.container}>
                {/* <TextInput
                    value={fromText}
                    onChangeText={setFromText}
                    style={style.textInput}
                    placeholder="De.." />

                <TextInput
                    value={destinationText}
                    onChangeText={setdestinationText}
                    style={style.textInput}
                    placeholder="Aller a?" /> */}

                <GooglePlacesAutocomplete
                    style={style.textInput}
                    placeholder="Where from?"
                    onPress={(data, details = null) => {
                        setOriginPlace({ data, details });
                        console.log(data, details);
                    }}
                    // enablePoweredByContainer={false}
                    // suppressDefaultStyles
                    // currentLocation={true}
                    // currentLocationLabel='Current location'
                    styles={{
                        textInput: style.textInput,
                        container: style.autocompleteContainer,
                        listView: style.listView,
                        separator: style.separator,
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI',
                        language: 'en',
                    }}
                //   renderRow={(data) => <PlaceRow data={data} />}
                //   renderDescription={(data) => data.description || data.vicinity}
                //   predefinedPlaces={[homePlace, workPlace]}
                />

                <GooglePlacesAutocomplete
                    placeholder='where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details });
                        console.log(data, details);
                    }}
                    styles={{
                        textInput: style.textInput,
                        container: style.autocompleteContainer,
                        listView: style.listView,
                        separator: style.separator,
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI',
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default destinationSearch;