import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
}
    from 'react-native'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Rocket from "../rocket/Rocket";
export default function Home() {

    return (
        <Router>
            <View style={styles.container}>
                <Header />
                <Switch>
                    <Route path="/rocket">
                        <Rocket />
                    </Route>
                    <Route path="/">
                        <Text >Home</Text>
                    </Route>
                </Switch>
                <Footer />
            </View>
        </Router>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        color: '#fff',
    },
    text: {
        color: '#fff',
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }

});
