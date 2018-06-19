import React from 'react';
import {Svg} from 'expo';
import {View, StatusBar} from 'react-native';
import TopComponent from "./TopComponent";
import DeliveryComponent from "./DeliveryComponent";
import DataComponent from "./DataComponent";
import {createDrawerNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import DrawerIcon from "./DrawerIcon";

const styles = {
    top: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
};




class DeliveryInfo extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
        ),
    };


    render() {
        return (
            <View style={styles.top}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <TopComponent/>
                <DeliveryComponent/>
                <DataComponent/>
                <DrawerIcon/>
            </View>
        )
    }
}

export default createDrawerNavigator({
    Home: DeliveryInfo
});


