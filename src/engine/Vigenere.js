import React from 'react';

const {encrypt} = require('vigenere-cipher');
const {decrypt} = require('vigenere-cipher');
const {getEncryptionKeys} = require('vigenere-cipher');

export default function Vigenere({text, toCode, key1}) {
    if (toCode === 'code') {
        return (<div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Wynik</label>
            <input className={'form-control form-control-lg'} type="text" value={encrypt(text, key1)}/>
        </div>)
    } else if (toCode === 'decode') {
        return (<div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Wynik</label>
            <input className={'form-control form-control-lg'} type="text" value={decrypt(text, key1)}/>
        </div>)
    } else if (toCode === 'key') {
        return (<div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Znaleziony klucz</label>
            <input className={'form-control form-control-lg'} type="text" value={getEncryptionKeys(text, key1)}/>
        </div>)
    }
}