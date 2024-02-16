import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const handleResendOTP = () => {
  console.log("Resend OTP logic");
};

const VerificationScreen = ({ navigation }) => {
  const [stringValue, setStringValue] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <View style={styles.container}>
       <Image source={require('../../image/verfication.png')} style={styles.logo} />
      <Text style={styles.title}>Verify Mobile Number</Text>

      {/* Use forward slashes and correct the image filename */}
      <Text style={styles.centeredText}>
        PG has been sent to you on your mobile number, please enter your number
      </Text>

      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="ENTER MOBILE NUMBER"
          onChangeText={(number) => {
            console.log(number);
            setMobileNumber(number);
          }}
          style={styles.textInput}
        />
      </View>

      <TouchableOpacity onPress={handleResendOTP}>
        <Text style={[styles.centeredText, styles.underlineText]}>Didn't receive OTP?</Text>
      </TouchableOpacity>

      <Button title="Change Number" onPress={() => console.log('Change number pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black', 
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  centeredText: {
    fontSize: 15,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: '#D2A526',
    borderRadius: 10,
    marginBottom: 16,
    width: '80%',
    
  },
  textInput: {
    padding: 8,
    color: 'white',
    
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 16,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  
});

export default VerificationScreen;
