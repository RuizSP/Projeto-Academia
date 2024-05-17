import { View, Text, StyleSheet } from "react-native"

export default function Title(props){
    return(
        <View  style={styles.container}>
            <Text style={styles.label}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            paddingTop:30,
            paddingBottom: 20,
        },
        label:{
            fontSize:32,
            fontWeight:"bold",
            color:"darkblue"
        }
    }
)