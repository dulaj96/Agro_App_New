import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../../../components/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({navigation, route}) => {
  //navigation use to go back crop screen and route use to get the fruit & vegetables details, it get using params and pass to item

  const item = route.params;

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{height: 250, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>

        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <MaterialIcons
                  name="favorite-border"
                  size={25}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.detailsText}>
             {item.information}
            </Text>
          </View>
        </View>
      </ScrollView>
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
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 20,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
    lineHeight: 22,
    textAlign: 'justify',
    marginBottom: 10,
  },
});

export default DetailsScreen;
