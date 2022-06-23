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
        <div className={'container'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault01">Tekst do zaszyfrowania</label>
                        <input className={'form-control form-control-lg'} type="text"
                               placeholder="normalText" {...register("normalText", {required: true})} />
                    </div>
                    <div className="col-md-4 mb-3">
                        <input className={'form-check-input'} {...register("toCode")} type="radio" value="code"/>Szyfruj
                        <input className={'form-check-input'} {...register("toCode")} type="radio" value="decode"/>Deszyfruj
                    </div>
                    <input className={'btn btn-primary'} type="submit"/>
                </div>
            </form>
            <Moorse text={values.normalText} toCode={values.toCode}/>

        </div>
    );
}