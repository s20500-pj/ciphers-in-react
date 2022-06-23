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
        <div className={'container'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">Tekst do zaszyfrowania</label>
                    <input type="text" className={'form-control form-control-lg'} placeholder={'normalText'}
                           aria-rowcount={5} {...register("normalText", {required: true})} />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">Klucz 1</label>
                    <input type="number" className={'form-control form-control-lg'} min="0" placeholder={'3'}
                           max="100" {...register("key1", {required: true})} />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">Klucz 2</label>
                    <input type="number" className={'form-control form-control-lg'} min="0" placeholder={'3'}
                           max="100" {...register("key2", {required: true})} />
                </div>
                <div className="col-md-4 mb-3">
                    <input className={'form-check-input'} {...register("toCode")} type="radio" value="code"/>Szyfruj
                    <input className={'form-check-input'} {...register("toCode")} type="radio" value="decode"/>Deszyfruj
                </div>
                <input className={'btn btn-primary'} type="submit"/>
            </form>
            <Affine text={values.normalText} toCode={values.toCode} key1={values.key1} key2={values.key2}/>
        </div>
    );
}