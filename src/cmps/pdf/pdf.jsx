import React from 'react';
import { Document, StyleSheet, Font } from '@react-pdf/renderer';
import HebrewRegular from "../../assets/fonts/NotoSansHebrew-Regular.ttf"
import HebrewBold from "../../assets/fonts/NotoSansHebrew-Bold.ttf"
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Step6 from './Steps/Step6';
import CoverPage from './CoverPage';
// import Page1 from './Page1';

Font.register({
    family: 'NotoSansHebrew',
    fonts: [
        {
            src: HebrewRegular
        },
        {
            src: HebrewBold,
            fontWeight: 'bold'
        }
    ]
})

// Create styles
const styles = StyleSheet.create({
    pdfViewer: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    document: {
        direction: 'rtl',
        textAlign: 'right',
        fontFamily: 'NotoSansHebrew',
        fontSize: 11
    },
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        gap: 10
    },
    title: {
        textAlign: 'center',
        textDecoration: 'underline',
        fontWeight: 'bold'
    },
    question: {
        fontWeight: 'bold'
    },
});

export const hebrewBirthDateString = (day, month, year) => {
    if (day && month && year) {
        return `${day} ב${month}, ${year}`
    }

    return ''
}

// Create Document Component
export default function LifeWillDocument() {
    return (
        <Document style={styles.document}>
            <CoverPage />
            <Step1 />
            {/* <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
            <Step6 /> */}
        </Document>
    )
}