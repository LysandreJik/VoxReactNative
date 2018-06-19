import React from 'react';
import {Svg} from 'expo';
import {View, Text, Image, Dimensions} from 'react-native';
import TopComponent from "./TopComponent";
import DeliveryComponent from "./DeliveryComponent";

const styles = {
    dataComponent: {
        flex: 59,
        backgroundColor: '#FBFBFC',
        width: '100%',
        top: -1
    }
};

export default class DataComponent extends React.Component{
    render(){
        return(
            <View style={styles.dataComponent}>

            </View>
        );
    }
}