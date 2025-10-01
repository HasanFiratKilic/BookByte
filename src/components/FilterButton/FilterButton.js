import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const FilterButton = ({onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="filter" size={24} color="black"/>
        </TouchableOpacity>
    )
}

export default FilterButton