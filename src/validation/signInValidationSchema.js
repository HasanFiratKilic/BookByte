import * as yup from 'yup';

export const signInSchema = yup.object().shape({
    userName:yup.string().required("Kullanıcı adı boş bırakılamaz."),
    password:yup.string().required("Parola boş bırakılamaz.").min(8,"En az 8 karakter olmalı")
})