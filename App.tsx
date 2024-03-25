import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LoginPage from './components/Login/LoginScreen';
import SignupPage from './components/SignUp/SignUpScreen';
import GrandmaPage from './components/Grandmas/GrandmaScreen';
import LandPage from './components/Landing/LandingScreen';
import AddPage from './components/AddMembers/AddPpl';
import CallPg from './components/Call/CallPage';

// Define the type for the navigation object
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Grandma: undefined;
  Landpage: undefined;
  Addmembers: undefined;
  Callpagess: undefined;
};

// Define the type for the navigation prop in LoginPage
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen
          name="Grandma"
          component={GrandmaPage}
          options={{ headerShown: false }} // Hide the header
        />
         <Stack.Screen
          name="Landpage"
          component={LandPage}
          options={{ headerShown: false }} // Hide the header
        />
         <Stack.Screen
          name="Addmembers"
          component={AddPage}
          options={{ headerShown: false }} // Hide the header
        />
         <Stack.Screen
          name="Callpagess"
          component={CallPg}
          options={{ headerShown: false }} // Hide the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
