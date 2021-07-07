import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import cars from "../../assets/data/cars";
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = (props) => {
  const origin = { latitude: 28.450627, longitude: -16.263045 };
  const destination = { latitude: 28.460627, longitude: -16.269045 };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI';

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

      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="blue"
      />
      <Marker
        coordinate={origin}
        title={'Origin'}
        description={Marker.description}
      />
      <Marker
        coordinate={destination}
        title={'Destination'}
        description={Marker.description}
      />

    </MapView>
  );
};

export default RouteMap;



// import React from "react";
// import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

// const GOOGLE_MAPS_APIKEY = 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ';

// const RouteMap = ({ origin, destination }) => {

//   const originLoc = {
//     latitude: origin.details.geometry.location.lat,
//     longitude: origin.details.geometry.location.lng,
//   };

//   const destinationLoc = {
//     latitude: destination.details.geometry.location.lat,
//     longitude: destination.details.geometry.location.lng,
//   };

//   return (
//     <MapView
//       style={{width: '100%', height: '100%'}}
//       provider={PROVIDER_GOOGLE}
//       showsUserLocation={true}
//       initialRegion={{
//         latitude: 28.450627,
//         longitude: -16.263045,
//         latitudeDelta: 0.0222,
//         longitudeDelta: 0.0121,
//       }}>
//       <MapViewDirections
//         origin={originLoc}
//         destination={destinationLoc}
//         apikey={GOOGLE_MAPS_APIKEY}
//         strokeWidth={5}
//         strokeColor="black"
//       />
//       <Marker
//         coordinate={origin}
//         title={'Origin'}
//       />
//       <Marker
//         coordinate={destination}
//         title={"Destination"}
//       />
//     </MapView>
//   );
// };

// export default RouteMap;
