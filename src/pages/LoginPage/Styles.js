import { StyleSheet } from "react-native";

const Styles =  StyleSheet.create
({
    title:{
        alignSelf:"center",
        marginBottom:20,
        fontSize: 24,
        fontWeight:"bold",
        color: "#145DA0",
    },
    formLogin:{
        width: "100%",
        height:"100%",
        marginBottom:0,
        backgroundColor: "white",
        justifyContent:"center",

    },
    formContainer:{
        paddingBottom:20,
    },
    text:{
        padding:5,
        marginLeft: 75,
        fontSize:16,
        color: "#145DA0",
    },
    input:{
        alignSelf:"center",
        width: "60%",
        height: 50,
        backgroundColor: "lightgray",
        borderColor: "black",
        borderRadius:20,
    },
    button:{
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        justifyContent: "center",
        padding:10,
        marginTop:10,
        backgroundColor: "#145DA0",
        borderRadius: 50,
    },

    buttonText:{
        fontSize:20,
        color:"white",    
    },
    icons:{
        alignSelf: "center",
        marginBottom:20,
        
    },
    forgotPasswordText:{
        marginRight: 5,
        alignSelf: "center",
    },
    linkText:{
        fontSize:16,
        padding:10,
        marginLeft:10,
        color:"blue",
    }

})


export default Styles