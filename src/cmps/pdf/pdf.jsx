import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import HebrewRegular from "../../assets/fonts/NotoSansHebrew-Regular.ttf"
import HebrewBold from "../../assets/fonts/NotoSansHebrew-Bold.ttf"
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2/Step2';
import Step3 from './Steps/Step3';
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

// Create Document Component
export default function MyDocument() {
    return (
        <PDFViewer style={styles.pdfViewer}>
            <Document style={styles.document}>
                <Step1 />
                <Step2 />
                <Step3 />
            </Document>
        </PDFViewer>
    )
}