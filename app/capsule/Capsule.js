import React, {useState,useEffect} from 'react'
import { View, Text, ScrollView, StyleSheet,ActivityIndicator } from 'react-native'

import CapsuleItem from "./CapsuleItem"
import CapsuleCard from "./CapsuleCard"
export default function Capsule() {

    const [capsuleData, setCapsuledata] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getCapsuleData = () => {
        return fetch('https://api.spacexdata.com/v4/rockets')
            .then((response) => response.json())
            .then((json) => { setCapsuledata(json); console.log(json) })
            .catch((error) => console.error(error))
            .finally(() => { setIsloading(false) })
    }
    useEffect(() => {
        getCapsuleData();
    }, [])
    return (
        <ScrollView >
            <View style={styles.scroled}>

                    {capsuleData.length != 0 ? (
                        capsuleData.map(capsule => {
                            return (
                                
                                    <CapsuleCard  key={capsule.id} styles={styles.card} capsule={capsule} />
                                    
                            )

                        })
                    ) : (
                        <View style={[ styles.horizontal]}>
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
    card :{
        flex : '50%',
        margin: 10
    },
    cardWrapper :{
        margin: 10
    },
    scroled:{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        
    }

});

