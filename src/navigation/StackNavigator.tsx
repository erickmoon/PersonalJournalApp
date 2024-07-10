import React from 'react'; // Import React library
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer from React Navigation
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator from React Navigation
import LoginScreen from '../screens/LoginScreen'; // Import LoginScreen component
import RegisterScreen from '../screens/RegisterScreen'; // Import RegisterScreen component
import HomeScreen from '../screens/HomeScreen'; // Import HomeScreen component
import EntryScreen from '../screens/EntryScreen'; // Import EntryScreen component
import SettingsScreen from '../screens/SettingsScreen'; // Import SettingsScreen component

const Stack = createStackNavigator(); // Create a Stack navigator instance

const StackNavigator = () => {
  return (
    <NavigationContainer> {/* Container for navigation */}
      {/* Stack navigator with initial route set to Login */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} /> {/* Login screen component */}
        <Stack.Screen name="Register" component={RegisterScreen} /> {/* Register screen component */}
        <Stack.Screen name="Home" component={HomeScreen} /> {/* Home screen component */}
        <Stack.Screen name="Entry" component={EntryScreen} /> {/* Entry screen component */}
        <Stack.Screen name="Settings" component={SettingsScreen} /> {/* Settings screen component */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator; // Export StackNavigator component as default
