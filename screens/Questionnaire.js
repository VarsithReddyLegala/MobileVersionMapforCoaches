import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default function ResumeQuestionnaire({ navigation }) { // Accept navigation prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple validation for admin login
    if (email === 'admin' && password === 'admin@123') {
      console.log('Login successful');
      navigation.navigate('Question');
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/ss1.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Login Button */}
        <Button title="Login" onPress={handleLogin} />

        {/* Optional: Add a link for registration */}
        <View style={styles.registerContainer}>
          <Text>Don't have an account?</Text>
          <Text style={styles.registerLink} onPress={() => console.log('Navigate to registration screen')}>
            Register here
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  registerContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  registerLink: {
    color: '#0066cc',
    marginLeft: 5,
  },
});
