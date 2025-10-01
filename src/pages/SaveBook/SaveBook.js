import React, { useEffect, useState } from "react";
import { Text, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StatusPickerModal from "../../components/StatusPickerModal/StatusPickerModal";
import { Formik } from "formik";
import Button from "../../components/Button/Button";
import { styles } from "./SaveBookStyles";
import Input from "../../components/Input/Input";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { database, ref, push, set, child, get } from "../../../firebaseConfig";
import { showMessage, hideMessage } from "react-native-flash-message";
import { addBookSchema } from "../../validation/addBookValidationSchema";


const SaveBook = () => {
    
    const [uid, setUid] = useState("");
    const [customGenres, setCustomGenres] = useState([]);
    const [customCategories, setCustomCategories] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
                loadCustomListsFromStorage(user.uid);
            }
        });


        return () => unsubscribe();
    }, []);

    const storageKeys = (userId) => ({
        genres: `custom_genres_${userId}`,
        categories: `custom_categories_${userId}`,
    });

    const loadCustomListsFromStorage = async (userId) => {
        try {
            const keys = storageKeys(userId);
            const [g, c] = await Promise.all([
                AsyncStorage.getItem(keys.genres),
                AsyncStorage.getItem(keys.categories),
            ]);
            if (g) {
                const parsed = JSON.parse(g);
                if (Array.isArray(parsed)) setCustomGenres(parsed);
            }
            if (c) {
                const parsed = JSON.parse(c);
                if (Array.isArray(parsed)) setCustomCategories(parsed);
            }
        } catch (_) { }
    };

    const saveGenresToStorage = async (userId, list) => {
        try {
            const keys = storageKeys(userId);
            await AsyncStorage.setItem(keys.genres, JSON.stringify(list));
        } catch (_) { }
    };

    const saveCategoriesToStorage = async (userId, list) => {
        try {
            const keys = storageKeys(userId);
            await AsyncStorage.setItem(keys.categories, JSON.stringify(list));
        } catch (_) { }
    };

    const addCustomGenre = (genre) => {
        const newGenre = { key: genre.toLowerCase().replace(/\s+/g, '-'), label: genre };
        setCustomGenres(prev => {
            const next = [...prev.filter(g => g.key !== newGenre.key), newGenre];
            if (uid) saveGenresToStorage(uid, next);
            return next;
        });
    };

    const addCustomCategory = (category) => {
        const newCategory = { key: category.toLowerCase().replace(/\s+/g, '-'), label: category };
        setCustomCategories(prev => {
            const next = [...prev.filter(c => c.key !== newCategory.key), newCategory];
            if (uid) saveCategoriesToStorage(uid, next);
            return next;
        });
    };

    const saveBookData = (uid, values) => {
        if (!uid) {
            Alert.alert("Hata", "Kullanıcı kimliği bulunamadı. Lütfen giriş yapın.");
            return;
        }

        const userBooksRef = ref(database, "books/" + uid);

        // Önce aynı isim + yazar kombinasyonu var mı kontrol et
        get(userBooksRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const books = snapshot.val();
                    const alreadyExists = Object.values(books).some(
                        (book) =>
                            book.name.toLowerCase().trim() === values.bookName.toLowerCase().trim() &&
                            book.author.toLowerCase().trim() === values.author.toLowerCase().trim()
                    );

                    if (alreadyExists) {
                        showMessage({
                            message: "Bu kitap zaten kayıtlı!",
                            type: "danger",
                        });
                        return;
                    }
                }

                // Yoksa yeni kitap ekle
                const newBookRef = push(userBooksRef);
                set(newBookRef, {
                    name: values.bookName,
                    genre: values.bookGenre,
                    author: values.author,
                    price: values.price,
                    status: values.status,
                    category:values.category,
                    createdAt: new Date().toISOString(),
                })
                    .then(() => {
                        showMessage({
                            message: "Kayıt Başarılı",
                            type: "success",
                        });
                    })
                    .catch((error) => {
                        Alert.alert("Hata", "Kitap eklenirken bir hata oluştu: " + error.message);
                    });
            })
            .catch((error) => {
                Alert.alert("Hata", "Kitap kontrolü yapılırken bir hata oluştu: " + error.message);
            });
    };

    return (
        <Formik
            validationSchema={addBookSchema}
            initialValues={{ bookName: "", bookGenre: "", author: "", price: "",category:"",status:"", statusModalVisible: false, categoryModalVisible: false, genreModalVisible: false }}
            onSubmit={(values, { resetForm }) => {
                saveBookData(uid, values);
                resetForm();
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                <View style={styles.container}>
                    <View style={styles.body}>
                        <Text style={styles.label}>İsim</Text>
                        <Input
                            onChangeText={handleChange("bookName")}
                            onBlur={handleBlur("bookName")}
                            value={values.bookName}
                            theme="secondary"
                        />

                    </View>
                    {errors.bookName && touched.bookName &&
                        <Text style={styles.errorText}>{errors.bookName}</Text>
                    }
                    <View style={styles.body}>
                        <Text style={styles.label}>Türü</Text>
                        <Input
                            onChangeText={handleChange("bookGenre")}
                            onBlur={handleBlur("bookGenre")}
                            value={values.bookGenre}
                            theme="secondary"
                            editable={false}
                            onPressIn={() => setFieldValue("genreModalVisible", true)}
                        />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.label}>Kategori</Text>
                        <Input
                            onChangeText={handleChange("category")}
                            onBlur={handleBlur("category")}
                            value={values.category}
                            theme="secondary"
                            editable={false}
                            onPressIn={() => setFieldValue("categoryModalVisible", true)}
                        />

                    </View>
                    <View style={styles.body}>
                        <Text style={styles.label}>Yazarı</Text>
                        <Input
                            onChangeText={handleChange("author")}
                            onBlur={handleBlur("author")}
                            value={values.author}
                            theme="secondary"
                        />

                    </View>
                    {errors.author && touched.author &&
                        <Text style={styles.errorText}>{errors.author}</Text>
                    }
                    <View style={styles.body}>
                        <Text style={styles.label}>Fiyatı</Text>
                        <Input
                            onChangeText={handleChange("price")}
                            onBlur={handleBlur("price")}
                            value={values.price}
                            theme="secondary"
                            keyboardType="numeric"
                        />
                    </View>
                    {errors.price && touched.price &&
                        <Text style={styles.errorText}>{errors.price}</Text>
                    }
                    <View style={styles.body}>
                        <Text style={styles.label}>Durumu</Text>
                        <Input
                            onChangeText={handleChange("status")}
                            onBlur={handleBlur("status")}
                            value={values.status}
                            theme="secondary"
                            editable={false}
                            onPressIn={() => setFieldValue("statusModalVisible", true)}
                        />

                    </View>
                    <Button text={"Kaydet"} fonk={handleSubmit} />
                    <StatusPickerModal
                        visible={values.statusModalVisible === true}
                        onClose={() => setFieldValue("statusModalVisible", false)}
                        currentValue={values.status}
                        onSelect={(val) => {
                            setFieldValue("status", val);
                            setFieldValue("statusModalVisible", false);
                        }}
                    />

                    <StatusPickerModal
                        visible={values.genreModalVisible === true}
                        onClose={() => setFieldValue("genreModalVisible", false)}
                        currentValue={values.bookGenre}
                        title="Tür Seç"
                        options={[
                            { key: "roman", label: "Roman" },
                            { key: "hikaye", label: "Hikaye" },
                            { key: "siir", label: "Şiir" },
                            { key: "tarih", label: "Tarih" },
                            { key: "bilim", label: "Bilim" },
                            ...customGenres,
                        ]}
                        allowCustom={true}
                        onCustomAdd={addCustomGenre}
                        onSelect={(val) => {
                            setFieldValue("bookGenre", val);
                            setFieldValue("genreModalVisible", false);
                        }}
                    />

                    <StatusPickerModal
                        visible={values.categoryModalVisible === true}
                        onClose={() => setFieldValue("categoryModalVisible", false)}
                        currentValue={values.category}
                        title="Kategori Seç"
                        options={[
                            { key: "edebiyat", label: "Edebiyat" },
                            { key: "kisisel-gelisim", label: "Kişisel Gelişim" },
                            { key: "cocuk", label: "Çocuk" },
                            { key: "is-dunya", label: "İş Dünyası" },
                            { key: "teknoloji", label: "Teknoloji" },
                            ...customCategories,
                        ]}
                        allowCustom={true}
                        onCustomAdd={addCustomCategory}
                        onSelect={(val) => {
                            setFieldValue("category", val);
                            setFieldValue("categoryModalVisible", false);
                        }}
                    />

                </View>
            )}
        </Formik>
    );
};

export default SaveBook;