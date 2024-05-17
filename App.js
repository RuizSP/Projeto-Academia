import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './src/pages/LoginPage/LoginPage';
import Home from './src/pages/Home/Home';
import {NavigationContainer} from "@react-navigation/native";
import{createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Meustreinos from './src/pages/MeusTreinos/Treinos';
import MinhasAvaliacoes from './src/pages/MinhasAvaliacoes/UserAvaliacoes';
import EnviarArquivos from './src/pages/EnviarArquivos/EnviarArquivos';
import Ferramentas from './src/pages/Ferramentas/Ferramentas';
import AreaInstrutor from './src/pages/AreaInstrutor/AreaInstrutor';

import CadastroUsuario from './src/pages/CadastroUsuario/CadastroUsuario';
import Title from './src/components/Title/Title';
import ListarUsuarios from './src/pages/VerUsuarios/ListarUsuarios';
import NavigationBar from './src/components/NavigationBar/NavigationBar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator()
{ 
  return(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Meus Treinos" component={Meustreinos}/>
        <Stack.Screen name="Minhas Avaliações" component={MinhasAvaliacoes}/>
        <Stack.Screen name="Enviar Arquivos" component={EnviarArquivos}/>
        <Stack.Screen name="Ferramentas" component={Ferramentas}/>
        <Stack.Screen name="Área do Instrutor" component={AreaInstrutor}/>
      </Stack.Navigator>
    )
}

export default function App({navigator}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    /*<NavigationContainer color="blue">
      <View style = {styles.container}>
          <Title title="FITFORGE"></Title>
      </View>
      <StackNavigator/>
    </NavigationContainer>
  );*/
  <View style={styles.container}>
      <CadastroUsuario ></CadastroUsuario>
     
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
    height:"auto",
    backgroundColor: "#0C2D48",
    justifyContent: "center",
    alignItems: "center",

  },
});
