import React from 'react';
import Moorse from "./Moorse";


export default function Display({values}) {

    if (!values) {
        return (
            <div>
                dupa
            </div>
        );
    }
    if (values.cipher==='morse'){
        return (<Moorse text={values.normalText} toCode={values.toCode}/>)
    }
    else if (values.cipher==='affine'){
        return (<Moorse text={values.normalText} toCode={values.toCode}/>)
    }
    else if (values.cipher==='vigenere'){
        return (<Moorse text={values.normalText} toCode={values.toCode}/>)
    }
}
