import * as yup from "yup";

export const signUpSchema = yup.object({
    userName: yup.string()
        .required("Kullanıcı adı boş bırakılamaz.")
        .min(5, "Kullanıcı adı minimum 5 karakterli olmalı.")
        .max(20, "Kullanıcı adı maksimum 20 karakterli olmalı."),
    mail: yup.string()
        .required("Mail adresi boş bırakılamaz.")
        .email("Geçerli bir mail giriniz."),
    password: yup.string()
        .min(6, "Parola En Az 6 Karakter Olmalıdır")
        .required("Parola Alanı Boş Bırakılamaz")
        .matches(/^(?=.*[a-z])/, "En Az 1 Küçük Harf Olmalıdır")
        .matches(/^(?=.*[A-Z])/, "En Az 1 Büyük Harf Olmalıdır")
        .matches(/^(?=.*[0-9])/, "En Az 1 Rakam Olmalıdır"),
    rePassword: yup.string()
        .oneOf([yup.ref("password"), null], "Parolalar eşleşmiyor.").required("Bu alan boş bırakılamaz.")
});