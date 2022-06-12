import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Vigenere from "../engine/Vigenere";

export default function AffineDisplay() {
    const [values, setValues] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(e) {
        setValues(e);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="normalText" {...register("normalText")} />
                <input type="text" placeholder="key" {...register("key1")} />
                <input {...register("toCode")} type="radio" value="code"/>Szyfruj
                <input {...register("toCode")} type="radio" value="decode"/>Deszyfruj

                <input type="submit"/>
            </form>
            <Vigenere text={values.normalText} toCode={values.toCode} key1={values.key1}/>
        </div>
    );
}