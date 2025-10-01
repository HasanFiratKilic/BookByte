import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export const styles = StyleSheet.create({
    container:{
        padding:4,
        marginVertical:1,
        borderBottomWidth:0.5,
        borderBlockColor:"gray",
        height :Dimensions.get('window').height/14,
        justifyContent:"center"
        


        
    }

})