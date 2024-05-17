import { View, Text, StyleSheet } from "react-native"
import { FontAwesome5} from '@expo/vector-icons';


export default function UserBox(props){
    return(
        <View style ={styles.container}>
            <FontAwesome5 name="user-circle" size={props.size} color={props.color}/>
            <Text style ={styles.label}>
                Olá, {props.userName}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            alignItems:"center",
            justifyContent:"space-between",
        },
        label:{
            fontSize:18,
            color:"#2E8BC0",
            fontWeight:"200",
            marginBottom:10,
        }
    }
)