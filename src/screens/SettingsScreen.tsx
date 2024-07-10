// src/screens/SettingsScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../slices/authSlice';

// Define the SettingsScreen component
const SettingsScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  
  // Get username from Redux state
  const username = useSelector((state: RootState) => state.auth.username);

  // State variables to hold new username and password
  const [newUsername, setNewUsername] = useState(username);
  const [newPassword, setNewPassword] = useState('');

  // Function to handle update button press
  const handleUpdate = () => {
    // Replace with your backend update API call
    console.log('Username:', newUsername, 'Password:', newPassword);
    
    // Dispatch action to update username in the state if needed
    navigation.navigate('Home');
  };

  // Function to handle logout button press
  const handleLogout = () => {
    // Dispatch logout action to clear user authentication state
    dispatch(logout());
    
    // Navigate to the Login screen after logout
    navigation.navigate('Login');
  };

  return (
    // Main container view for the settings screen
    <View style={styles.container}>
      {/* Title text for the settings screen */}
      <Text style={styles.title}>Settings</Text>
      
      {/* TextInput for entering new username */}
      <TextInput
        style={styles.input}
        placeholder="New Username"
        value={newUsername}
        onChangeText={setNewUsername}
      />
      
      {/* TextInput for entering new password */}
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry // Hides the entered text for password security
      />
      
      {/* Button to trigger the update process */}
      <Button title="Update" onPress={handleUpdate} />
      
      {/* Button to logout the user */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

// Styles for the SettingsScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default SettingsScreen;
