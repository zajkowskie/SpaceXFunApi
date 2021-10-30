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
        height: 30,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    footerText: {
        color: '#fff',
    }

})