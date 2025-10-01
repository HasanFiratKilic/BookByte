import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backdrop: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.35)",
    },
    centerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    card: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 12,
        textAlign: "center",
    },
    option: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        marginBottom: 8,
    },
    optionActive: {
        backgroundColor: "#E3F2FD",
        borderColor: "#2196F3",
    },
    optionText: {
        fontSize: 14,
        textAlign: "center",
        color: "#333",
        fontWeight: "600",
    },
    optionTextActive: {
        color: "#0b73d6",
    },
    cancelButton: {
        marginTop: 6,
        paddingVertical: 10,
        borderRadius: 12,
        backgroundColor: "#f5f5f5",
    },
    cancelText: {
        textAlign: "center",
        fontWeight: "700",
        color: "#444",
    },
    customOption: {
        backgroundColor: "#f8f9fa",
        borderColor: "#dee2e6",
        borderStyle: "dashed",
    },
    customOptionText: {
        color: "#6c757d",
        fontWeight: "500",
    },
    customInputContainer: {
        marginTop: 8,
    },
    customInput: {
        borderWidth: 1,
        borderColor: "#dee2e6",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
        marginBottom: 8,
    },
    customInputButtons: {
        flexDirection: "row",
        gap: 8,
    },
    customButton: {
        flex: 1,
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: "center",
    },
    customButtonAdd: {
        backgroundColor: "#28a745",
    },
    customButtonCancel: {
        backgroundColor: "#6c757d",
    },
    customButtonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 14,
    },
});


