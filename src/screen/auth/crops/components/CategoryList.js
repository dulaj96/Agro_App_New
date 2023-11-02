import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import categories from '../../../../components/Categories';
import COLORS from '../../../../components/Colors';
import React, {useEffect, useState} from 'react';
import fruits from '../../../../components/Fruits';
import vegetables from '../../../../components/Vegetables';
import paddies from '../../../../components/Paddies';

const CategoryList = ({data = [], onSelect}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  useEffect(() => {
    onSelect(fruits);
  }, [onSelect]);

  const Select = index => {
    setSelectedCategoryIndex(index);
    if (index === 0) {
      console.log('fruits', fruits);
      onSelect(fruits);
    } else if (index === 1) {
      console.log('veg', vegetables);
      onSelect(vegetables);
    } else {
      console.log('paddies', paddies);
      onSelect(paddies);
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={category.id}
          activeOpacity={0.8}
          onPress={() => Select(index)}>
          <View
            style={[
              styles.categoryBtn,
              {
                backgroundColor:
                  selectedCategoryIndex === index
                    ? COLORS.primary
                    : COLORS.secondary,
              },
            ]}>
            <View style={styles.categoryBtnImg}>
              <Image
                source={category.image}
                style={{
                  height: 35,
                  width: 35,
                  resizeMode: 'cover',
                  borderRadius: 30,
                }}
              />
            </View>
            <Text
              style={{
                fontSizE: 15,
                fontWeight: 'bold',
                marginLeft: 10,
                color:
                  selectedCategoryIndex === index
                    ? COLORS.white
                    : COLORS.primary,
              }}>
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
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
});
