import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


export default function CapsuleItem( {capsule}) {
    return (
        <View style={[styles.capsuleItem,styles.shadowProp]}>
            <Image style={styles.capsuleItemImage} source={require('../assets/rocket.png')} />
            <Text style={styles.capsuleItemText}>{capsule.type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    capsuleItem: {
        flex: 1,
        height : 50,
        justifyContent : 'flex-start',
        alignItems: 'center',
        flexDirection : 'row',
        color: '#fff',
        margin: 10
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    capsuleItemImage :{
        height : 48,
        width : 48,
        backgroundColor: '#fff',
    },
    capsuleItemText : {
        color: '#fff',
    }
})
