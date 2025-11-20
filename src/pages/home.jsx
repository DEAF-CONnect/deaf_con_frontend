import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput,Image, TouchableOpacity, Alert, Linking } from 'react-native';
import { NativeModules } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

const artist_data = [
  {
    id: '1',
    title: 'Dreamcatcher',
    description: 'Women, Rock',
    image: require('../../assets/images/dami.jpeg'), // 실제 이미지 경로로 교체
  },
  {
    id: '2',
    title: '(G)I-DLE',
    description: 'Women, Pop',
    image: require('../../assets/images/gahyun.jpeg'),
  },
  {
    id: '3',
    title: 'QWER',
    description: 'Women, Band, Rock',
    image: require('../../assets/images/handong.jpeg'),
  },
  {
    id: '4',
    title: 'GirlFriend',
    description: 'Women, Pop',
    image: require('../../assets/images/jiu.jpeg'),
  }
];
const concert_data= [
  {
    id: '1',
    title: '7 Doors of Christmas: A Lucky Encore',
    date: '2024.12.24',
    image: require('../../assets/images/siyeon.jpeg'), // 실제 이미지 경로로 교체
  },
  {
    id: '2',
    title: 'NMIXX <EPISODE 1: ZERO FRONTIER> IN INCHEON',
    date: '2025.11.29 ~ 2025.11.30',
    image: require('../../assets/images/sua.jpeg'),
  },
  {
    id: '3',
    title: 'IVE WORLD TOUR [SHOW WHAT I AM]',
    date: '2025.10.31 ~ 2025.11.02',
    image: require('../../assets/images/yoohyeon.jpeg'),
  }
];
export default function HomeScreen() {
  
  const openUnityApp = async () => {
    const unityPackageName = 'com.unity.template.ar_mobile';
    
    console.log("🔥 [JS] openUnityApp() 실행됨");
    console.log("🔥 [JS] 패키지명:", unityPackageName);
    SendIntentAndroid.isAppInstalled(unityPackageName)
      .then((isInstalled)=> {
        console.log("🔥 [JS] isAppInstalled 결과:", isInstalled);
        if(isInstalled) {
          console.log("🔥 [JS] 앱 설치됨 → openApp 호출 시도");
          SendIntentAndroid.openApp(unityPackageName, {})
            .then((wasOpened) => {
                console.log("🔥 [JS] openApp 실행 결과 wasOpened:", wasOpened);
            })
            .catch((err)=> {
              console.log("🔥 [JS] openApp 실행 중 ERROR 발생:", err);
            });
        } else {
          Alert.alert(
            "앱 없음", 
            "유니티 게임 앱이 설치되지 않았습니다."
          );
        }
      })
      .catch((err)=> {
        console.log("🔥 [JS] isAppInstalled ERROR:", err);
      });
  };


  const ArtistItem = ({ item }) => (
    <TouchableOpacity
    style={styles.item}
    >
      <Image source={ item.image } style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
  const ConcertItem = ({ item }) => (
    <TouchableOpacity
    style={styles.item}
    onPress={openUnityApp}  // 클릭 시 Unity 앱 열기
    >
      <Image source={ item.image } style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {/* Header with search icon and profile */}
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="   Search"
          placeholderTextColor="#9A9A9A"
        />
      </View>
      <View style={styles.listWrapper}>
          <Text style={styles.midText_r}>Artist</Text>
          <View style={styles.wrapper}>
            <FlatList
              data={artist_data}
              renderItem={ArtistItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.list}
              nestedScrollEnabled={true}
            />
          </View>
      </View >
      <View style={styles.listWrapper}>
        <Text style={styles.midText_c}>Concert</Text>
        <View style={styles.wrapper}>
          <FlatList
            data={concert_data}
            renderItem={ConcertItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
            nestedScrollEnabled={true}
          />
        </View>
      </View >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color:'#B5ADFF'
  },
  header: {
    height: 110,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B5ADFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0ff',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 14,
    marginTop: 35
  },
  wrapper: {
    flex: 1,
    padding: 10, // 내부 여백
    marginBottom : 10,
    borderBottomColor: '#000'
  },
  midText_r: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: 10,
    marginLeft : 20,
    marginBottom: 5
  },
  midText_c: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: 5,
    marginLeft : 20,
    marginBottom: 5
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -20 }],
  },
  list: {
    paddingVertical: 5,
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
  itemImage: {
    width: 80,
    height: 60,
    borderRadius: 4,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  listWrapper: {
    flex: 1,
    marginBottom: 10,
    borderBottomColor: '#DDD',
  },
});