import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const styles = {
    container: {
        position: 'absolute',
        width: "100%", height: "100%",
        left: "8%", top: "8%"
    }
};

export default class DrawerIcon extends React.Component{
    render(){
        return(
            <Ionicons style={styles.container} name="ios-menu" size={40} color="white" />
        )
    }
}