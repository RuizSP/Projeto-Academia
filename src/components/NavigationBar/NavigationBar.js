import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Styles from "./styles";
import { FontAwesome5, Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Linking } from "react-native";


function NavigationBar(props)
{
    const navigation = useNavigation();
    function logOutHandler(){
        navigation.navigate('Login');
    }

    return(
        <View style = {Styles.navigationBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <FontAwesome5 name="home" size={24} color="white"></FontAwesome5>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="whatsapp" size={24} color="white"></FontAwesome5>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="instagram" size={24} color="white"></FontAwesome5>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{logOutHandler()}}>
                <Entypo name="log-out" size={24} color="white"/>
            </TouchableOpacity>
           
            
        </View>
    )

}

export default NavigationBar