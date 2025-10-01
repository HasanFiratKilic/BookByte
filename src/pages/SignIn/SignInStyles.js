import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        

    }, body: {
        flex: 6,
        
        alignItems: "center",
        
        width:"100%"
    },logo_container:{
        flex:4.5,
        justifyContent:"flex-end"

    },signUp_link_container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },question_text:{
        fontSize:16,
        marginHorizontal:5
    },singUp_link_text:{
        fontSize:17,
        fontWeight:"bold",
        color:"blue"
    },errorText:{
        color:"red",
        width:"95%",
        fontSize:12

    }
    
})