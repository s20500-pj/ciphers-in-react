import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Moorse from "../engine/Moorse";

export default function MoorseDisplay() {
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
                <input {...register("toCode")} type="radio" value="code"/>Szyfruj
                <input {...register("toCode")} type="radio" value="decode"/>Deszyfruj

                <input type="submit"/>
            </form>
            <Moorse text={values.normalText} toCode={values.toCode}/>
        </div>
    );
}