import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import { styles } from "./SignInStyles";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { signInSchema } from "../../validation/signInValidationSchema";
import { auth } from "../../../firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth";
import { showMessage, hideMessage } from "react-native-flash-message";
import authErrorMassageParser from "../../utile/authErrorMassageParser";
const SignIn = () => {

  const navigation = useNavigation();

  const signIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        showMessage({
          message: "Giriş işlemi başarılı.",
          type: "success",
        });

        navigation.reset({
          index: 0,
          routes: [{ name: 'LibraryPage' }],
        });

        //navigation.navigate("LibraryPage")
        // ...
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
      validationSchema={signInSchema}
      initialValues={{ userName: "", password: "" }}
      onSubmit={values => signIn(values.userName, values.password)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
        <View style={styles.container}>

          <View style={styles.logo_container}>
            <Logo />
          </View>

          <View style={styles.body}>

            <Input placeholder={"Kullanıcı Adı"}
              onChangeText={handleChange("userName")}
              onBlur={handleBlur("userName")}
              value={values.userName}
            />
            {errors.userName && touched.userName &&
              <Text style={styles.errorText}>{errors.userName}</Text>
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
            <Button fonk={handleSubmit} text={"Giriş Yap"} disabled={!isValid} />

            <View style={styles.signUp_link_container}>
              <Text style={styles.question_text}>Hesabın mı yok?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SingUpPage')}><Text style={styles.singUp_link_text}>Kayıt Ol</Text></TouchableOpacity>
            </View>

          </View>

        </View>
      )}

    </Formik>

  );
}

export default SignIn;

