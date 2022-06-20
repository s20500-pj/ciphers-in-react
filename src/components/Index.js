import React, {useState, useEffect} from 'react';
import Display from "../display/Display";
import {useForm} from "react-hook-form";

export default function Index() {
    const [values, setValues] = useState({cipher: 'morse'});
    const {register, handleSubmit, formState: {errors}} = useForm();

    useEffect(() => {
        document.title = values.cipher;
    });

    function onSubmit(e) {
        setValues(e);
    }

    return (
        <div>
            <form className="form-select" aria-label="Default select example" onChange={handleSubmit(onSubmit)}>
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