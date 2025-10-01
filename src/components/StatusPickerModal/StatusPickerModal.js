import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput } from "react-native";
import { styles } from "./StatusPickerModalStyles";

const StatusPickerModal = ({ visible, onClose, onSelect, currentValue, title = "Durumu Seç", options, allowCustom = false, onCustomAdd }) => {

    const [showCustomInput, setShowCustomInput] = useState(false);
    const [customValue, setCustomValue] = useState("");

    const defaultOptions = [
        { key: "okundu", label: "Okundu" },
        { key: "okunuyor", label: "Okunuyor" },
        { key: "okunacak", label: "Okunacak" },
    ];

    const renderedOptions = Array.isArray(options) && options.length > 0 ? options : defaultOptions;

    const handleCustomSubmit = () => {
        if (customValue.trim()) {
            if (onCustomAdd) {
                onCustomAdd(customValue.trim());
            }
            setCustomValue("");
            setShowCustomInput(false);
        }
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.backdrop} />
            </TouchableWithoutFeedback>

            <View style={styles.centerContainer}>
                <View style={styles.card}>
                    <Text style={styles.title}>{title}</Text>

                    {renderedOptions.map((opt) => {
                        const isActive = currentValue === opt.key;
                        return (
                            <TouchableOpacity
                                key={opt.key}
                                activeOpacity={0.7}
                                onPress={() => onSelect && onSelect(opt.key)}
                                style={[styles.option, isActive && styles.optionActive]}
                            >
                                <Text style={[styles.optionText, isActive && styles.optionTextActive]}>
                                    {opt.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}

                    {allowCustom && (
                        <>
                            {!showCustomInput ? (
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => setShowCustomInput(true)}
                                    style={[styles.option, styles.customOption]}
                                >
                                    <Text style={[styles.optionText, styles.customOptionText]}>+ Yeni Ekle</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.customInputContainer}>
                                    <TextInput
                                        style={styles.customInput}
                                        placeholder="Yeni değer girin..."
                                        value={customValue}
                                        onChangeText={setCustomValue}
                                        autoFocus
                                    />
                                    <View style={styles.customInputButtons}>
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            onPress={handleCustomSubmit}
                                            style={[styles.customButton, styles.customButtonAdd]}
                                        >
                                            <Text style={styles.customButtonText}>Ekle</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            onPress={() => {
                                                setShowCustomInput(false);
                                                setCustomValue("");
                                            }}
                                            style={[styles.customButton, styles.customButtonCancel]}
                                        >
                                            <Text style={styles.customButtonText}>İptal</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </>
                    )}

                    <TouchableOpacity onPress={onClose} activeOpacity={0.7} style={styles.cancelButton}>
                        <Text style={styles.cancelText}>Vazgeç</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default StatusPickerModal;


