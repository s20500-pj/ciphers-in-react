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

    return (<body className="d-flex flex-column min-vh-100">
        <div className={'container'}>
            <form onChange={handleSubmit(onSubmit)}>
                <div className="col-md-4 mb-3">
                    <label htmlFor="exampleFormControlSelect1">Wybierz rodzaj szyfru</label><br/>
                    <select {...register("cipher")}>
                        <option value="morse">morse</option>
                        <option value="affine">affine</option>
                        <option value="vigenere">vigenere</option>
                    </select>
                </div>
            </form>
            <Display values={values}/>

        </div>
        <footer className={'mt-auto mx-auto'}><a className={'link-info display-2 text-decoration-none'}
                                                 href="/about">ABOUT</a></footer>
        </body>
    );
}