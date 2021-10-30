import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Header() {

    return (
        <View style={styles.header} >
            <Image style={styles.headerLogo} source={require('../assets/spacex.png')} />
            <View style={styles.menu}>
                <Link to="/"> <Text style={styles.menuItem}>Home</Text></Link>
                <Link to="/capsule"> <Text style={styles.menuItem}>Capsule</Text></Link>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerLogo: {
        width: 200,
        height: 60,
        position: "relative"
    },
    header: {
        height: 60,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    menu: {
        flex: 1,
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    menuItem: {
        color: '#fff',
        paddingLeft: "2rem",
        paddingRight: "2rem",
        fontSize: 20,
        textAlign: "center",

        width: 'fit-content',
    }
})