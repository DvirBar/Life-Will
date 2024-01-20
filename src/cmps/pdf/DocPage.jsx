import { Page, StyleSheet, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF',
        display: "flex",
        flexDirection: "row",
        position: "relative",
    },
    content: {
        margin: 10,
        padding: 10,
        paddingTop: 150,
        flexGrow: 1,
        gap: 10
    },
    logoWrapper: {
        width: 100,
        height: 130,
        position: "absolute",
        display: "flex",
        zIndex: 10,
        top: 0,
        right: 60,
        backgroundColor: "#EAF1FF",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    topBar: {
        zIndex: 1,
        position: "absolute",
        display: "flex",
        width: "100%",
        height: 25,
        backgroundColor: "#8E40A2",
    },
    section: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        width: "100%"
    }
});

function DocPage({ children }) {
    return (
        <Page wrap size="A4" style={styles.page}>
            <View style={styles.logoWrapper} />
            <View style={styles.topBar} />
            <View style={styles.content}>
                {children}
            </View>
    
        </Page>
    )
}

export default DocPage