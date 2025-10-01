import React from "react";
import { Text,TouchableOpacity } from "react-native";
import { styles } from "./AddBookButtonStyles";
import { useNavigation } from "@react-navigation/native";


const AddBookButton = ()=>{

    const navigation = useNavigation()



    return(

        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("SaveBookPage")}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    )
}

export default AddBookButton