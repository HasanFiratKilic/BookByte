import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Button from "../../components/Button/Button";
import { auth } from "../../../firebaseConfig";
import { signOut as firebaseSignOut ,deleteUser as firebaseDeleteUser } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./SettingStyles";


const Setting = () => {
    const navigation = useNavigation()
    
    
    const signOut = () => {
        firebaseSignOut(auth)
            .then(() => {
                navigation.navigate("SingInPage")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deleteUser = () => {
        const user = auth.currentUser;
        if (user) {
            firebaseDeleteUser(user)
                .then(() => {
                    console.log("Kullanıcı başarıyla silindi");
                    navigation.navigate("SingInPage")
                })
                .catch((error) => {
                    console.log("Kullanıcı silme hatası:", error);
                    // Eğer kullanıcı son zamanlarda giriş yapmadıysa, yeniden kimlik doğrulama gerekebilir
                    if (error.code === 'auth/requires-recent-login') {
                        alert('Hesabınızı silmek için lütfen tekrar giriş yapın.');
                    }
                })
        } else {
            console.log("Giriş yapılmış kullanıcı bulunamadı");
        }
    }



    return(
        <View style={styles.container}>
            <Button text="Çıkış Yap" fonk={signOut} />
            <Button text="Hesabımı Sil" theme="delete" fonk={deleteUser} />
            
        </View>
    )
}

export default Setting

