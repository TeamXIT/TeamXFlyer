import { Text, View, StyleSheet, TextInput, Image,Button,ScrollView, TouchableOpacity, FlatList, Alert, Pressable, SectionList} from "react-native";
const data = [
    {
        id:101,
        Name: 'American coffee',
        Message: 'Drinks that weight kose people like',
        image: require('../../assets/images/coffee-cup.png'),
        cost:'$8.99'
    },
    {
        id:102,
        Name: 'Grapefruit juice',
        Message: 'Freshly Squeezed grape juice',
        image: require('../../assets/images/coffee-cup.png'),
        cost:'$7.59'
    },
    {
        id:103,
        Name: 'Frappuccino',
        Message: "Summer's best-selling drinks",
        image: require('../../assets/images/coffee-cup.png'),
        cost:'$7.99'
    },
    {
        id:104,
        Name: 'cappuccino',
        Message: 'Rich scent warm your heart',
        image: require('../../assets/images/coffee-cup.png'),
        cost:'$8.99'
    },
    {
        id:105,
        Name: 'Black tea latte',
        Message: 'The most popular cofffee for girls',
        image: require('../../assets/images/coffee-cup.png'),
        cost:'$8.99'
    },
    
    {
        
        id:106,
        Name: 'Hazelnut coffee',
        Message: 'seasonal drink',
        image: require('../../assets/images/coffee-cup.png'),
        cost:'$6.99'
    },
   
  ];
     
            
const renderItem = ({ item }) => {
  return (
    <View style={styles.listContainer}>
      <Pressable onPress={()=>{Alert.alert(item.Name)}}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={item.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.Name}>{item.Name}</Text>
          <Text style={styles.message}>{item.Message}</Text>
        </View>
        <Text style={{fontSize:22,fontWeight:'bold',textAlign:'left'}}>{item.cost}</Text>
      </View>
      </Pressable>
      
    </View>
 
  );
};
const sortData=(data)=>{
    data.forEach(()=> {
    data.sort((a,b)=>{
        const costA=parseFloat(a.cost.substring(1))
        const costb=parseFloat(b.cost.substring(1))
        return costA-costb
    })
    });
}
sortData(data)
const sectionList_ex=()=>{
    return(
        <View style={styles.container}>
          <View style={{backgroundColor:"#fff",padding:15}}>
            <View style={styles.container1}>
                <Image
                 source={require('../../assets/images/greysearch.png')} 
                 style={{height:30,width:30, resizeMode:'contain'}}/>
                <TextInput style={styles.input} placeholder="Try searching for latte"/>
            </View>
            
            <View style={{flexDirection:'row',padding:20}}>
                <Text style={{color:'grey'}}>Find what you want</Text>
                <TouchableOpacity onPress={()=>{Alert.alert('Coffee')}} style={{backgroundColor:'#FFB6C1',padding:3,width:60,borderRadius:15,marginLeft:30,marginRight:15}}><Text style={{color:"#fff",textAlign:'center'}}>Coffee</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Alert.alert('Tea')}} style={{backgroundColor:'#87CEEB',padding:3,width:60,borderRadius:15,marginLeft:0,marginRight:15}}><Text style={{color:"#fff",textAlign:'center'}}>Tea</Text></TouchableOpacity>
            </View>
            </View>
            <View style={styles.container2}>

            <SectionList 
                sections={[{data:data}]} 
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
           

            </View>
        </View>
    )
}
export default sectionList_ex
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        paddingBottom:10,
        backgroundColor:"#fff",
        position:'absolute',
        marginLeft:10

    },
    container2:{
      flex: 1,
      backgroundColor: '#fff',
      position:'relative',
      
    
      
  },
    listContainer:{
        backgroundColor:'#E1EBEE',
    
      },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#87CEEB',
        borderWidth: 1,
        borderRadius: 25,
        padding:5,
        paddingLeft:10,
      },
      input: {
        flex:1,
        padding:10,
        paddingLeft:3,
        marginLeft: 10,
        fontSize: 18,
      },
      Name: {
        fontSize:18,
        fontWeight:'700'
      },
      message: {
        fontSize:12,
        color:'grey'
      }, 
      image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 100,
      },
      textContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        fontSize: 12,
        marginLeft: 10,
      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        height:80,
        margin:10,
        paddingLeft:1,
        padding: 10,
        paddingRight:20,
        backgroundColor:'white',
    
      },
    
})