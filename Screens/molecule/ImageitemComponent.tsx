import { Image, View, Button, Touchable, Alert} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';

type ImageProps = {
    Image: string,
}
const imageitemComponent = (props: ImageProps) => {
    return (
        <View>
            <Image
                source={props.Image}
                style={{ height: 90, width: 90 ,borderRadius:50}}>
            </Image>
            <TouchableOpacity >
                <Image
                    source={require('../../images/cam.png')}
                    style={{ height: 30, width: 30,borderRadius:50,position:'absolute', top:-35,left:60 }}>
                    </Image>
            </TouchableOpacity>
        </View>
    )
};

export default imageitemComponent;
