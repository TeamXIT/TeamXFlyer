import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../Styles/Styles';


const handleResendOTP = () => {
  console.log("Resend OTP logic");
};

const VerificationScreen = ({ navigation }) => {
  const [stringValue, setStringValue] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <View style={[styles.container, { padding: 16 }]}>
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
          style={styles.textVerifyInput}
        />
      </View>

      <TouchableOpacity onPress={handleResendOTP}>
        <Text style={[styles.centeredText, styles.underlineText]}>Didn't receive OTP?</Text>
      </TouchableOpacity>

      <Button title="Change Number" onPress={() => navigation.navigate("LoginScreen")} />
    </View>
  );
};

export default VerificationScreen;