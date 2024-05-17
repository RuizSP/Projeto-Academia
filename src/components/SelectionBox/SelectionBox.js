
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome5} from '@expo/vector-icons';

export default function SelectionBox(props){
    return(
        <TouchableOpacity style = {styles.selectionBox } onPress = {props.onPress} >
                <FontAwesome5 name={props?.iconName} size={props?.iconSize} color={props?.iconColor}  style = {styles.icons}/>
                <Text style = {styles.label}>
                   {props.text}
                </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        selectionBox:{
            width:"80%",
            height:"10%",
            marginBottom:5,
            backgroundColor: "white",
            flexDirection:"row",
            alignItems:"center",
            borderRadius:10,
            borderColor:"#145DA0",
            borderWidth:1,
            padding: 10,
            shadowColor: '#0C2D48',
            elevation:10,

        },
        icons:{
            marginRight:10,
        },
        label:{
            fontSize: 18,
            color:"#2E8BC0",
        }

    }
)