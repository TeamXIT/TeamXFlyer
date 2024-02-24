import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ContactComponent from '../molecule/ContactComponent';

const data = [
  {
    id: '101',
    Name: 'Elon',
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
  <ContactComponent Id={item.id} Image={item.image} Name={item.Name} Message={item.Message} />
);

const Contacts = () => {
  return (


    <FlatList style={{ flex: 1 }}
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
