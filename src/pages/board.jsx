import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput,Image,ScrollView, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    name: '0322gegi',
    message: 'where is the toilet ?',
    date : '08:19 PM',
    img : ''
  },
  {
    id: '2',
    name: 'Nashvillle',
    message : 'where should i go to find concert staff ? ',
    date : '02:47 PM',
    img : ''
  },
];

export default function BoardScreen() {

  

  const MessageItem = ({ item }) => (
    <TouchableOpacity
    style={styles.itemBox}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {/* Header with search icon and profile */}
      <View style={styles.header}>
        <Text style={styles.titleText}>게시판</Text>
      </View>
      <View style={styles.listWrapper}>
        <FlatList
          data={data}
          renderItem={MessageItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          nestedScrollEnabled={true}
        />
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
  titleText : {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: 50,
    marginBottom: 5
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
  itemBox: {
    backgroundColor: '#FAFAFB',      
    borderRadius: 10,                
    padding: 15,                     
    marginVertical: 10,               // 위아래 간격
    marginHorizontal: 15,            // 좌우 여백              
    borderWidth: 1,
    borderColor: 0,          // 연한 테두리
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
    backgroundColor :' #FAFAFB'
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
    borderBottomColor: '#DDD'
  },
});