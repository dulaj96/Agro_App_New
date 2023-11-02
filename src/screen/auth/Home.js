// import {View, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';

// const Home = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <StatusBar backgroundColor="#009387" barStyle='light-content' />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.openDrawer()}>
//         <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>
//           Drawer
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Crops')}>
//         <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>
//           Crops
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 10,
//     backgroundColor: '#3262a8',
//     padding: 15,
//     width: 150,
//     margin: 5,
//   },
// });

// export default Home;

import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import COLORS from '../../components/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];


const Home = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.dark }}>
            Welcome To...
          </Text>
          <Text style={{
            fontSize: 38,
            fontWeight: 'bold',
            color: COLORS.primary,
            marginTop: 5,
          }}>
            Agro Searching
          </Text>
        </View>
        <View>
          <TouchableOpacity 
          onPress={() => navigation.navigate("Store")}
          style={{marginTop: 15}}
          >
          <MaterialIcons name="shopping-cart" size={28} color={COLORS.dark} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})

export default Home;
