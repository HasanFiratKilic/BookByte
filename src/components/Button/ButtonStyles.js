import { StyleSheet } from "react-native";
import { colors } from "../../utile/colors";

const baseStyles = StyleSheet.create({
    buttonContainer: {
        padding:15,
        width:"95%",
        borderRadius:10,
        alignItems:"center",
        margin:5
    },
    text: {
        color: "white",
        fontWeight:"bold",
        fontSize:16
    },
});

export default{
    primary:StyleSheet.create({
        ...baseStyles,
        buttonContainer:{
            ...baseStyles.buttonContainer,
            backgroundColor:colors.buttonBacround,
        }
    }),
    secondary:StyleSheet.create({
        ...baseStyles,
        buttonContainer:{
            ...baseStyles.buttonContainer,
          backgroundColor:colors.disabledButtonBacround  
        }
    }),
    delete:StyleSheet.create({
        ...baseStyles,
        buttonContainer:{
            ...baseStyles.buttonContainer,
            borderWidth:1,
            borderColor:"red"
        },
        text:{
            ...baseStyles.text,
            color:"red"
        }
    })
}
