import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding:4,
        paddingTop:15,
        flex:1,
        alignItems: 'center',
    },
    body: {
        flexDirection: "row", // Label ve Input'u yan yana hizalar
        alignItems: "center",
        marginBottom: 10, 
    },
    label: {
        fontSize: 16, 
        width: 60, // Label için sabit bir genişlik
    },errorText:{
        color:"red",
        fontSize:11
    }
    
});