import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import Feather from 'react-native-vector-icons/Feather';
  
  const CustomDrawer = props => {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{backgroundColor: '#8200d6'}}>
          <ImageBackground
            source={require('../assets/menu-bg.jpeg')}
            style={{padding: 30}}>
            <Image
              source={require('../assets/rashmika.jpg')}
              style={{width: 80, height: 80, borderRadius: 40, marginBottom: 10}}
            />
            <Text
              style={{color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium'}}>
              Rashmika Mandana
            </Text>
          </ImageBackground>
          <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Feather name="share-2" size={22} color={'#333'} />
              <Text style={{fontSize: 15, marginLeft: 8, color: '#333'}}>
                Tell a Friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Feather name="log-out" size={22} color={'#333'} />
              <Text style={{fontSize: 15, marginLeft: 8, color: '#333'}}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default CustomDrawer;