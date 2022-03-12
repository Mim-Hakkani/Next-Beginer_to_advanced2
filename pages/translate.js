import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, { useContext, useEffect } from 'react'

export default function Home() {

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, [])

    const googleTranslateElementInit = () => {

        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            // includedLanguages : "en,ms,ta,zh-CN", // include this for selected languages
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element');

    }

    return (
        <div >

            <div id="google_translate_element" > </div>

            <div>
                Welcome to Next JS
            </div>

        </div>
    )
}