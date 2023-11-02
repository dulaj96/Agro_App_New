import {
    View,
    Text,
} from 'react-native';
import React from 'react';
import Splash from '../screen/splash/Splash';
import SignUp from '../screen/auth/SignUp';
import SignIn from '../screen/auth/SignIn';
import Home from '../screen/auth/Home';
// import Ex from '../screen/auth/Ex';
// import DrawerNavigation from './DrawerNavigation';
import Crops from '../screen/auth/crops/Crops';
import DetailsScreen from '../screen/auth/crops/DetailsScreen';
import BottomNavigator from './BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {GoogleSignin} from "@react-native-google-signin/google-signin";

const Stack = createNativeStackNavigator();

GoogleSignin.configure({
    scopes: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
    ],
    webClientId:
        '242008651431-id5j6t0bov2v1hh0p5op77jkn4m42j28.apps.googleusercontent.com',
    // 148267645714-aantr2crekp5pjokud80s426fb7lb7sg.apps.googleusercontent.com
    iosClientId:
        '14721902519-nknj9kivj4c5vf5qq1gc3sb97fchsm6g.apps.googleusercontent.com',
});

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" >
        <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        {/* <Stack.Screen options={{headerShown:false}} name="DrawerNavigation" component={DrawerNavigation} /> */}
        <Stack.Screen options={{headerShown:false}} name="Crops" component={Crops} />
        <Stack.Screen options={{headerShown:false}} name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen options={{headerShown:false}} name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
