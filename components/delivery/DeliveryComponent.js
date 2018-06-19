import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import DataComponent from "./DataComponent";

const styles = {
    deliveryContainer: {
        top: -1,
        backgroundColor: 'white',
        width: "100%",
        flex: 16
    },

    deliveryMethod: {
        flex: 1,
        backgroundColor: "#F5F8F9",
        flexDirection: 'row'
    },

    deliveryStatus: {
        flex: 1,
        backgroundColor: '#FBFBFC',
        flexDirection: 'row'
    },

    left: {
        flex: 2,
        justifyContent: 'center',
        padding: 15
    },

    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 15
    }
};


export default class DeliveryComponent extends React.Component{
    render(){
        return(
            <View style={styles.deliveryContainer}>
                {DeliveryStatus}
                {DeliveryMethod}
            </View>
        )
    }
}


const DeliveryStatus = <View style={styles.deliveryStatus}>
    <View style={styles.left}><Text>配達ステータス</Text></View>
    <View style={styles.right}><Text>未配達</Text></View>
</View>;

const DeliveryMethod = <View style={styles.deliveryMethod}>
    <View style={styles.left}><Text>受取方法</Text></View>
    <View style={styles.right}><Text>宅配ボックス</Text></View>
</View>;