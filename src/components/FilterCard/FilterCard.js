import React, { useState } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./FilterCardStyles";
import FilterCategoricalButton from "../FiterCategoricalButton/FiterCategoricalButton";
import Button from "../Button/Button";
import FilterOptions from "../FilterOptions/FilterOptions";
import FilterPickerModal from "../FilterPickerModal/FilterPickerModal";

const FilterCard = ({ isVisible, onClose, books, onApplyFilters, currentFilters }) => {
    const [optionsIsVisible, setOptionsIsVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [options, setOptions] = useState([]);
    const [title, setTitle] = useState("");
    const [currentFilterType, setCurrentFilterType] = useState("");
    const [chosens, setChosens] = useState(currentFilters); // Mevcut filtrelerle başlat

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const handleSelect = (filterType, title) => {
        setCurrentFilterType(filterType);
        
        if (books && Array.isArray(books)) {
            const options = books.map(book => {
                const value = book[filterType];
                return value && value.trim() !== "" ? value : null;
            });

            const filteredOptions = options.filter(option => option !== null);
            const uniqueOptions = new Set(filteredOptions);
            const uniqueOptionsArray = Array.from(uniqueOptions);

            setOptions(uniqueOptionsArray);
            setIsModalVisible(true);
            setTitle(title);
        } else {
            console.error("Books tanımsız veya bir dizi değil");
        }
    };

    // Seçilen option'ı chosens state'ine kaydet
    const handleOptionSelect = (selectedOption) => {
        setChosens(prevState => ({
            ...prevState,
            [currentFilterType]: selectedOption
        }));
        closeModal();
    };

    // Filtreleri temizle
    const handleClearFilters = () => {
        const clearedFilters = { author: "", category: "", status: "" };
        setChosens(clearedFilters);
        onApplyFilters(clearedFilters);
    };

    // Filtreleri uygula
    const handleApply = () => {
        onApplyFilters(chosens);
    };

    return (
        <Modal style={styles.modalContainer} isVisible={isVisible} onBackdropPress={onClose}>
            <View style={styles.container}>
                <FilterCategoricalButton
                    onPress={() => handleSelect("author", "Yazarlar")}
                    text={"Yazar"}
                    selectedValue={chosens.author} // Seçilen değeri göster
                />
                <FilterCategoricalButton
                    onPress={() => handleSelect("category", "Kategoriler")}
                    text={"Kategori"}
                    selectedValue={chosens.category}
                />
                <FilterCategoricalButton
                    onPress={() => handleSelect("status", "Okunma Durumları")}
                    text={"Okuma Durumu"}
                    selectedValue={chosens.status}
                />

                {optionsIsVisible && <FilterOptions />}

                <View style={styles.buttonContainer}>
                    <Button 
                        text={"Filtreleri Temizle"} 
                        fonk={handleClearFilters}
                        theme="secondary"
                    />
                    <Button 
                        text={"Filtreyi Uygula"} 
                        fonk={handleApply}
                    />
                </View>
            </View>

            <FilterPickerModal
                isVisible={isModalVisible}
                onBackdropPress={closeModal}
                options={options}
                title={title}
                onOptionSelect={handleOptionSelect}
            />
        </Modal>
    );
};

export default FilterCard;