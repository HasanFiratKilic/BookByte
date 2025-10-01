import React from "react";
import { Text, View } from "react-native"
import { showMessage, hideMessage } from "react-native-flash-message";
import { styles } from "./SignUpStyles";
import { Formik } from "formik";
import { signUpSchema } from "../../validation/signUpValidationSchema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import authErrorMassageParser from "../../utile/authErrorMassageParser";

const SignUp = () => {

    const navigation = useNavigation()


    const createNewUser = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                showMessage({
                    message: "Kayıt Başarılı",
                    type: "success",
                });
                navigation.goBack()

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                showMessage({
                    message: authErrorMassageParser(error.code),
                    type: "danger",
                });
            });
    }


    return (
        <Formik
            validationSchema={signUpSchema}
            initialValues={{ userName: "", password: "", mail: "", rePassword: "" }}
            onSubmit={values => createNewUser(values.mail, values.password)}>

            {({ handleChange, handleBlur, handleSubmit, values, isValid, touched, errors }) => (
                <View style={styles.container}>
                    <Input placeholder={"Kullanıcı Adı"}
                        onChangeText={handleChange("userName")}
                        onBlur={handleBlur("userName")}
                        value={values.userName}
                    />
                    {errors.userName && touched.userName &&
                        <Text style={styles.errorText}>{errors.userName}</Text>
                    }
                    <Input placeholder={"Mail Adresi"}
                        onChangeText={handleChange("mail")}
                        onBlur={handleBlur("mail")}
                        value={values.mail}
                        keyboardType="email-address"
                    />
                    {errors.mail && touched.mail &&
                        <Text style={styles.errorText}>{errors.mail}</Text>
                    }
                    <Input placeholder={"Parola"}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        secureTextEntry={true}
                    />
                    {errors.password && touched.password &&
                        <Text style={styles.errorText}>{errors.password}</Text>
                    }
                    <Input placeholder={"Parola Tekrar"}
                        onChangeText={handleChange("rePassword")}
                        onBlur={handleBlur("rePassword")}
                        value={values.rePassword}
                        secureTextEntry={true}
                    />
                    {errors.rePassword && touched.rePassword &&
                        <Text style={styles.errorText}>{errors.rePassword}</Text>
                    }
                    <Button text={"Kayıt Ol"} fonk={handleSubmit} />
                </View>
            )}
        </Formik>
    )
}

export default SignUp