import { createStaticNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
//dimport HomePage from './src/pages/home' ; 
export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onConfirm = async () => {
    // 로그인 처리 로직 작성
    if (!email || !password) {
      Alert.alert("입력 오류", "이메일과 비밀번호를 입력하세요.");
      return;
    }
    try {
      const response = await fetch('http://3.35.41.240:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ email: email, password: password }),
    });
      //const data = await response.json();
      if (response.status === 200) {
        navigation.navigate('Tabs', { screen: 'Home' });
        // 로그인 성공 시 처리 로직 추가
      } else if(response.status === 201) {
        Alert.alert("새로운회원", "다시 로그인해주세요");
      } else if(response.status === 401) {
        Alert.alert("로그인 실패", "이메일 또는 비밀번호가 올바르지 않습니다.");
      } else {
        console.log("status:",response.status)
        Alert.alert("오류", "로그인에 실패했;습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert("오류", "로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
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