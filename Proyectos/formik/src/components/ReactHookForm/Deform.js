import React from 'react';
import { useForm } from "react-hook-form";

import "../../styles/Form.css";

const Deform = () => {
    const { handleSubmit, } = useForm();

    const onSubmit = (values) => {
        alert(JSON.stringify(values));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                name="name" 
                ref={register({})}
                />
        </form>
    )
}