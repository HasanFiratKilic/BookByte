import { StyleSheet } from "react-native";
import { colors } from "../../utile/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.buttonBacround,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        position: "absolute",
        bottom: 45,
        right: 20,
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 28,
    },
});