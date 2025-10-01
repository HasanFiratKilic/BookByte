import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginVertical: 2.5,
        padding: 5,
        borderWidth: 0.5,
        borderColor: "gray",
        borderRadius: 15,
        backgroundColor: "white",
        position: "relative", // Durum badge'i için
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    contentContainer: {
        marginTop: 8, // Durum badge'i için boşluk
    },
    nameText: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 5,
    },
    body: {
        flexDirection: "row", 
        justifyContent: "flex-end", 
        marginTop: 8,
    },
    authorText: {
        fontSize: 15,
        color: "#4A4A4A",
        marginBottom: 12,
        textAlign: "center",
        fontWeight: "500",
    },
    // Durum Badge Stilleri
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 15,
        minWidth: 70,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    statusText: {
        color: "white",
        fontSize: 11,
        fontWeight: "bold",
        textAlign: "center",
    },
    // Tag/Chip Stilleri
    tagsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        
        gap: 8,
    },
    tag: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    genreTag: {
        backgroundColor: "#E3F2FD",
        borderWidth: 1,
        borderColor: "#2196F3",
    },
    categoryTag: {
        backgroundColor: "#F3E5F5",
        borderWidth: 1,
        borderColor: "#9C27B0",
    },
    tagText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#333",
    },
    // Alt bilgi satırı
    bottomInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: "#E0E0E0",
        
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    priceLabel: {
        fontSize: 13,
        color: "#666",
        marginRight: 4,
    },
    priceText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2E7D32",
    },
    pageContainer: {
        alignItems: "flex-end",
    },
    pageText: {
        fontSize: 12,
        color: "#888",
        fontStyle: "italic",
    }
});
