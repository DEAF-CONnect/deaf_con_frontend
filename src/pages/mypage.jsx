import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default function MypageScreen() {
  const [showLogout, setShowLogout] = useState(false);
  const [showText, setShowText] = useState(false);
  const logout = () => {
    setShowLogout(!showLogout);
  };
  const xToggle = () => {
    setShowText(!showText);
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style= {styles.topWrapper}>
       {/* 프로필 이미지 */}
        <Image
          source={require('../../assets/images/dami.jpeg')}
          style={styles.profileImage}
        />
        {/* 토글 */}
        <TouchableOpacity onPress={logout}>
          <Image
            source={require('../../assets/Icon/Menu 5 11.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        
        {/* 제목 */}
        <Text style={styles.title}>게시판</Text>

        {showLogout && (
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>로그아웃</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* 본문 영역 */}
      <View style={styles.content}>
        <Text style={styles.guideText}>좋아하는 아티스트를 입력해주세요 !</Text>
        <View style={styles.divider} />

        {/* 가운데 아이콘 */}
        <View style={styles.circleIcon}>
          <TouchableOpacity onPress={xToggle}>
            <Image
              source={require('../../assets/Icon/X circle.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* 입력창 */}
        {showText &&(
        <TextInput
          placeholder="Enter your favorite artist !"
          placeholderTextColor="#aaa"
          style={styles.input}
        />)}
      </View>
      {/* 하단 탭 (예시용) */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topWrapper : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomColor: 0,
    borderBottomWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomColor: '#EAEAEA',
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  logoutButton: {
    backgroundColor: '#F3F0FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  logoutText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7E6FFF',
  },
  content: {
    alignItems: 'center',
    padding: 30,
  },
  guideText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 10,
  },
  circleIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
    backgroundColor: '#fff',
  },
});
