import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,ScrollView
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
import Capsule from "../capsule/Capsule";
import Core from "../Core/Core";
import Roadster from "../roadster/Roadster";
import DashboardTile from '../components/DashboardTile';
import Launch from '../Launch/Launch';
export default function Home() {

    return (
        <Router>
            <View style={styles.container}>
                <Header />
                <ScrollView >
                    <Switch> 
                        <Route path="/rocket">
                            <Rocket />
                        </Route>
                        <Route path="/capsule">
                            <Capsule />
                        </Route>
                        <Route path="/roadster">
                            <Roadster />
                        </Route>
                        <Route path="/core">
                            <Core />
                        </Route>
                        <Route  path="/launch/:launch_id"  >
                            <Launch />
                        </Route>
                        <Route path="/">
                            <View style={styles.dashboardTileContainer}>
                                <DashboardTile  view={'Rockets'} route={'rocket'}></DashboardTile>
                                <DashboardTile view={'Cores'} route={'core'}></DashboardTile>
                                <DashboardTile view={'Capsules'} route={'capsule'}></DashboardTile>
                                <DashboardTile view={'Roadster'} route={'roadster'}></DashboardTile>
                                <DashboardTile view={'Launch'} route={'launch'}></DashboardTile>
                            </View>
                        </Route>
                    </Switch>
                </ScrollView>

                <Footer />
            </View>
        </Router>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        color: '#000',
    },
    containerContent: {
        // flex: 2,
        // width: "100%",
        // color: '#000',
    },
    text: {
        color: '#fff',
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    dashboardTileContainer:{
        flex : 1,
        flexDirection : "row", 
        flexWrap : 'wrap'

    },

});
