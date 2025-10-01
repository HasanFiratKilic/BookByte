import { StyleSheet } from "react-native";

const baseStyles = StyleSheet.create({
    input: {
        height: 38,
        color: "black",
        borderColor: "gray",
        margin: 7,
        
    },
});

export default {
    primary: StyleSheet.create({
        ...baseStyles,
        input: {
            ...baseStyles.input,
            width:"95%",
            borderRadius:7,
            borderWidth: 0.5,
            backgroundColor: "white",
        },
    }),secondary:StyleSheet.create({
        ...baseStyles,
        input:{
            ...baseStyles.input,
            borderBottomWidth:0.5,
            width:"80%",
            
            

        }
    })
};