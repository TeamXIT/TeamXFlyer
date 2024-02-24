// ProfileScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SettingItemComponent from '../molecule/SettingItemComponent';
import ProfileComponent from '../molecule/ProfileComponent';
import { useAppSelector } from '../Helper/Reducers/hooks';

const ProfileScreen = () => {

  const loginState = useAppSelector(state => state.ligin);
  const HandleOPress = (value: string) => {
    console.log('Selected value Start: ', value);
    console.log(loginState.data.employees)
    console.log('Selected value end is: ', value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <ProfileComponent Image={require('../../profileimage/profile.jpg')} />
        
        <Text style={styles.profileName}>TeamX</Text>
        <Text style={styles.email}>developer@teamx.in</Text>
      </View>

      <TouchableOpacity style={styles.upgradeButton} onPress={() => console.log('Upgrade to Pro')}>
        <Text style={styles.upgradeButtonText}>Upgrade to Pro</Text>
      </TouchableOpacity>

      <SettingItemComponent
        ImageOne={require('../../profileimage/privacy.png')}
        Content={'Privacy'}
        ImageTwo={require('../../profileimage/angle-arrow.png')}
        handleOnPress={function (value: string): void {
          HandleOPress(value);
        }} />

      <SettingItemComponent
        ImageOne={require('../../profileimage/purchasehistory.png')}
        Content={'Purchase History'}
        ImageTwo={require('../../profileimage/angle-arrow.png')}
        handleOnPress={function (value: string): void {
          HandleOPress(value);
        }} />

      <SettingItemComponent
        ImageOne={require('../../profileimage/help.png')}
        Content={'Help and Support'}
        ImageTwo={require('../../profileimage/angle-arrow.png')}
        handleOnPress={function (value: string): void {
          HandleOPress(value);
        }} />

      <SettingItemComponent
        ImageOne={require('../../profileimage/settings.png')}
        Content={'Settings'}
        ImageTwo={require('../../profileimage/angle-arrow.png')}
        handleOnPress={function (value: string): void {
          HandleOPress(value);
        }} />

      <SettingItemComponent
        ImageOne={require('../../profileimage/invite.jpg')}
        Content={'Invite a Friend'}
        ImageTwo={require('../../profileimage/angle-arrow.png')}
        handleOnPress={function (value: string): void {
          HandleOPress(value);
        }} />

      <SettingItemComponent
        ImageOne={require('../../profileimage/logout.png')}
        Content={'Logout'}
        ImageTwo={require('../../profileimage/angle-arrow.png')}
        handleOnPress={function (value: string): void {
          HandleOPress(value);
        }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  lightThemeImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 290,
  },
  profilePictureContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
    marginTop: 5,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileName: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
    fontWeight: 'bold',
  },
  upgradeButton: {
    backgroundColor: 'gold',
    borderRadius: 20,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upgradeButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    color: '#F8F8F8',
    fontSize: 12,
    marginTop: 5,
  },
  menuButton: {
    borderWidth: 1,
    borderColor: 'rgba(169, 169, 169, 0.5)',
    borderRadius: 50,
    marginBottom: 5,
    marginTop: 10,
    padding: 10,
    width: '75%',
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  menuButtonText: {
    color: 'white',
    fontSize: 16,
  },
  arrowContainer: {
    marginLeft: 10,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  smallImage: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  privacyleftAligned: {
    textAlign: 'left',
    marginRight: 150,
  },
  purchaseleftAligned: {
    textAlign: 'left',
    marginRight: 80,
  },
  helpleftAligned: {
    textAlign: 'left',
    marginRight: 70,
  },
  settingleftAligned: {
    textAlign: 'left',
    marginRight: 140,
  },

  inviteleftAligned: {
    textAlign: 'left',
    marginRight: 90,
  },
  logoutleftAligned: {
    textAlign: 'left',
    marginRight: 140,
  },

});

export default ProfileScreen;
