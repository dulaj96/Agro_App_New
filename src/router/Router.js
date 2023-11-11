import React from 'react';
import Splash from '../screen/splash/Splash';
import SignUp from '../screen/auth/SignUp';
import SignIn from '../screen/auth/SignIn';
import DetailsScreen from '../screen/auth/crops/DetailsScreen';
import BottomNavigator from './BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

GoogleSignin.configure({
  scopes: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ],
  webClientId:
    '148267645714-5iq43m9ekje8vh7u80jf545448d4gko8.apps.googleusercontent.com',
  iosClientId:
    '14721902519-nknj9kivj4c5vf5qq1gc3sb97fchsm6g.apps.googleusercontent.com',
});

const Router = () => {
  const auth = useSelector(state => state.auth.auth);
  const {token} = auth;
  console.log('token', token);

  const authRoutes = () => {
    return (
      <Stack.Group>
        {/*<Stack.Screen*/}
        {/*  options={{headerShown: false}}*/}
        {/*  name="Home"*/}
        {/*  component={Home}*/}
        {/*/>*/}
        {/* <Stack.Screen options={{headerShown:false}} name="DrawerNavigation" component={DrawerNavigation} /> */}
        {/*<Stack.Screen*/}
        {/*  options={{headerShown: false}}*/}
        {/*  name="Crops"*/}
        {/*  component={Crops}*/}
        {/*/>*/}
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomNavigator"
          component={BottomNavigator}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DetailsScreen"
          component={DetailsScreen}
        />
      </Stack.Group>
    );
  };

  const loginRoutes = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignIn}
        />
      </Stack.Group>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {token ? authRoutes() : loginRoutes()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
