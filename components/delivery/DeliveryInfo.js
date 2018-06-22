import React from 'react';
import {Svg} from 'expo';
import {View, Text} from 'react-native';
import TopComponent from "./TopComponent";
import DeliveryComponent from "./DeliveryComponent";
import DataComponent from "./DataComponent";
import {createDrawerNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import DrawerIcon from "./DrawerIcon";
import Hoverview from "./Hoverview";

const styles = {
    top: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
};

const DELIVERY_STATES = {
    NOT_DELIVERED: 0,
    PROCESSING: 1,
    AUTHENTICATION_DONE: 2,
    OPENED: 3,
    OPENED_COPY: 4,
    DELIVERED: 5
};

export default class DeliveryInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentState: DELIVERY_STATES.NOT_DELIVERED};

        this.getInfoFromState = this.getInfoFromState.bind(this);

        setTimeout(() => this.setState({currentState: DELIVERY_STATES.PROCESSING}), 1000);
        setTimeout(() => this.setState({currentState: DELIVERY_STATES.AUTHENTICATION_DONE}), 2000);
        setTimeout(() => this.setState({currentState: DELIVERY_STATES.OPENED}), 3000);
        setTimeout(() => this.setState({currentState: DELIVERY_STATES.OPENED_COPY}), 4000);
        setTimeout(() => this.setState({currentState: DELIVERY_STATES.DELIVERED}), 5000);
    }

    getInfoFromState(){
        if(this.state.currentState === DELIVERY_STATES.NOT_DELIVERED || this.state.currentState === DELIVERY_STATES.OPENED || this.state.currentState === DELIVERY_STATES.DELIVERED){
            return <View style={styles.top}>
                <TopComponent/>
                <DeliveryComponent/>
                <DataComponent content={this.state.currentState}/>
                <DrawerIcon/>
            </View>;
        }else if(this.state.currentState === DELIVERY_STATES.PROCESSING || this.state.currentState === DELIVERY_STATES.AUTHENTICATION_DONE || this.state.currentState === DELIVERY_STATES.OPENED_COPY){
            return <View style={styles.top}>
                <TopComponent/>
                <DeliveryComponent/>
                <DataComponent/>
                <DrawerIcon/>
                <Hoverview content={this.state.currentState}/>
            </View>;
        }
    }

    render() {
        return this.getInfoFromState();
    }
}


