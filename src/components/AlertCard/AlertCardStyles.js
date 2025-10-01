import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        marginBottom: 20
    },
    message: {
        marginBottom: 20,
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 10
    },
    cancelButton: {
        backgroundColor: "#6c757d",
        padding: 10,
        borderRadius: 5,
        minWidth: 80
    },
    deleteButton: {
        backgroundColor: "#dc3545",
        padding: 10,
        borderRadius: 5,
        minWidth: 80
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    }
})
