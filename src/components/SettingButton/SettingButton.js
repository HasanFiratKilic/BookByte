import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const SettingButton = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("SettingPage")}>
            <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default SettingButton