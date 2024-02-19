// CustomImage.js
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const CustomImage = (props) => {
    const handlePress = () => {
        console.log('Image pressed');
        props.onPress(); 
    };
  
    return (
        <View>
            <TouchableOpacity onPress={handlePress} activeOpacity={0.5}>
                <Image
                    source={props.image}
                    style={{ height: 90, width: 90, borderRadius: 50 }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default CustomImage;
