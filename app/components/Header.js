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
                <Link to="/rocket"> <Text style={styles.menuItem}>Rocket</Text></Link>
                <Link to="/core"> <Text style={styles.menuItem}>Core</Text></Link>
                <Link to="/capsule"> <Text style={styles.menuItem}>Capsule</Text></Link>
                <Link to="/roadster"> <Text style={styles.menuItem}>Roadster</Text></Link>
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
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    menuItem: {
        color: '#fff',
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontSize: 16,
        textAlign: "center",

        width: 'fit-content',
    }
})