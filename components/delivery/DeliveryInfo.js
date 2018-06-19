import React from 'react';
import {Svg} from 'expo';
import {View, Text, Image, Dimensions} from 'react-native';
import TopComponent from "./TopComponent";
import DeliveryComponent from "./DeliveryComponent";
import DataComponent from "./DataComponent";

const styles = {
    top: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
};

console.log(Dimensions.get('window'));

export default class DeliveryInfo extends React.Component {
    render() {
        return (
            <View style={styles.top}>
                <TopComponent/>
                <DeliveryComponent/>
                <DataComponent/>
            </View>
        )
    }
}




