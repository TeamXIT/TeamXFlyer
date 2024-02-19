// ProfileScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CustomImage from './CustomImage'

const ProfileScreen = () => {
  const handlePrivacyPress = () => {
    console.log('Privacy button pressed');

  };

  const handlePurchaseHistoryPress = () => {
    console.log('Purchase History button pressed');

  };

  const handleHelpAndSupportPress = () => {
    console.log('Help and Support button pressed');

  };
  const handlesettingsPress = () => {
    console.log('settings button pressed');

  };

  const handleInviteFriendPress = () => {
    console.log('Invite a Friend button pressed');

  };

  const handleLogoutPress = () => {
    console.log('Logout button pressed');

  };

  const handleLightThemeImagePress = () => {
    console.log('Light theme image pressed');

  };
  const handleImagePress = () => {
    console.log('Image touched!');
};
  
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleLightThemeImagePress}>
          <Image source={require('../../profileimage/lighttheme1.png')} style={styles.lightThemeImage} />
        </TouchableOpacity>
      
        <CustomImage
          image={require('../../profileimage/imagecom.png')}
          onPress={handleImagePress}
        />
        <Text style={styles.profileName}>Chaitanya</Text>
        <Text style={styles.email}>janachaitanya1234@gamil.com</Text>
      </View>

      <TouchableOpacity style={styles.upgradeButton} onPress={() => console.log('Upgrade to Pro')}>
        <Text style={styles.upgradeButtonText}>Upgrade to Pro</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePrivacyPress} activeOpacity={0.5} style={styles.menuButton}>
        <View style={styles.menuContent}>
          <Image source={require('../../profileimage/privacy.png')} style={styles.smallImage} />
          <Text style={[styles.menuButtonText, styles.privacyleftAligned]}>Privacy</Text>
          <View style={styles.arrowContainer}>
            <Image source={require('../../profileimage/angle-arrow.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePurchaseHistoryPress} activeOpacity={0.5} style={styles.menuButton}>
        <View style={styles.menuContent}>
          <Image source={require('../../profileimage/purchasehistory.png')} style={styles.smallImage} />
          <Text style={[styles.menuButtonText, styles.purchaseleftAligned]}>Purchase History</Text>
          <View style={styles.arrowContainer}>
            <Image source={require('../../profileimage/angle-arrow.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleHelpAndSupportPress} activeOpacity={0.5} style={styles.menuButton}>
        <View style={styles.menuContent}>
          <Image source={require('../../profileimage/help.png')} style={styles.smallImage} />
          <Text style={[styles.menuButtonText, styles.helpleftAligned]}>Help and Support</Text>
          <View style={styles.arrowContainer}>
            <Image source={require('../../profileimage/angle-arrow.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlesettingsPress} activeOpacity={0.5} style={styles.menuButton}>
        <View style={styles.menuContent}>
          <Image source={require('../../profileimage/settings.png')} style={styles.smallImage} />
          <Text style={[styles.menuButtonText, styles.settingleftAligned]}>Settings</Text>
          <View style={styles.arrowContainer}>
            <Image source={require('../../profileimage/angle-arrow.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleInviteFriendPress} activeOpacity={0.5} style={styles.menuButton}>
        <View style={styles.menuContent}>
          <Image source={require('../../profileimage/invite.jpg')} style={styles.smallImage} />
          <Text style={[styles.menuButtonText, styles.inviteleftAligned]}>Invite a Friend</Text>
          <View style={styles.arrowContainer}>
            <Image source={require('../../profileimage/angle-arrow.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogoutPress} activeOpacity={0.5} style={styles.menuButton}>
        <View style={styles.menuContent}>
          <Image source={require('../../profileimage/logout.png')} style={styles.smallImage} />
          <Text style={[styles.menuButtonText, styles.logoutleftAligned]}>Logout</Text>
          <View style={styles.arrowContainer}>
            <Image source={require('../../profileimage/angle-arrow.png')} style={styles.arrowIcon} />
          </View>
        </View>
      </TouchableOpacity>
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
