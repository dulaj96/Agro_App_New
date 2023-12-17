import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import COLORS from '../../../components/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {
  useGetCategoriesQuery,
  useLazyGetCropsQuery,
} from '../../../store/services/BackEndService';
import CategoryList from './components/CategoryList';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Crops = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState();

  const {data: categoriesData, isLoading} = useGetCategoriesQuery();
  const [getCrops, {data: crops, isLoading: loadingCrops}] =
    useLazyGetCropsQuery();
  console.log('loading', loadingCrops);

  useEffect(() => {
    // console.log('selected category changed', selectedCategory);
    console.log('length', categoriesData.length, selectedCategory);
    console.log('crops', crops?.data?.docs[0]);
    if (selectedCategory) {
      getCrops(selectedCategory);
    } else if (
      categoriesData?.data?.docs &&
      categoriesData?.data?.docs?.length > 0
    ) {
      getCrops(categoriesData?.data.docs[0]._id);
    }
  }, [categoriesData, getCrops, selectedCategory]);

  const cropsData = useMemo(() => {
    return crops?.data?.docs;
  }, [crops]);

  const Card = ({crop}) => {
    return (
      <View style={styles.card}>
        <View style={{alignItems: 'center', top: -10}}>
          <Image
            source={{
              uri: `https://storage.googleapis.com/staging.agro-project-396117.appspot.com/${crop.image}`,
            }}
            style={{height: 120, width: 120}}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.dark}}>
            {crop.name}
          </Text>
          <Text style={{fontSize: 11, color: COLORS.grey, marginTop: 2}}>
            {crop.botName}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailsScreen', {id: crop?._id})}
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.addToCardBtn}>
            <Icon name="ios-arrow-forward" size={20} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

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
            Crops Details
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

      <View style={{alignItems: 'center'}}>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <CategoryList
            data={categoriesData?.data?.docs}
            onSelect={setSelectedCategory}
          />
        )}
      </View>

      {loadingCrops ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={cropsData}
          renderItem={({item}) => <Card crop={item} />}
        />
      )}
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
  categoriesListContainer: {
    // flexDirection: 'row',
    // marginTop: 30,
    // marginBottom: 5,
    // justifyContent: 'space-between',
    // width: '85%',
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  categoryBtn: {
    height: 45,
    width: 140,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImg: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignContent: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 15,
    marginTop: 35,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCardBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Crops;
