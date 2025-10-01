import React from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";
import  styles  from "./InputStyles";



const Input = ({ placeholder, onChangeText, onBlur, value,keyboardType="default",secureTextEntry=false,theme="primary", editable=true, onPressIn }) => {


    
             


    // editable=false olduğunda bazı platformlarda onPressIn tetiklenmeyebilir.
    // Bu durumda TextInput'u dokunulabilir bir sarmalayıcıyla çevreleyip
    // dokunma olayını üstte yakalıyoruz.
    if (editable === false && typeof onPressIn === "function") {
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPressIn} style={styles[theme].input}>
                <View pointerEvents="none">
                    <TextInput
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        style={[styles[theme].input, { margin: 0, borderWidth: 0, borderBottomWidth: 0, backgroundColor: "transparent", width: "100%" }]}
                        onChangeText={onChangeText}
                        onBlur={onBlur}
                        value={value}
                        editable={false}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <TextInput
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                placeholder={placeholder}
                style={styles[theme].input}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                editable={editable}
                onPressIn={onPressIn}
            />

        </>
    )
}

export default Input