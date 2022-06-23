import React from 'react';

function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i)
}

function isUpperCase(character) {
    if (character === character.toUpperCase()) {
        return true
    }
    if (character === character.toLowerCase()) {
        return false
    }
}

function encode(message, key) {
    let result = ''

    for (let i = 0, j = 0; i < message.length; i++) {
        const c = message.charAt(i)
        if (isLetter(c)) {
            if (isUpperCase(c)) {
                result += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65) // A: 65
            } else {
                result += String.fromCharCode((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97) // a: 97
            }
        } else {
            result += c
        }
        j = ++j % key.length
    }
    return result
}

function decode(message, key) {
    let result = ''

    for (let i = 0, j = 0; i < message.length; i++) {
        const c = message.charAt(i)
        if (isLetter(c)) {
            if (isUpperCase(c)) {
                result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
            } else {
                result += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
            }
        } else {
            result += c
        }
        j = ++j % key.length
    }
    return result
}

export default function Vigenere({text, toCode, key1}) {
    if (toCode === 'code') {
        return (<div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Wynik</label>
            <input className={'form-control form-control-lg'} type="text" value={encode(text, key1)}/>
        </div>)
    } else if (toCode === 'decode') {
        return (<div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Wynik</label>
            <input className={'form-control form-control-lg'} type="text" value={decode(text, key1)}/>
        </div>)
    }
}