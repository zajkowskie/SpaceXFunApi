import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import RocketDetails from './RocketDetails';

import RocketItem from './RocketItem';

export type RocketT = {
    name: String,
    description: String,
    flickr_images: String[],
    id: number,
    first_flight: number,
}
export default function Rocket() {

    const [rocketData, setRocketdata] = useState<RocketT[]>([]);
    const [isLoading, setIsloading] = useState(true);
    const [selectedRocket, setSelectedRocket] = useState<RocketT>();

    const getRocketData = () => {
        return fetch('https://api.spacexdata.com/v4/rockets')
            .then((response) => response.json())
            .then((json) => { setRocketdata(json); console.log(json) })
            .catch((error) => console.error(error))
            .finally(() => { setIsloading(false) })
    }
    useEffect(() => {
        getRocketData();
    }, [])
   
    const renderItem = (rocket) => {
        return      <View style={[styles.rocketCardListItem]}>
                        <RocketItem setSelectedRocket={setSelectedRocket} rocket={rocket.item} />
                    </View>
    }
    return (
        <ScrollView >
        <View style={styles.scroled}>
                {rocketData.length != 0 ? (
                    selectedRocket && selectedRocket ? (
                            <RocketDetails setSelectedRocket={setSelectedRocket} rocket={selectedRocket}/>
                    ) : (
                        <FlatList
                            data={rocketData}
                            renderItem={renderItem}
                            keyExtractor={rocket => rocket.id}
                        ></FlatList>
                    )
                ) : (
                    <View style={[styles.horizontal]}>
                        <ActivityIndicator size="large" color="#ffffff" />
                    </View>
                )}
             </View>
         </ScrollView>
    )
}

const styles = StyleSheet.create({

    text: {
        color: '#fff',
    },
    cardWrapper: {
        margin: 10
    },
    rocketCardListItem : {
        margin: 20
    },
    scroled: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "colurmn",

    }

});

