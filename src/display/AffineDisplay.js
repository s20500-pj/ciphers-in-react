import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Affine from "../engine/Affine";

export default function AffineDisplay() {
    const [values, setValues] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(e) {
        setValues(e);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="normalText" {...register("normalText", {required: true})} />
                <input type="number" min="0" max="100" placeholder="3" {...register("key1", {required: true})} />
                <input type="number" min="0" max="100" placeholder="3" {...register("key2", {required: true})} />
                <input {...register("toCode")} type="radio" value="code"/>Szyfruj
                <input {...register("toCode")} type="radio" value="decode"/>Deszyfruj

                <input type="submit"/>
            </form>
            <Affine text={values.normalText} toCode={values.toCode} key1={values.key1} key2={values.key2}/>
        </div>
    );
}