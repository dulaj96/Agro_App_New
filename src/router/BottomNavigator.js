import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/auth/Home';
import Crops from '../screen/auth/crops/Crops';
import Weather from '../screen/auth/weather/Weather';
import Store from '../screen/auth/store/Store';
import Profile from '../screen/auth/profile/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../components/Colors';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: 48,
          borderTopWidth: 1,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.primary
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="Crops"
        component={Crops}
        options={{
          tabBarIcon: ({color}) => <FontAwesome name="pagelines" size={23} color={color} />,
        }}
      />
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="rainy" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -20,
                elevation: 5
              }}>
              <Icon name="search" size={23} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="shopping-cart" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <Icon name="person" size={23} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
