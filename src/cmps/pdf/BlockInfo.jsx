import { StyleSheet, Text } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#888'
    }
})
function BlockInfo({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

export default BlockInfo