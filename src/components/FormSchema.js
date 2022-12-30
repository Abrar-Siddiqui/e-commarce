import * as Yup from 'yup'

export const  FormSchema = Yup.object({
    name:Yup.string().min(3,"Too Short").max(10,"Too Long").required("Name is Must"),
    email:Yup.string().email().required("Email is Must.")
});