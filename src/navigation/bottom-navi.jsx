import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/home'; // Home 화면
import BoardScreen from '../pages/board';  // Profile 화면
import MypageScreen from '../pages/mypage';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/Icon/Home.jpg')}
              style={{ width: 24, height: 24 }}  
            />),
        }}
      />
      <Tab.Screen
        name="Board"
        component={BoardScreen}
        options={{
          tabBarLabel: '게시판',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/Icon/Paper.jpg')}
              style={{ width: 24, height: 24 }}  
            />),
        }}
      />
      <Tab.Screen
        name="mypage"
        component={MypageScreen}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/Icon/Circle 09.jpg')}
              style={{ width: 24, height: 24 }}  
            />),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
