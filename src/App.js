import React, {useState, useEffect} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Display from "./display/Display";
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './components/Error';
import About from './components/About';
import Index from './components/Index';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Index/>}/>
                <Route path="/about" exact element={<About/>}/>
                <Route path="*" exact element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}