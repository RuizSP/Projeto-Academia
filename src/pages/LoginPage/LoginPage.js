import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import Styles from './Styles';
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import AlertBox from '../../components/AlertBox/AlertBox';
import LoginValidation from '../../Validations/LoginValidation';


function LoginPage({navigation}){

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const loginValidate = new LoginValidation();


    function changeMessage(errorMessage){
        setErrorMessage(errorMessage);
    }

    function onbtnLoginPressed(){
        if(loginValidate.validation(userName, password)== false){
            changeMessage("Usuário ou senha inválidos!");
        }else{
            changeMessage("");
            navigation.navigate("Home");
        }
        Keyboard.dismiss();
    }

    return(
        <Pressable style = {Styles.formLogin} onPress={Keyboard.dismiss}>
           {errorMessage && errorMessage !== "" && <AlertBox errorMessage={errorMessage} />}
           
          {/* <EvilIcons name="user" size={100} color="black" style = {Styles.icons} />*/}
           <FontAwesome5 name="dumbbell" size={100} color="#145DA0" style = {Styles.icons} />
            <Text style = {Styles.title}>
                Login no Aplicativo
            </Text>
            <View style ={Styles.formContainer}>
                <Text style = {Styles.text}>
                    Usuário:
                </Text>
                <TextInput style = {Styles.input} autoComplete='email' onChangeText={setUserName}/>
                
            </View>

            <View style ={Styles.formContainer}>
                <Text style = {Styles.text}>
                    Senha:
                </Text>
                <TextInput style = {Styles.input}  onChangeText={setPassword} />
            </View>
            <View>
               <Text style={Styles.forgotPasswordText}>
                    Esqueceu sua senha?
                    <Text style = {Styles.linkText}>
                         Clique aqui.
                    </Text>
               </Text>
            </View>
            <View>
                <TouchableOpacity
                style ={Styles.button}
                onPress={()=>{
                        onbtnLoginPressed();      
                }}
                >
                    <Text style ={Styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>



        </Pressable>
    )
}

export default LoginPage