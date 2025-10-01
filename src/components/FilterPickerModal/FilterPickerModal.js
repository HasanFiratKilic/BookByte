import React from "react";
import { View, Text, FlatList, TouchableWithoutFeedback } from "react-native";
import Modal from "react-native-modal"
import { styles } from "./FilterPickerModalStyles";

const FilterPickerModal = ({ isVisible, onBackdropPress, options, title, onOptionSelect }) => {

    const Item = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => onOptionSelect(item)}>
                <View style={styles.optionsContainer}>
                    <Text style={styles.optionText}>{item}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onBackdropPress}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <FlatList
                    data={options}
                    keyExtractor={item => options.indexOf(item).toString()}
                    renderItem={({ item }) => <Item item={item} />}
                />
            </View>
        </Modal>
    )
}

export default FilterPickerModal