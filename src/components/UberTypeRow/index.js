import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const UberTypeRow = (props) => {

  console.log(props);
  const { type } = props;

  const getImage = () => {
    if (type.type === 'Classic1') {
      return require('../../assets/images/Classic1.jpeg');
    }
    if (type.type === 'VIP') {
      return require('../../assets/images/VIP.jpeg');
    }
    return require('../../assets/images/Classic2.jpeg');
  }

  return (
    <View style={styles.container}>

      {/* image */}
      <Image
        style={styles.image}
        source={getImage()}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name={'person'} size={16} />
          3
        </Text>
        <Text style={styles.time}>
          8:03PM drop off
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>
          {type.price} FCFA
        </Text>
      </View>
    </View>
  );
};

export default UberTypeRow;


// import React from "react";
// import { View, Image, Text, Pressable } from "react-native";
// import styles from './styles.js';

// import Ionicons from "react-native-vector-icons/Ionicons";

// const UberTypeRow = (props) => {
//   const {type, onPress, isSelected} = props;

//   const getImage = () => {
//     if (type.type === 'UberX') {
//       return require('../../assets/images/UberX.jpeg');
//     }
//     if (type.type === 'Comfort') {
//       return require('../../assets/images/Comfort.jpeg');
//     }
//     return require('../../assets/images/UberXL.jpeg');
//   }

//   return (
//     <Pressable
//       onPress={onPress}
//       style={[styles.container, {
//         backgroundColor: isSelected ? '#efefef' : 'white',
//       }]}
//     >

//       {/*  Image */}
//       <Image
//         style={styles.image}
//         source={getImage()}
//       />

//       <View style={styles.middleContainer}>
//         <Text style={styles.type}>
//           {type.type}{' '}
//           <Ionicons name={'person'} size={16} />
//           3
//         </Text>
//         <Text style={styles.time}>
//           8:03PM drop off
//         </Text>
//       </View>
//       <View style={styles.rightContainer}>
//         <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
//         <Text style={styles.price}>est. ${type.price}</Text>
//       </View>
//     </Pressable>
//   );
// };

// export default UberTypeRow;
