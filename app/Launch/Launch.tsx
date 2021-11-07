import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import { useParams } from 'react-router-dom';


export default function Launch() {
    const [launchData, setLaunchdata] = useState<any>();
    const [isLoading, setIsloading] = useState(true);
    const { launch_id } = useParams();
    const getLaunchData = () => {
        return fetch(`https://api.spacexdata.com/v4/launches/${launch_id}`)
            .then((response) => response.json())
            .then((json) => { setLaunchdata(json); console.log(json) })
            .catch((error) => console.error(error))
            .finally(() => { setIsloading(false) })
    }
    useEffect(() => {
        console.log(launch_id);
        (launch_id) ?
            getLaunchData() : null;
    }, [])
    return (
        <View>
            {(launchData) ? 
                    <View>
                        <Text style={styles.launchInfo}>{launchData.flight_number}</Text>   
                            <View style={styles.launchGallery}>
                                {
                                launchData.links.flickr.original.map((foto) => {
                                return  <Image style={styles.launchImage} source={{ uri: foto }} />
                                })
                                }
                            </View>
                    </View>
                : <Text style={styles.launchInfo}>No data</Text>}
        </View>
    )
}

const styles = StyleSheet.create({

    launchInfo: {
        color: '#fff'
    },
    launchImage: {
        width: 256,
        minHeight: 256,
        flex : "1 1 45%",
        margin: 20
    },
    launchGallery: { 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // width: 100%;
        flex : 1,
        flexWrap : 'wrap'
    },
});