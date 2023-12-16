import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../../components/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Button} from 'react-native-paper';

const LocationScreen = ({navigation, route}) => {
  const [pin, setPin] = useState({
    latitude: 6.913829092828117,
    longitude: 79.86725941300392,
    latitudeDelta: 0.9522,
    longitudeDelta: 3.6221,
  });

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
          Select Location
        </Text>
      </View>

      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={pin}>
          <Marker
            draggable
            coordinate={pin}
            onDragEnd={e => {
              setPin(e.nativeEvent.coordinate);
            }}
          />
        </MapView>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Button
            icon="map-marker"
            mode="contained"
            uppercase={true}
            buttonColor="#009688"
            style={{
              marginVertical: 32,
              marginHorizontal: 32,
            }}
            onPress={() => navigation.navigate('Home', pin, true)}>
            Select This Location
          </Button>
        </View>
      </View>
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
