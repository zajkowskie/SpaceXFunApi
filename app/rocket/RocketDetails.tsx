import { width } from '@mui/system';
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { RocketT } from './Rocket'
import RocketItem from './RocketItem'


export default function RocketDetails({ rocket, setSelectedRocket }) {
    const [selectedCard, setSelectedCard] = useState("dimensions");
   
    return (
        <View style={[styles.rocketItem]}>
            <View style={[styles.rocketCard]}>
                
                <RocketItem setSelectedRocket={setSelectedRocket} rocket={rocket} />
                <View style={styles.rocketCardDetails}>
                    <View style={[styles.rocketCardMenu]}>
                        <TouchableOpacity onPress={()=>setSelectedCard('dimensions')} >
                            <Text style={(selectedCard == 'dimensions')?[styles.rocketCardMenuItem,styles.rocketCardMenuItemActive] : styles.rocketCardMenuItem} >Dimensions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setSelectedCard("first_stage")}>
                            <Text style={(selectedCard == 'first_stage')?[styles.rocketCardMenuItem,styles.rocketCardMenuItemActive] : styles.rocketCardMenuItem}>First Stage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setSelectedCard("second_stage")}>
                            <Text style={(selectedCard == 'second_stage')?[styles.rocketCardMenuItem,styles.rocketCardMenuItemActive] : styles.rocketCardMenuItem}>Second Stage</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rocketCardDetailsContent}>
                        {(selectedCard == 'dimensions') ? <Text>dimensions</Text>: null}
                        {(selectedCard == 'first_stage') ? <Text>first_stage</Text>: null}
                        {(selectedCard == 'second_stage') ? <Text>second_stage</Text>: null}
                    </View>
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
        // margin: 20,
        width: 1000,
        // backgroundColor: "#f3f3f3"
    },
    rocketCard: {
        flexDirection: 'row',
        flex: "1",
    },
    rocketCardDetails: {
        flex: 3
    },
    rocketCardDetailsContent: {
        backgroundColor: "green",
        flex: 1
    },
    rocketCardMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        display : 'flex'
    },
    rocketCardMenuItem: {
        color: '#fff',
        paddingLeft:20,  
        paddingRight:20,  
        height : 50,
        display : 'flex',   alignItems: 'center',
    },
    rocketCardMenuItemActive: {
        color: '#000',
        backgroundColor: '#fff', display : 'flex',   alignItems: 'center',
    }

})
