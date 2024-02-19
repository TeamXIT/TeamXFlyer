import { View, Image, TouchableOpacity, Alert ,StyleSheet} from "react-native"
type profile={
    Image:String;
}
const  ProfileComponent=(field: profile)=>{
    return(
        <View style={styles.container}>
            <Image  style={styles.img}source={require(field.Image)}/>
            <TouchableOpacity onPress={()=>{Alert.alert('Image')} }style={styles.smallbtn}>
                <Image style={{height:35,width:35}}source={require('../assets/camera.png')}/>
            </TouchableOpacity>
        </View>
    )
}
export default ProfileComponent
const styles=StyleSheet.create({
    container:{
        height:200,
        width:200,
        padding:0,
    },
    img:{
        height:'100%',
        width:'100%',
        borderRadius:100,
        position:'absolute',

    },
    smallbtn:{
        height:60,
        width:60,
        backgroundColor:'#fff',
        marginLeft:'75%',
        marginTop:'65%',
        borderRadius:55,
        padding:12,
        borderWidth:1,
    },
})