// src/screens/RegisterScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Define the RegisterScreen component
const RegisterScreen = ({ navigation }: { navigation: any }) => {
  // State variables to hold username, email, and password
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle registration button press
  const handleRegister = () => {
    // Replace with your backend register API call
    // For example, call an API to register the user with the entered details
    // After successful registration, navigate to the Login screen
    navigation.navigate('Login');
  };

  return (
    // Main container view for the register screen
    <View style={styles.container}>
      {/* Title text for the register screen */}
      <Text style={styles.title}>Register</Text>
      
      {/* TextInput for entering username */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      
      {/* TextInput for entering email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      
      {/* TextInput for entering password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Hides the entered text for password security
      />
      
      {/* Button to trigger the registration process */}
      <Button title="Register" onPress={handleRegister} />
      
      {/* Button to navigate to the Login screen if user already has an account */}
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

// Styles for the RegisterScreen component
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

export default RegisterScreen;
