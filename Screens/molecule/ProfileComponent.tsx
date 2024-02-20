import { useState } from "react";
import { View, Image, TouchableOpacity, Alert, StyleSheet } from "react-native"
import ImagePicker from 'react-native-image-crop-picker';

type profile = {
    Image: String;
}
const ProfileComponent = (field: profile) => {

    const [uri, setUri] = useState(field.Image);

    function handleSelectGallery(): void {
        console.log("Image picker ref: ", ImagePicker);
        // ImagePicker.openPicker({
        //     width: 300,
        //     height: 400,
        //     cropping: true,
        // }).then(image => {
        //     setUri(image.path);
        //     //props.onChange?.(image);
        // });
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