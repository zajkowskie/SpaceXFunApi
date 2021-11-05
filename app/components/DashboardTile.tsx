import { height, maxWidth } from '@mui/system';
import React from 'react'
import { TouchableOpacity, Text ,StyleSheet,Image} from 'react-native'

export default function DashboardTile({view, route}) {
    return (
        <TouchableOpacity style={styles.dashboardTile} onPress={()=> window.location.href = route}>
            <Image style={styles.dashboardTileImage} source={require('../assets/spacex.png')}/>
            <Text style={styles.dashboardTileTitle}>{view}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    dashboardTile: {
        color: '#000',
        backgroundColor :'#000',
        width: 250,
        height: 250,
        borderWidth : 1,
        margin : 20,
        borderColor : 'white',
        flex : '1 1 45%'
    },
    dashboardTileTitle: {
        color: '#000',
        backgroundColor :'#fff',
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        display : 'flex',
        fontSize : 20,
        fontWeight : '600'
      
    },
    dashboardTileImage: {
        height: 200,
      
    },

});
