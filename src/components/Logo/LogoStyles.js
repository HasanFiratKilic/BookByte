import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    logo:{
        width:Dimensions.get('window').width/1.7,
        height:Dimensions.get('window').width/1.7,
        borderRadius:90,
        margin:5,
        marginBottom:40

    }
})