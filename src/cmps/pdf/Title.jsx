import { StyleSheet, Text } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        textDecoration: 'underline',
        fontWeight: 'bold',
        fontSize: 12
    }
});

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title