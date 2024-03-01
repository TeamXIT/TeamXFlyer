import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, SectionList, ImageBackground } from 'react-native';

const data = [
  {
    id: '1',
    image: require('../../assets/images/coffee.jpg'),
    Type: 'American coffee',
    Price: '$8.99',
    star: require('../../assets/images/star.png')


  },
  {
    id: '1',
    image: require('../../assets/images/coffee.jpg'),
    Type: 'Grapefruit juice',
    Price: '$7.59',
    star: require('../../assets/images/star.png')

  },
  {
    id: '1',
    image: require('../../assets/images/coffee.jpg'),
    Type: 'Frappuccio',
    Price: '$7.99',
    star: require('../../assets/images/star.png')

  },
  {
    id: '1',
    image: require('../../assets/images/coffee.jpg'),
    Type: 'Cappuccino',
    Price: '$8.99',
    star: require('../../assets/images/star.png')

  },
  {
    id: '1',
    image: require('../../assets/images/coffee.jpg'),
    Type: 'Black tea latte',
    Price: '$8.99',
    star: require('../../assets/images/star.png')

  },
  {
    id: '1',
    image: require('../../assets/images/coffee.jpg'),
    Type: 'Hazelnut coffee',
    Price: '$6.99',
    star: require('../../assets/images/star.png')
  },
]

function CoffeeClub() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../../assets/images/leftArrow.jpg')} style={styles.arrow} />
        <Image source={require('../../assets/images/bell.jpg')} style={styles.bell} />
      </View>
      <TextInput style={styles.box} >
        <Image source={require('../../assets/images/search.png')} style={styles.search} />
        <Text style={styles.text}>Try searching for latte</Text>
      </TextInput>

      <View style={styles.touchableView}>
        <Text>Find what youn want</Text>
        <TouchableOpacity style={styles.touchableOpacityOne}><Text style={{ color: 'white' }}>latee</Text></TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacityTwo}><Text style={{ color: 'white' }}>tea</Text></TouchableOpacity>
      </View>
      <ImageBackground source={require('../../assets/images/background.jpg')}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.list} key={item.id}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.textTwo}>{item.Type}</Text>
              <Text style={styles.textTwo}>{item.Price}</Text>
              <Image source={item.star} style={{ height: 13, width: 13 }} />
            </View>
          )
        }}
      />
      </ImageBackground>
</ScrollView>
  )
};
export default CoffeeClub;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  image: {
    height: 50,
    width: 50
  },
  textTwo: {
    fontSize: 20,
    color: '#000000'
  },
  list: {
    backgroundColor: '#fcfcfc',
    padding: 16,
    borderWidth: 2,
    marginBottom: 15,
    height: 80,
    width: 350,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,


  },
  touchableOpacityOne: {
    height: 25,
    width: 60,
    borderRadius: 10,
    backgroundColor: 'pink',
    paddingLeft: 10,


  },
  touchableOpacityTwo: {
    height: 25,
    width: 60,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    paddingLeft: 10,

  },

  touchableView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  arrow: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginTop: 10
  },
  bell: {
    height: 30,
    width: 30,
    marginTop: 10,
    marginRight: 20
  },
  box: {
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 6,
    marginTop: 20,
    width: 350,
    height: 50,
    alignSelf: 'center',
    borderRadius: 30,

    flexDirection: 'row',

    alignItems: 'center',

  },
  search: {
    height: 30,
    width: 30,

  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
  buttonOne: {
    height: 15,
    width: 30,
    borderRadius: 20
  }
})
