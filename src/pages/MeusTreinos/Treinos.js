import React from "react"
import { View, Text } from "react-native"
import NavigationBar from "../../components/NavigationBar/NavigationBar"

export default function Meustreinos(){
    return(
        <View style={{flex:1,}}>
            <Text>
                Tela com treinos
            </Text>
            <Text>treinos ficarão aqui aaaahhh</Text>
            <NavigationBar/>
        </View>
    )
}