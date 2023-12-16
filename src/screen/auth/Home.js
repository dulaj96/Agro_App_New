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

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import COLORS from '../../components/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {RadioButton, Button} from 'react-native-paper';

const data = [
  {label: 'January', value: '1'},
  {label: 'February', value: '2'},
  {label: 'March', value: '3'},
  {label: 'April', value: '4'},
  {label: 'May', value: '5'},
  {label: 'June', value: '6'},
  {label: 'July', value: '7'},
  {label: 'August', value: '8'},
  {label: 'September', value: '9'},
  {label: 'Octomber', value: '10'},
  {label: 'November', value: '11'},
  {label: 'December', value: '12'},
];

const Home = ({navigation, route}) => {
  // const navigation = useNavigation();

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedValue, setSelectedValue] = useState(false);

  // const route = useRoute();
  const [pin, setPin] = useState(undefined);

  useEffect(() => {
    if (route.params) {
      setPin(route.params);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View style={styles.header}>
        <View>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome To...
          </Text>
          <Text
            style={{
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
            onPress={() => navigation.navigate('Store')}
            style={{marginTop: 15}}>
            <MaterialIcons name="shopping-cart" size={28} color={COLORS.dark} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('LocationScreen')}
          style={{marginTop: 15}}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: COLORS.primary,
              marginTop: 5,
            }}>
            Select Location
          </Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
          onPress={() => navigation.navigate('LocationScreen')}
          style={{
            elevation: 8,
            backgroundColor: '#009688',
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontWeight: 'bold',
              alignSelf: 'center',
              textTransform: 'uppercase',
            }}>
            Select Location
          </Text>
        </TouchableOpacity> */}

        {/* <Text
          style={{
            marginTop: 12,
            fontSize: 18,
            fontWeight: 'bold',
            color: COLORS.dark,
          }}>
          {pin
            ? `  * Location * -\nlatitude -> ${pin.latitude}\nlongitude -> ${pin.longitude}`
            : '  * Location * -\nn/a'}
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontSize: 18,
            fontWeight: 'bold',
            color: COLORS.dark,
          }}>
          {value
            ? `  * Starting Month * -\n${value}`
            : '  * Starting Month * -\nn/a'}
        </Text> */}

        {/* <Text>Selected Value: {selectedValue}</Text>
        <Text>Selected Value: {selectedValue ? 'aaa' : 'ss'}</Text> */}

        {/* <Button
          icon="map-marker"
          mode="contained"
          buttonColor="#009688"
          style={{
            paddingVertical: 4,
            borderRadius: 60,
            paddingHorizontal: 12,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate('LocationScreen')}>
          Select Location
        </Button> */}

        <View style={{marginTop: 8, paddingHorizontal: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#005E55',
            }}>
            Select crop type
          </Text>
          <RadioButton.Group
            style={{
              marginTop: 30,
            }}
            onValueChange={value => setSelectedValue(value)}
            value={selectedValue}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value={false} color="green" />
              <TouchableOpacity
                activeOpactity={1}
                onPress={() => {
                  setSelectedValue(false);
                }}>
                <Text style={styles.radioGroupItem}>Short Term</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value={true} color="green" />
              <TouchableOpacity
                activeOpactity={1}
                onPress={() => {
                  setSelectedValue(true);
                }}>
                <Text style={styles.radioGroupItem}>Long Term</Text>
              </TouchableOpacity>
            </View>
          </RadioButton.Group>
        </View>

        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Starting Month' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />

        <Button
          icon="map-marker"
          mode="contained"
          uppercase={true}
          buttonColor="#009688"
          style={{
            marginTop: 20,
          }}
          onPress={() => navigation.navigate('LocationScreen')}>
          Select Location
        </Button>

        <Button
          icon="crosshairs"
          mode="contained"
          uppercase={true}
          buttonColor="#002FCA"
          style={{
            marginTop: 20,
          }}
          onPress={() => {
            if (!value) {
              Alert.alert('Month', 'Please select starting month first', null, {
                cancelable: true,
              });
              return;
            }
            if (!pin) {
              Alert.alert('Location', 'Please select location first', null, {
                cancelable: true,
              });
              return;
            }
            navigation.navigate('SelectionsScreen', {
              inputs: {
                location: {
                  longitude: pin.longitude,
                  latitude: pin.latitude,
                },
                is_long_term: selectedValue,
                starting_month: value,
              },
            });
          }}>
          GET BEST CROPS
        </Button>
      </View>
    </SafeAreaView>
  );
};

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

    alignContent: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 12,
    marginHorizontal: 8,
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
  radioGroupItem: {
    fontSize: 16,
    color: COLORS.dark,
  },
});

export default Home;
