import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ItemProps = {
    ImageOne: string,
    Content: string,
    ImageTwo: string,
    handleOnPress: (value: string) => void;
}

const SettingItemComponent = (props: ItemProps) => {
    return (
        <TouchableOpacity onPress={() => props.handleOnPress(props.Content)} activeOpacity={0.5} style={styles.menuButton}>
            <View style={styles.menuContent}>
                <Image source={props.ImageOne} style={styles.smallImage} />
                <Text style={[styles.menuButtonText, styles.purchaseleftAligned]}>{props.Content}</Text>
                <View style={styles.arrowContainer}>
                    <Image source={props.ImageTwo} style={styles.smallImage} />
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default SettingItemComponent;

const styles = StyleSheet.create({
    menuContent: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
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
    menuButtonText: {
        color: 'white',
        fontSize: 16,
    },
    purchaseleftAligned: {
        textAlign: 'left',
        marginRight: 80,
    },
    smallImage: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    arrowContainer: { marginLeft: 10, },
});


// Get My total marks
// Function Get studentDetails{
// API get student details
// var studentDetails = Api.getStudentDetails('123456');
// Marks calutate your maks logic //50 lines
// return total maks
//}



// static class Student() {
//   static sting GetStudentName == "TeamX";
//}

//class Student() {}
//    GetStudentName == "TeamX";
//


// Student stdRef =  new Student();
// var StudentNAme = stdRef.GetStudentName;

// var StudentNAme = Student.GetStudentName;



//API Student GetStudentDetails(studentId: string)
//{
// return StudentList.where(x=> x.id == studentId);
//}


// Function Get studentDetails{
// API get student details
// var studentDetails = Api.getStudentDetails('123456');
// return studentDetails;
//}

// function calucutate student marks{
// Marks calutate your maks logic
//return;
//}