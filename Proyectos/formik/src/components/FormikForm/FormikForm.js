import React from 'react';
import { Formik } from 'formik';
import { FormikBody } from "./FormikBody";
import initialFormValues from '../../assets/FormikAssets/initialFormValues';
import formValidation from '../../assets/FormikAssets/formValidation';
import useFormSubmit from '../../assets/useFormSubmit';

import "../../styles/Form.css";

const FormikForm = () => {
  const handleSubmit = useFormSubmit();

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        validate={formValidation}
        onSubmit={handleSubmit}
      >
        <FormikBody />
      </Formik>
    </div>
  )
};

export { FormikForm };
