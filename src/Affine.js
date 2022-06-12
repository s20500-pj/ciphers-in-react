import React from 'react';

const M = 26;
const ordArray = "abcdefghijklmnopqrstuvwxyz".split("");
const numArray = "1234567890".split("");

function checkCoprime(a, b) {
    for (let i = 2; i < b; i++) {
        if (a % i === 0 && b % i === 0) {
            return true;
        }
    }
}

export const encode = (phrase, a, b) => {
    let result = "";
    let resultArray = [];
    if(checkCoprime(a, M)){
        return "Error: klucz a musi być liczbą pierwszą"
    }
    for (const ele of phrase) {
        if (numArray.includes(ele)) {
            result += ele;
        }
        if (ordArray.includes(ele.toLowerCase())) {
            const cipherOrd =
                (a * ordArray.indexOf(ele.toLowerCase()) + b) % M;
            result += ordArray[cipherOrd];
        }
        if (result.length === 5) {
            resultArray.push(result);
            result = "";
        }
    }
    if (result) {
        resultArray.push(result);
    }
    return resultArray.join(" ");
};

function calculateMMI(a) {
    let n = 1;

    while (true) {
        if ((a * n) % M === 1) {
            return n;
        }
        n++;
    }
}

export const decode = (phrase, a, b) => {
    let result = "";
    if(checkCoprime(a, M)){
        return "Error: klucz a musi być liczbą pierwszą"
    }
    for (const ele of phrase) {
        if (numArray.includes(ele)) {
            result += ele;
        }
        if (ordArray.includes(ele.toLowerCase())) {
            let cipher =
                calculateMMI(a) * (ordArray.indexOf(ele.toLowerCase()) - b);
            if (cipher < 0) {
                while (cipher < 0) {
                    cipher += M;
                }
            }
            let cipherOrd = cipher % M;
            result += ordArray[cipherOrd];
        }
    }
    return result;
};
export default function Affine({text, toCode, key1, key2}) {
    if (toCode === 'code') {
        return (<input type="text" value={encode(text, parseInt(key1), parseInt(key2))}/>)
    } else if (toCode === 'decode') {
        return (<input type="text" value={decode(text, parseInt(key1), parseInt(key2))}/>)
    }
}
