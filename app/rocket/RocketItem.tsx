import React from 'react'
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import { RocketT } from './Rocket'


export default function RocketItem({ rocket,setSelectedRocket}) {
    const handleSelect = () =>{
        setSelectedRocket(rocket)
    }
    return (
        <View style={[styles.rocketItem,styles.shadowProp]}>
            <TouchableOpacity onPress={handleSelect}>
            <Image style={styles.rocketItemImage} source={{uri : rocket.flickr_images[0]}} />
            <View style={styles.rocketInfo}>
                <Text style={[styles.RocketItemText,styles.rocketName]}>{rocket.name}</Text>
                <Text style={[styles.RocketItemText,styles.rocketDesc]}>{rocket.description}</Text>
            </View>
            </TouchableOpacity>
           
        </View>
    )
}

const styles = StyleSheet.create({
    rocketItem: {
        flex: "1",
        justifyContent : 'flex-start',
        alignItems: 'center',
        flexDirection : 'row',
        color: '#fff',
        // margin: 20
    },

    shadowProp: {
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        maxWidth : 300,
        flexDirection : "column",
        backgroundColor : "#fff",
        paddingBottom : 10
    },
    rocketItemImage :{
        height : 200,
        maxWidth : 300,
        backgroundColor: '#fff',
    },
    rocketItemText : {
        color: '#fff',
    },
    rocketInfo:{
        flexDirection : 'column',
        padding: 20,
      
    },
    rocketName :{
        fontSize : 21,
        fontWeight : "bold"
    },
    rocketDesc :{
        fontSize : 13,
    }
})
