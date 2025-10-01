import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
import { styles } from "./AlertCardStyles";


const AlertCard = ({isAlertVisible, onClose, onDelete}) => {
    return (
        <Modal isVisible={isAlertVisible} onBackdropPress={onClose}>
            <View style={styles.container}>
                <Text style={styles.title}>Kitap Silme Onayı</Text>
                <Text style={styles.message}>Bu kitabı silmek istediğinizden emin misiniz?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.cancelButton}
                        onPress={onClose}
                    >
                        <Text style={styles.buttonText}>Vazgeç</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.deleteButton}
                        onPress={onDelete}
                    >
                        <Text style={styles.buttonText}>Sil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default AlertCard;