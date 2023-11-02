import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import COLORS from '../../../components/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Store = () => {
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
            Agro Store
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Store')}
          style={{marginTop: 15}}>
          <MaterialIcons name="shopping-cart" size={28} color={COLORS.dark} />
        </TouchableOpacity>
      </View>

      <View
        style={{marginTop: 40, flexDirection: 'row', paddingHorizontal: 20}}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="search" size={28} color={COLORS.dark} />
          <TextInput
            style={{flex: 1, fontSize: 18, color: COLORS.dark}}
            placeholder="Search For Crops"
            placeholderTextColor="#a8a5a5"
          />
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name="tune" size={28} color={COLORS.white} />
        </View>
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
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    height: 50,
    width: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Store;
