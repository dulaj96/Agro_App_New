import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import COLORS from '../../../components/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useGetCropQuery} from '../../../store/services/BackEndService';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const LocationScreen = ({navigation, route}) => {
  //navigation use to go back crop screen and route use to get the fruit & vegetables details, it get using params and pass to item

  //   const {id} = route.params;
  //   const {data, isLoading} = useGetCropQuery(id);

  //   const item = useMemo(() => {
  //     return data?.data;
  //   }, [data]);

  const [pin, setPin] = useState({
    latitude: 6.913829092828117,
    longitude: 79.86725941300392,
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421,
    latitudeDelta: 0.9522,
    longitudeDelta: 3.6221,
  });
  //   const tokyoRegion = {
  //     latitude: 37.78825,
  //     longitude: -122.4324,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   };

  //   const [pin, setPin] = useState({
  //     latitude: 37.785841354212224,
  //     longitude: -122.43005711585283,
  //   });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={28}
          color={COLORS.dark}
          onPress={navigation.goBack}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.dark}}>
          Details
        </Text>
      </View>

      <View style={styles.container}>
        <MapView
          style={styles.map}
          //specify our coordinates.
          initialRegion={pin}>
          <Marker
            draggable
            coordinate={pin}
            onDragEnd={e => {
              console.log(e.nativeEvent.coordinate);
              setPin(e.nativeEvent.coordinate);
            }}
          />
        </MapView>
        {/* <Button
          onPress={() => Alert.alert('Button pressed')}
          title="Get"
          color="#841584"
        /> */}
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate({
            //   name: 'Home',
            //   data: 'aaaaaa',
            //   merge: true,
            // });
            navigation.navigate('Home', pin, true);
          }}
          style={{
            elevation: 8,
            backgroundColor: '#009688',
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12,
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
        </TouchableOpacity>
      </View>

      {/* <View style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={28}
          color={COLORS.dark}
          onPress={navigation.goBack}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.dark}}>
          Location
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              location
            </Text>
          </View>
        </View>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: COLORS.primary}}>
          location map
        </Text>

        <MapView
          style={styles.map}
          //specify our coordinates.
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  map: {
    flex: 1,
  },
  container: {
    flex: 1,
    // display: 'flex',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
});

export default LocationScreen;
