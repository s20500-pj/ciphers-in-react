import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Display from "./display/Display";

export default function App() {
    const [values, setValues] = useState({cipher: 'morse'});
    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(e) {
        setValues(e);
    }

    return (
        <div>
            <form onChange={handleSubmit(onSubmit)}>
                <select {...register("cipher")}>
                    <option value="morse">morse</option>
                    <option value="affine">affine</option>
                    <option value="vigenere">vigenere</option>
                </select>
            </form>
            <Display values={values}/>
        </div>
    );
}