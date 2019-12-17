import React from 'react'
import { Formik } from 'formik'
import { FormikBody } from './FormikBody'
export const FormWrapper = () => {
    const handleSubmit = (values) => {
        alert(values);
    }
    const handleValidate = (values) => {
        const errors = {}
        if(!values.user) {
            errors.user = "que escribas un email cojones!!!!"
        }
        return errors;
    }
    return (
        <Formik
            initialValues= {{user: "", lastName: ""}}
            onSubmit={handleSubmit}
            validate={handleValidate}
        >
            <FormikBody />
        </Formik>
    )
}