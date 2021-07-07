import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import cars from "../../assets/data/cars";

const HomeMap = (props) => {
    const getImage = (type) => {
        if (type === 'Classic1') {
            return require('../../assets/images/top-Classic1.png');
        }
        if (type === 'VIP') {
            return require('../../assets/images/top-VIP.png');
        }
        return require('../../assets/images/top-Classic2.png');
    }

    return (
        <MapView
            style={{ height: '100%', width: '100%' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                // latitude: 3.87,
                // longitude: 11.52,
                // latitudeDelta: 0.0922,
                // longitudeDelta: 0.0421,

                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,

            }}>

            {cars.map((car) => (
                <Marker
                    key={car.id}
                    coordinate={{ latitude: car.latitude, longitude: car.longitude }}
                >
                    <Image
                        style={{ width: 80, height: 80, resizeMode: 'contain' }}
                        source={getImage(car.type)} />

                </Marker>
            ))}

            {/* <FlatList
                data={cars}
                renderItem={({ item }) => {
                    <Marker
                        coordinate={{ latitude: item.latitude, longitude: item.longitude }}
                    >
                        <Image
                            style={{ width: 80, height: 80, resizeMode: 'contain' }}
                            source={getImage(item.type)} />

                    </Marker>
                }}
            /> */}

        </MapView>
    );
};

export default HomeMap;