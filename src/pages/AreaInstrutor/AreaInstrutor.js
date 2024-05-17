import {View, Text} from "react-native"
import SelectionBox from "../../components/SelectionBox/SelectionBox"

export default function AreaInstrutor(){
    return(
        <View style={{flex:1, justifyContent:"space-evenly", alignItems:"center",}}>
                <SelectionBox iconName="folder" iconSize={32} text="Cadastrar Aluno"/>
                <SelectionBox iconName = "folder" iconSize={32}  text="Gerenciar Avaliações"/>
        </View>
    )
}