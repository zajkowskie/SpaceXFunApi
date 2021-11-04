import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { RocketT } from './Rocket'
import RocketItem from './RocketItem'


export default function RocketDetails({ rocket, setSelectedRocket }) {
    const [selectedCard, setSelectedCard] = useState("Dimensions");

    return (
        <View style={[styles.rocketItem]}>
            <View style={[styles.rocketCard]}>
                <RocketItem setSelectedRocket={setSelectedRocket} rocket={rocket} />
                <View style={[styles.rocketCardMenu]}>
                    <TouchableOpacity >
                        <Text style={[styles.rocketCardMenuItem]}>Dimensions</Text>

                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={[styles.rocketCardMenuItem]}>First Stage</Text>


                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={[styles.rocketCardMenuItem]}>Second Stage</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rocketItem: {
        flex: "1",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#fff',
        margin: 20,
        width: 1000,
        background: "#f3f3f3"
    },
    rocketCard: {
        flexDirection: 'row',
    },
    rocketCardMenu: {
        flexDirection: 'row',
        alignItems: 'space-around',
    },
    rocketCardMenuItem: {
        color: '#fff',
    }

})
