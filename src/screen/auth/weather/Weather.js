import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import COLORS from '../../../components/Colors';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { debounce } from 'lodash';
import { fetchLocation, fetchWeatherForecast } from '../../../api/WeatherAPI';
import { weatherImages } from '../../../components/WeatherIndex';


const Weather = () => {
  const [showSearch, togleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});

  const handleLocation = (loc) => {
    console.log("Location", loc);
    setLocations([]);
    togleSearch(false);
    fetchWeatherForecast({
      cityName: loc.name,
      days: '7'
    }).then(data => {
      setWeather(data);
      console.log('got forecast', data);
    })
  }

  const handleSearch = value => {
    // console.log("Value", value);
    // fetch the location
    if (value.length > 2) {
      fetchLocation({ cityName: value }).then(data => {
        setLocations(data);
      })
    }
  }

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const { current, location } = weather;

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative', backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      {/* Search section */}
      <View style={styles.searchSection1}>
        <View style={[styles.searchSection2, { backgroundColor: showSearch ? COLORS.secondary : 'transparent' }]}>
          {
            showSearch ? (
              <TextInput
                onChangeText={handleTextDebounce}
                placeholder='Search City'
                placeholderTextColor={COLORS.dark}
                style={styles.textInput}
              />
            ) : null
          }
          <TouchableOpacity
            onPress={() => togleSearch(!showSearch)}
            style={{
              backgroundColor: COLORS.primary,
              padding: 5,
              margin: 3,
              borderRadius: 40
            }}>
            <Icon name='search' size={30} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        {
          locations.length > 0 && showSearch ? (
            <View style={{ position: 'absolute', width: '100%', borderRadius: 15, top: 62, backgroundColor: COLORS.primary }}>
              {
                locations.map((loc, index) => {
                  let showBorder = index + 1 != locations.length;
                  let borderClass = showBorder ? ' borderBottomWidth: 1, borderBottomColor: COLORS.bgGrey(0.3)' : '';
                  return (
                    <TouchableOpacity
                      onPress={() => handleLocation(loc)}
                      key={index}
                      style={[styles.searchLocatoin, borderClass]}
                    >
                      <Icon name='location-sharp' size={20} color={COLORS.dark} />
                      <Text style={{ color: 'black', marginLeft: 5 }}>{loc?.name}, {loc?.country}</Text>
                    </TouchableOpacity>
                  );
                })
              }
            </View>
          ) : null
        }
      </View>

      {/* forecast section */}
      <View style={styles.forecastView1}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
          {location?.name},
          <Text style={{ fontSize: 24, fontWeight: '500', color: 'gray' }}>{' ' + location?.country}</Text>
        </Text>

        {/* weather image */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, marginBottom: 30 }}>
          <Image
            source={weatherImages[current?.condition?.text]}
            style={{ width: 250, height: 250 }}
          />
        </View>

        {/* degree celcius */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>{current?.temp_c}&#176;</Text>
          <Text style={{ color: '#524f47', fontSize: 22, marginTop: 10 }}>{current?.condition?.text}</Text>
        </View>

        {/* other status */}
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Image
              source={require('../../../assets/weatherImages/icons/wind.png')}
              style={{ backgroundColor: 'black', width: 25, height: 25 }}
            />
            <Text style={{ color: 'black' }}>22km</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../../assets/weatherImages/icons/wind.png')}
              style={{ backgroundColor: 'black', width: 25, height: 25 }}
            />
            <Text style={{ color: 'black' }}>22km</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../../assets/weatherImages/icons/wind.png')}
              style={{ backgroundColor: 'black', width: 25, height: 25 }}
            />
            <Text style={{ color: 'black' }}>22km</Text>
          </View>
        </View> */}
      </View>

      {/* forecast for next days */}
      <View style={{ marginBottom: 20, marginLeft: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name='calendar' size={22} color='black' />
          <Text style={{ color: 'black', fontWeight: '500', marginLeft: 5 }}>Daily Forecast</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 5 }}>
          {
            weather?.forecast?.forecastday?.map((item, index) => {
              return (
              
                <View 
                key={index}
                style={{ justifyContent: 'center', alignItems: 'center', width: 90, backgroundColor: COLORS.secondary, borderRadius: 15, paddingVertical: 3 }}>
                  <Image
                    source={require('../../../assets/weatherImages/images/heavyrain.png')}
                    style={{ width: 80, height: 80 }}
                  />
                  <Text style={{ color: 'black' }}>{item.date}</Text>
                  <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>23&#176;</Text>
                </View>
              )
            })
          }

        </ScrollView>

      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  searchSection1: {
    paddingTop: 10,
    position: 'relative',
    zIndex: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  searchSection2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 40,
  },
  textInput: {
    flex: 1,
    marginLeft: 6,
  },
  searchLocatoin: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 10,
    paddingRigth: 10,
    marginBottom: 1,
  },
  forecastView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginBottom: 5

  }
})

export default Weather;