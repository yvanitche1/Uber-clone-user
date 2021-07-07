import React from "react";
import { View, Text, Pressable } from "react-native";
import UberTypeRow from "../UberTypeRow";
import types from "../../assets/data/types";

const UberTypes = (props) => {
  const confirm = () => {
    console.log('confirm')
  };

  return (
    <View>
      {types.map(type => <UberTypeRow type={type} />)}

      <Pressable onPress={confirm} style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;




// import React from "react";
// import { View, Text, Pressable } from "react-native";
// import styles from './styles.js';
// import UberTypeRow from '../UberTypeRow';

// import typesData from '../../assets/data/types';

// const UberTypes = ({ typeState, onSubmit }) => {
//   const [selectedType, setSelectedType] = typeState;

//   return (
//     <View>
//       {typesData.map((type) => (
//         <UberTypeRow
//           type={type}
//           key={type.id}
//           isSelected={type.type === selectedType}
//           onPress={() => setSelectedType(type.type)}
//         />
//       ))}

//       <Pressable onPress={onSubmit} style={{
//         backgroundColor: 'black',
//         padding: 10,
//         margin: 10,
//         alignItems: 'center',
//       }}>
//         <Text style={{color: 'white', fontWeight: 'bold'}}>
//           Confirm Uber
//         </Text>
//       </Pressable>
//     </View>
//   );
// };

// export default UberTypes;
