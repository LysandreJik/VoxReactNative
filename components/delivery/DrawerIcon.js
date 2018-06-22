import React from 'react'
import {View, Image} from 'react-native'

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
            <View style={styles.container}>
                <Image style={{width: 40, height: 40}} source={require('../../assets/images/openDrawer.png')}/>
            </View>
        )
    }
}