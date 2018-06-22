import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Splash from './components/splashscreen/Splash';
import {loadImages} from "./controller/LoadImages";
import DeliveryInfo from "./components/delivery/DeliveryInfo";

loadImages();

export default class App extends React.Component {
    constructor(){
        super();

        this.state = {showSplash: true};

        this.terminateSplashScreen = this.terminateSplashScreen.bind(this);
        this.getSplashScreen = this.getSplashScreen.bind(this);
        this.getDeliveryInfo = this.getDeliveryInfo.bind(this);
    }

    terminateSplashScreen(){
        this.setState({showSplash: false});
    }

    getSplashScreen(){
        return <Splash terminateSplashScreen={this.terminateSplashScreen}/>;
    }

    getDeliveryInfo(){
        return <DeliveryInfo/>;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                {this.state.showSplash ? this.getSplashScreen() : this.getDeliveryInfo()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
