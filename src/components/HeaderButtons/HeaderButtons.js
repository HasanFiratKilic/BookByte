import React from "react";
import { View } from "react-native";
import SettingButton from "../SettingButton/SettingButton";
import FilterButton from "../FilterButton/FilterButton";
import { styles } from "./HeaderButtonsStyles";



const HeaderButtons = ()=>{
    return(
        <View style={styles.container}>
            <SettingButton/>
            <FilterButton/>
        </View>
    )
}

export default HeaderButtons