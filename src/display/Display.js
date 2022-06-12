import React from 'react';
import MoorseDisplay from "./MoorseDisplay";
import AffineDisplay from "./AffineDisplay";
import VigenereDisplay from "./VigenereDisplay";

export default function Display({values}) {

    if (!values) {
        return (
            <div>
                dupa
            </div>
        );
    }
    if (values.cipher==='morse'){
        return (<MoorseDisplay/>)
    }
    else if (values.cipher==='affine'){
        return (<AffineDisplay/>)
    }
    else if (values.cipher==='vigenere'){
        return (<VigenereDisplay/>)
    }
}