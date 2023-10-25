import { StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'


function TableCell({ children, outerStyles, size }) {

    const styles = StyleSheet.create({
        cell: {
            padding: 5,
            textAlign: "center",
            flex: size ? `0 0 ${size}px` : 1,
            ...outerStyles
        },

    })
    return (
        <View style={styles.cell}>
            <Text>
                {children}
            </Text>
        </View>
    )
}

export default TableCell