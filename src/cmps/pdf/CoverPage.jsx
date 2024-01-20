import React from 'react'
import { Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import coverBackground from "../../assets/images/pdf/coverBackground.png"
import logoImg from "../../assets/images/Logo.png"
import CoverShapesSquares from './SvgImages/CoverShapesSquares'
import data from '../../store'

const absoluteBlockStyle = {
    zIndex: 10,
    position: "absolute",
    display: "flex"
}

const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
    },
    wrapper: {
        position: "relative"
    },
    background: {
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 1,
        opacity: 0.04
    },
    coverShapesSquares: {
        ...absoluteBlockStyle,
        height: 300,
        width:300,
        left: 0,
        bottom: 0,
        paddingBottom: 0,
        justifyContent: "flex-end"
    },
    topLayer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 10,
    },
    yearWrapper: {
        backgroundColor: "#662A68",
        color: "#FFF",
        fontWeight: 800,
        fontSize: 60,
        width: 200,
        height: 90,
        zIndex: 10,
        top: 0,
        left: 70,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 0
    },
    logoWrapper: {
        zIndex: 10,
        display: "flex",
        position: "absolute",
        top: 30,
        right: 30,
        flexDirection: "row-reverse",
        width: 300,
        gap: 10,
        alignItems: "center"

    },
    logoTextWrapper: {
        color: "#662A68",
        position: "relative",
        display: "flex",
        fontSize: 15
    },
    logoImg: {
        position: "relative",
        display: "flex",
        width: 50,
        height: 50
    },
    coverTitleWrapper: {
        ...absoluteBlockStyle,
        top: 300,
        right: 100,
        width: 300,
        color: "#662A68",
    },
    coverTitle: {
        fontSize: 30,
    },
    coverFullName: {
        fontSize: 50
    },
    coverFooter: {
        ...absoluteBlockStyle,
        bottom: 20,
        right: 40,
        color: "#662A68",
        width: 200
    },
    coverSite: {
        fontSize: 20
    },
    coverAddress: {
        fontSize: 25
    },
    coverDate: {
        fontSize: 30
    }
})

const getMonthString = (month) => {
    if(month < 10) {
        return `0${month}`
    }

    return month
}

function CoverPage() {
    const dateNow = new Date();
    const year = dateNow.getFullYear().toString()
    const logoTitle = "Life will - רצון חיים"
    const coverTitle = "צוואת יחיד"
    const fullName = data.first_name + " " + data.last_name
    const site = "www.lifewill.org"
    const address = "שדרות הרצל 131"
    const fullDate = dateNow.getDate() + "." + getMonthString(dateNow.getMonth()+1) + "." + year

  return (
    <Page size="A4" style={styles.page}>
        <View style={styles.logoWrapper}>
            <Image
                style={styles.logoImg}
                src={logoImg}
            />
            <View style={styles.logoTextWrapper}>
                <Text>{logoTitle}</Text>
            </View>
           
        </View>
        <View style={styles.coverTitleWrapper}>
            <Text style={styles.coverTitle}>{coverTitle}</Text>
            <Text style={styles.coverFullName}>{fullName}</Text>
        </View>
        <View style={styles.yearWrapper}>
            <Text>{year}</Text>
        </View>
        <View style={styles.coverFooter}>
            <Text style={styles.coverSite}>{site}</Text>
            <Text style={styles.coverAddress}>{address}</Text>
            <Text style={styles.coverDate}>{fullDate}</Text>
        </View>
        
            
        <View>
            <View style={styles.coverShapesSquares}>
                <CoverShapesSquares />
            </View> 
        </View>
        <Image 
            style={styles.background}
            src={coverBackground}
        />
    </Page>
  )
}

export default CoverPage