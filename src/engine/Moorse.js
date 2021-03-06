import React from 'react';

export default function Moorse({text, toCode}) {

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\n"];
    const symbols = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "^", "\n"];

    if (toCode === 'code') {
        let txt = text.trim().toUpperCase().split(""),
            code = "";
        for (let i in txt) {
            code += symbols[letters.indexOf(txt[i])] + " ";
        }
        return (<div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Wynik</label>
            <input className={'form-control form-control-lg'} type="text" value={code}/>
        </div>)

    } else if (toCode === 'decode') {
        let code = text.trim().replace(/_|¯|—|–/g, "-").split(" "),
            txt = "";

        for (let i in code) {
            txt += letters[symbols.indexOf(code[i])];
        }
        return (<div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Wynik</label>
            <input className={'form-control form-control-lg'} type="text" value={txt}/>
        </div>)
    }
}
