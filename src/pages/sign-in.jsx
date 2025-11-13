import { createStaticNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
//dimport HomePage from './src/pages/home' ; 
export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onConfirm = () => {
    // 로그인 처리 로직 작성
    console.log('Confirm clicked', email, password);
    navigation.navigate('Tabs', { screen: 'Home' });
    
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign in</Text>

        <TextInput
          style={styles.input}
          placeholder="   Enter your Email"
          placeholderTextColor="#9A9A9A"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="   Enter your Password"
          placeholderTextColor="#9A9A9A"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={onConfirm}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

        <Text
           style={styles.footerText}>
          By tapping continue, you accept our Terms and Conditions and Privacy Policy
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  innerContainer: {
    marginTop: 0,
    marginHorizontal: 20
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    color: '#000',
    marginBottom: 36,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    fontSize: 14,
    color: '#000',
    marginBottom: 30,
    paddingHorizontal: 2,
    backgroundColor: '#dbdfe7ff',
    borderRadius: 10

  },
  button: {
    backgroundColor: '#B5ADFF',
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    marginTop: 30,
    fontSize: 12,
    color: '#A1A1A1',
    textAlign: 'center',
  },
});