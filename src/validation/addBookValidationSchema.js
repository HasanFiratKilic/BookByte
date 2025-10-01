import * as yup from 'yup';

export const addBookSchema = yup.object().shape({
    bookName:yup.string().required("Bu alan zorunludur."),
    author:yup.string().required("Bu alan zorunludur."),
    price:yup.number().typeError("Bu alana sadece rakam giriniz.")
})