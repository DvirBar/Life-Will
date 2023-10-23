import { StyleSheet, Text } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#aaa',
        flex: 1
    }
})

function MoreNextPage() {
    return (
        <Text style={styles.text}>המשך בעמוד הבא</Text>
    )
}

export default MoreNextPage