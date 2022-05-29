import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Display from "./Display";

export default function App() {
    const [values, setValues] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(e) {
        setValues(e);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="normalText" {...register("normalText", {
                    required: true,
                    maxLength: 255
                })} />
                <input type="text" placeholder="codedText" {...register("codedText", {})} />
                <select {...register("cipher")}>
                    <option value="morse">morse</option>
                    <option value="affine">affine</option>
                    <option value="vigenere">vigenere</option>
                </select>

                <input {...register("toCode")} type="radio" value="code"/>Szyfruj
                <input {...register("toCode")} type="radio" value="decode"/>Deszyfruj

                <input type="submit"/>
            </form>
            <Display values={values}/>
        </div>
    );
}