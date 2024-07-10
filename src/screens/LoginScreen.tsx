import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux for dispatching actions
import { login } from '../slices/authSlice'; // Importing login action from authSlice

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState(''); // State for storing email input
  const [password, setPassword] = useState(''); // State for storing password input
  const dispatch = useDispatch(); // Initializing useDispatch hook for dispatching actions

  const handleLogin = () => {
    // Replace with your backend login API call
    dispatch(login('fakeToken')); // Dispatching login action with a fake token (replace with actual login logic)
    navigation.navigate('Home'); // Navigating to Home screen after successful login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail} // Updating email state on text input change
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword} // Updating password state on text input change
        secureTextEntry // Hides text input characters for password field
      />
      <Button title="Login" onPress={handleLogin} /> {/* Button to trigger handleLogin function */}
      <Button
        title="Don't have an account? Register"
        onPress={() => navigation.navigate('Register')} // Navigates to Register screen on button press
      />
    </View>
  );
};

// Styles for LoginScreen component
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

export default LoginScreen; // Exporting LoginScreen component as default
