import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        

        
    },modalContainer:{
        margin:0,
        justifyContent:"flex-end"
        
    },filterBody:{
        padding:5,
        borderBottomWidth:0.5,
        height:Dimensions.get('window').height/13,
        
        justifyContent:"center",
    }
})