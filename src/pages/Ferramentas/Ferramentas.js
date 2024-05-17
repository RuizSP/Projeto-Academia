import React from "react";
import {View, Text} from "react-native";
import SelectionBox from "../../components/SelectionBox/SelectionBox";

export default function Ferramentas(){
    return(
        <View style={{flex:1, justifyContent:"space-evenly",alignItems:"center",}}>
            <SelectionBox iconName="calculator" text="Calculadora de IMC">

            </SelectionBox>
        </View>
    )
}