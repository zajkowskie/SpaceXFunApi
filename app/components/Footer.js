import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>copyright RZ</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    footer: {
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
    },
    footerText: {
        color: '#fff',
    }

})