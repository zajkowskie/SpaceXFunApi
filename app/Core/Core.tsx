import { fontWeight } from '@mui/system';
import React, {useState,useEffect} from 'react'
import { View, Text,StyleSheet,Image ,TouchableOpacity} from 'react-native'

export default function Core() {

    const [coreData, setCoredata] = useState<any[]>([]);
    const [isLoading, setIsloading] = useState(true);
    const getCoreData = () => {
        return fetch('https://api.spacexdata.com/v4/cores')
            .then((response) => response.json())
            .then((json) => { setCoredata(json); console.log(json) })
            .catch((error) => console.error(error))
            .finally(() => { setIsloading(false) })
    }
    useEffect(() => {
        getCoreData();
    }, [])
    const handleDetailLaunch = (launch) =>{
        window.location.href = `/launch/${launch}`;
    }
    return (
        <View>
            {coreData.map(core =>{
                
                return  <View style={styles.coreItem}>
                            <Image style={styles.coreImage} source={require("../assets/rocket.png")}/>
                            <View style={styles.coreItemDetails}>
                                <Text style={styles.coreTitle}>{core.serial}</Text>
                                <Text style={styles.coreLastUpdate}>{core.last_update}</Text>
                                <View  style={styles.coreLaunchesContainer}>
                                    {core.launches.map(launch =>{
                                    return ((launch) ?
                                        <TouchableOpacity onPress={()=>handleDetailLaunch(launch)}>
                                            <Text style={styles.coreLaunch}>{launch}</Text>
                                        </TouchableOpacity> : <Text style={styles.coreLaunch}>No launches</Text>);
                                    })}
                                </View>
                            </View>
                        </View>
            })}
            
        </View>
    )
}


const styles = StyleSheet.create({

    coreItem: {
       flex: 1,
       flexDirection: "row",
       justifyContent: 'flex-start',
       width : 400,
       minHeight: 'auto',
       alighItems : 'center',
       padding: 10,
       borderWidth : 1,
       borderColor : '#fff',
       margin: 10
    },
    coreItemDetails: {
        flexDirection: 'column',
    },
    coreTitle: {
        color: '#fff',
        fontSize :18,
        fontWeight: "bold",
        borderBottomWidth : 1,
        borderBottomColor : '#fff',
    },
    coreLastUpdate: {
        color: '#fff',
        width : 300,
        paddingTop: 10
    },
    coreLaunch: {
        color: '#fff',
        borderWidth : 1,
        borderColor : '#fff',
        padding : 5,
        width: 'auto'
    },
    coreImage: {
       width: 64,
       height : 64,
       backgroundColor : "#fff",
       margin: 10
    },coreLaunchesContainer:{
        paddingTop : 10
    }

});
