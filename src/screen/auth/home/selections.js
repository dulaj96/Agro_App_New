import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import COLORS from '../../../components/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useGetSelectionsQuery} from '../../../store/services/BackEndService';
import {Button, ActivityIndicator} from 'react-native-paper';

const SelectionsScreen = ({navigation, route}) => {
  const {inputs} = route.params;
  const {data, isLoading, isError, error} = useGetSelectionsQuery(inputs);

  const selectionData = useMemo(() => {
    return data?.data;
  }, [data]);

  const {properties, count, zone, crops} = selectionData || {};

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
          Best Crops
        </Text>
      </View>

      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator animating={true} size="large" />
        </View>
      ) : isError ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.black}}>
            Error Occured
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.red}}>
            {error?.data?.details?.message}
          </Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: COLORS.dark}}>
              Select Location data
            </Text>

            <Text>{properties?.zone}</Text>
            <Text>{properties?.climatic_zone}</Text>
            <Text>{properties?.terrain}</Text>
            <Text>{properties?.major_soil}</Text>
            <Text>{properties?.land_use}</Text>
            <Text>{properties?.anualrfmm}</Text>
            <Text>{properties?.['st_area(shape)']}</Text>
            <Text>{properties?.['st_length(shape)']}</Text>
            <Text>{count}</Text>

            <Text>aaa</Text>

            <Text>{zone}</Text>
            <Text>{crops}</Text>

            <Button
              icon="map-marker"
              mode="contained"
              uppercase={true}
              buttonColor="#009688"
              style={{
                marginTop: 20,
              }}
              onPress={() => {
                Alert.alert('Data', 'Data = ' + JSON.stringify(data), null, {
                  cancelable: true,
                });
              }}>
              See the crop list
            </Button>
          </View>
        </ScrollView>
      )}
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

  container: {
    flex: 1,
    // display: 'flex',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
});

export default SelectionsScreen;
