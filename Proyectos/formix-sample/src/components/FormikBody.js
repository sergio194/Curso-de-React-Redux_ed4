import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

const FormikBody = () => {
    let btnRef = React.createRef();
    function handleClick() {
        console.log(btnRef);
        console.log(btnRef.current);
        
        btnRef.current.focus()
    }
    return (
        <Form>
            <h1 onClick={handleClick}>A mor form es Dani</h1>
            <ErrorMessage className="form-error" name="user" component="div"/>
            <Field innerRef={btnRef} name="user" type="email" placeholder="email@blabla"/>
            <ErrorMessage className="form-error" name="lastName" component="div" />
            <Field name="lastName" type="text" />
            <button ref={btnRef} type="submit">Te pires!</button>
        </Form>
      )
};

export { FormikBody };
