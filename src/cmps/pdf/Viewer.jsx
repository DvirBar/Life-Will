import { Document, PDFViewer, Page, StyleSheet, View } from '@react-pdf/renderer'
import React from 'react'
import LifeWillDocument from './pdf'


const styles = StyleSheet.create({
    pdfViewer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        border: "none"
    }
})

function Viewer() {
  return (
    <PDFViewer style={styles.pdfViewer}>
        <LifeWillDocument />
    </PDFViewer>
  )
}

export default Viewer