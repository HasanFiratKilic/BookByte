import React, { useState } from "react";
import { Text, View, TouchableWithoutFeedback, Alert } from "react-native";
import { styles } from "./BookCardStyles";
import AlertCard from "../AlertCard/AlertCard";
import { useNavigation } from "@react-navigation/native";

const BookCard = ({ item, deleteBook }) => {

    const navigation = useNavigation()
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const capitalizedBookName = item.name.charAt(0).toUpperCase() + item.name.slice(1);

    // Durum rengini belirleme fonksiyonu
    const getStatusColor = (status) => {
        switch (status) {
            case 'okunuyor':
                return '#FFA500'; // Turuncu
            case 'okundu':
                return '#4CAF50'; // Yeşil
            case 'okunacak':
                return '#2196F3'; // Mavi
            default:
                return '#9E9E9E'; // Gri
        }
    };

    
    const getStatusText = (status) => {
        switch (status) {
            case 'okunuyor':
                return 'Okunuyor';
            case 'okundu':
                return 'Okundu';
            case 'okunacak':
                return 'Okunacak';
            default:
                return 'Belirtilmemiş';
        }
    };

    const handleAlert = () => {
        setIsAlertVisible(!isAlertVisible);
    }


    const handleLongPress = () => {
        console.log("Long press triggered");
        handleAlert();
    }

    const handleCloseModal = () => {
        setIsAlertVisible(false);
    }

    const handleDelete = () => {
        deleteBook(item.id);
        setIsAlertVisible(false);
    }

    return (
        <>
            <TouchableWithoutFeedback onLongPress={handleLongPress} onPress={()=>navigation.navigate("BookUpdatePage",item)}>
                <View style={styles.container}>


                    <View style={styles.contentContainer}>
                        <Text style={styles.nameText}>{capitalizedBookName}</Text>
                        <Text style={styles.authorText}>📚 {item.author}</Text>

                        {/* Kategori ve Tür bilgileri - Chip tasarımı */}

                        <View style={styles.tagsContainer}>
                            {item.genre && (
                                <View style={[styles.tag, styles.genreTag]}>
                                    <Text style={styles.tagText}>🏷️ {item.genre}</Text>
                                </View>
                            )}

                            {item.category && (
                                <View style={[styles.tag, styles.categoryTag]}>
                                    <Text style={styles.tagText}>📖 {item.category}</Text>
                                </View>
                            )}
                        </View>

                        {/* Alt bilgi satırı */}
                        <View style={styles.bottomInfo}>
                            <View style={styles.priceContainer}>
                                <Text style={styles.priceLabel}>💰 Fiyat:</Text>
                                <Text style={styles.priceText}>{item.price} TL</Text>
                            </View>

                            {/* Durum Badge'i  */}
                            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
                                <Text style={styles.statusText}>
                                    {getStatusText(item.status)}
                                </Text>
                            </View>

                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <AlertCard
                isAlertVisible={isAlertVisible}
                onClose={handleCloseModal}
                onDelete={handleDelete}
            />
        </>
    );
}

export default BookCard;
