import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./FiterCategoricalButtonStyles";



const FilterCategoricalButton = ({ onPress, text, selectedValue }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text >{text}</Text>
            {selectedValue ? (
                <View >
                    <Text >{selectedValue}</Text>
                </View>
            ) : null}
        </TouchableOpacity>
    );
};

export default FilterCategoricalButton;