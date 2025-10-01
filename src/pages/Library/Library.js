import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import AddBookButton from "../../components/AddBookButton/AddBookButton";
import { database, ref, onValue, auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import BookCard from "../../components/BookCard/BookCard";
import Input from "../../components/Input/Input";
import { remove } from "firebase/database";
import FilterButton from "../../components/FilterButton/FilterButton";
import FilterCard from "../../components/FilterCard/FilterCard";
import { styles } from "./LibraryStyles";

const Library = () => {
    const [uid, setUid] = useState("");
    const [books, setBooks] = useState([]);
    const [searchBook, setSearchBook] = useState("");
    const [modelIsVisible, setModelIsVisible] = useState(false);
    const [filters, setFilters] = useState({ author: "", category: "", status: "" });

    // Kullanıcının sayfa ilk açıldığında uid sini alır ve kullanıcının kayıtlı kitaplarını çeken fonksiyonu çalıştırır.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
                getBooks(user.uid);
            }
        });

        return () => unsubscribe();
    }, []);

    // Firebase'den verileri çekme
    const getBooks = (userId) => {
        const userBooksRef = ref(database, "books/" + userId);
        onValue(userBooksRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const booksArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setBooks(booksArray);
            } else {
                setBooks([]);
            }
        });
    };

    // Çekilen kitap verilerinin ekranda nasıl görüneceğinin belirleyen component
    const bookCardRender = ({ item }) => {
        return <BookCard item={item} deleteBook={deleteBook} />;
    };

    // Hem arama hem de filtreleme için birleştirilmiş fonksiyon
    const filteredBooks = books.filter((book) => {
        // Arama filtresi
        const searchMatch = book.name?.toLowerCase().includes(searchBook.toLowerCase());
        
        // Filtreler - sadece dolu olan filtreleri uygula
        const authorMatch = !filters.author || book.author?.toLowerCase().includes(filters.author.toLowerCase());
        const categoryMatch = !filters.category || book.category?.toLowerCase().includes(filters.category.toLowerCase());
        const statusMatch = !filters.status || book.status === filters.status;
        
        return searchMatch && authorMatch && categoryMatch && statusMatch;
    });

    // Kitap silme
    const deleteBook = (bookId) => {
        if (!uid) return;
        const bookRef = ref(database, "books/" + uid + "/" + bookId);
        remove(bookRef).catch(() => { });
    };

    const handleFilterVisible = () => {
        setModelIsVisible(!modelIsVisible);
    };

    const handleCloseModal = () => {
        setModelIsVisible(false);
    };

    // Filtreleri uygula fonksiyonu
    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
        setModelIsVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Input
                    placeholder={"Ara..."}
                    value={searchBook}
                    onChangeText={setSearchBook}
                />
                <FilterButton onPress={handleFilterVisible}/>
            </View>

            <FlatList
                data={filteredBooks}
                keyExtractor={(item) => item.id}
                renderItem={bookCardRender}
                ListEmptyComponent={<Text>Hiç kitap yok.</Text>}
            />

            <AddBookButton />
            <FilterCard 
                isVisible={modelIsVisible} 
                onClose={handleCloseModal} 
                books={books} 
                onApplyFilters={handleApplyFilters} // Yeni prop
                currentFilters={filters} // Mevcut filtreleri gönder
            />
        </View>
    );
};

export default Library;