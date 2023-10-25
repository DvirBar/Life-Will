import { StyleSheet, Text } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    title: {
        textDecoration: 'underline',
        fontWeight: 'bold',
        fontSize: 12
    }
});

function Subtitle({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Subtitle