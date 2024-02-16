import React from 'react';
import { FlatList, View, Text, Image, StyleSheet} from 'react-native';

const data = [
  {
    id: '101',
    Name: 'Elon Musk',
    Message: 'Hello, how are you?',
    image: require('../../assets/Users/Elon-Musk.jpg')
  },
  {
    id: '102',
    Name: 'Ratan Tata',
    Message: 'Hello, how are you?',
    image: require('../../assets/Users/ratan-tata.jpg')
  },
  {
    id: '103',
    Name: 'Steve jobs',
    Message: 'Hello, how are you?',
    image: require('../../assets/Users/stevejobs.jpg')
  },
  {
    id: '104',
    Name: 'Sunder Pichai',
    Message: 'Hello, how are you?',
    image: require('../../assets/Users/sundar_pichai.webp')
  },
  {
    id: '105',
    Name: 'Mark Zuckerberg',
    Message: 'Hello, how are you?',
    image: require('../../assets/Users/Mark-Zuckerberg.webp')
  },
  {
    id: '106',
    Name: 'Jeff Bezos',
    Message: 'Hello, how are you?',
    image: require('../../assets/Users/jeff-BeZos.jpeg')
  },

];

const renderItem = ({ item }) => (

  <View style={styles.container}>
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={item.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.Name}>{item.Name}</Text>
        <Text style={styles.message}>{item.Message}</Text>
      </View>
    </View>
  </View>

);

const Contacts = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',

  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 100,
    borderColor: '#fff',
    borderStyle: 'solid',
    letterSpacing: 2,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  Name: {
    fontSize: 24,
    fontWeight: '700'
  },
  message: {
    fontSize: 18,
    color: 'grey'
  },
});

export default Contacts;
