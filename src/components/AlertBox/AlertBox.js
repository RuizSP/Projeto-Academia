import { View, StyleSheet, Text } from "react-native";

function AlertBox (props){
    return(
        <View style ={styles.container}>
            <Text style ={styles.text}>
                {props.errorMessage}
            </Text>
        </View>
    )
}

export default AlertBox;

const styles = StyleSheet.create(
    {
        container:{
            alignSelf:"center",
            width: "90%",
            height:"auto",
            borderColor: "red",
            borderStyle:"solid",
            backgroundColor:"pink",
            borderRadius:5,
            alignItems: "center",
            borderWidth: 1,
        },

        text:{
            padding:10,
            marginLeft:5,
            fontSize:16,
        }
    }
)