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
        <div className={'container'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">Tekst do zaszyfrowania</label>
                    <input className={'form-control form-control-lg'} type="text"
                           placeholder="normalText" {...register("normalText", {required: true})} />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">Klucz/zaszyfrowany tekst</label>
                    <input className={'form-control form-control-lg'} type="text"
                           placeholder="key" {...register("key1", {required: true})} />
                </div>
                <div className="col-md-4 mb-3">
                    <input className={'form-check-input'} {...register("toCode")} type="radio" value="code"/>Szyfruj
                    <input className={'form-check-input'} {...register("toCode")} type="radio" value="decode"/>Deszyfruj
                    <input className={'form-check-input'} {...register("toCode")} type="radio" value="key"/>Zgadnij
                    klucz
                </div>
                <input className={'btn btn-primary'} type="submit"/>
            </form>
            <Vigenere text={values.normalText} toCode={values.toCode} key1={values.key1}/>
        </div>
    );
}