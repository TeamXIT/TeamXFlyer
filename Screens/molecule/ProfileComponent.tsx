import { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Alert } from "react-native"
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';

type profile = {
    Image: String;
}
const ProfileComponent = (field: profile) => {

    const [uri, setUri] = useState(field.Image);

    function handleSelectGallery(): void {
        Alert.alert('Select your option', 'Select one of the option to set your profile picture.', [
            {
                text: 'Open Camera',
                onPress: () => {
                    ImagePicker.openCamera({
                        width: 300,
                        height: 400,
                        cropping: true,
                    })
                        .then(image => {
                            setUri(image.path);
                        });
                },
            },
            {
                text: 'Select Picture',
                onPress: () => {
                    ImagePicker.openPicker({
                        width: 300,
                        height: 400,
                        cropping: true,
                    }).then(image => {
                        setUri(image.path);
                    });
                },
            },
            {
                text: 'Select Video',
                onPress: () => {
                    ImagePicker.openCamera({
                        mediaType: 'video',
                      }).then(image => {
                        console.log(image);
                      });
                }
            },
        ]);



    }

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={uri} />
            <TouchableOpacity onPress={() => handleSelectGallery()} style={styles.smallbtn}>
                <Image style={{ height: 35, width: 35 }} source={require('./../../assets/images/ic_camera.png')} />
            </TouchableOpacity>
        </View>
    )
}
export default ProfileComponent
const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        padding: 0,
    },
    img: {
        height: '100%',
        width: '100%',
        borderRadius: 75,
        position: 'absolute',

    },
    smallbtn: {
        height: 60,
        width: 60,
        backgroundColor: '#fff',
        marginLeft: '75%',
        marginTop: '65%',
        borderRadius: 55,
        padding: 12,
        borderWidth: 1,
    },
})