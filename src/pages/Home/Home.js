import { View, StyleSheet,Text, TouchableOpacity } from "react-native"
import SelectionBox from "../../components/SelectionBox/SelectionBox";
import UserBox from "../../components/UserBox/UserBox";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

export default function Home( {navigation, route}){
    return(
        <View  style = {styles.container}>
            <UserBox userName="Ruiz" size={100} color="#145DA0"></UserBox>
            <SelectionBox iconName ="dumbbell" iconSize ={24} iconColor="#2E8BC0" text="Meus Treinos" onPress ={() => navigation.navigate('Meus Treinos')}/>
            <SelectionBox iconName ="clipboard-check" iconSize ={24} iconColor="#2E8BC0" text="Minhas Avaliações" onPress ={() => navigation.navigate("Minhas Avaliações")}/>
            <SelectionBox iconName ="folder" iconSize ={24} iconColor="#2E8BC0" text="Enviar Arquivos" onPress ={() => navigation.navigate("Enviar Arquivos")}/>
            <SelectionBox iconName ="hammer" iconSize ={24} iconColor="#2E8BC0" text="Ferramentas" onPress ={() => navigation.navigate("Ferramentas")}/>
            <SelectionBox iconName ="user" iconSize ={24} iconColor="#2E8BC0" text="Área do instrutor" onPress ={() => navigation.navigate("Área do Instrutor")}/>
            <NavigationBar/>
        </View>
        
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            width:"100%",
            justifyContent:"space-between",
            alignItems:"center",
            backgroundColor:"white",
            paddingTop:20,

        },
        icons:{
            marginRight:10,
        },
        label:{
            fontSize: 18,
        }

    }
)