import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./ButtonStyles";

const Button = ({ text, fonk, disabled, theme = "primary" }) => {


    // Koşullu stil seçimi
    const buttonStyle = disabled
        ? styles["secondary"].buttonContainer
        : styles[theme].buttonContainer;

    return (

        <TouchableOpacity style={buttonStyle} onPress={fonk} disabled={disabled}>
            <Text style={styles[theme].text} >{text}</Text>
        </TouchableOpacity>

    )
}

export default Button