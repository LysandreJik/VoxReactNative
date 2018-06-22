import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import DataComponent from "./DataComponent";
import {Font} from "expo";

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
    constructor(props){
        super(props);

        this.state = {fontLoaded: false};
    }
    async componentDidMount(){
        await Font.loadAsync({
            'HiraginoSansW1': require('../../assets/fonts/HiraginoSansW1.otf'),
        });

        this.setState({ fontLoaded: true });
    }

    getTextStyle(size){
        let style = {fontSize: size};
        this.state.fontLoaded ? style.fontFamily = "HiraginoSansW1" : "";
        return style;
    }

    render(){
        return(
            <View style={styles.deliveryContainer}>
                <View style={styles.deliveryStatus}>
                    <View style={styles.left}><Text style={this.getTextStyle(15)}>配達ステータス</Text></View>
                    <View style={styles.right}><Text style={this.getTextStyle(15)}>未配達</Text></View>
                </View>
                <View style={styles.deliveryMethod}>
                    <View style={styles.left}><Text style={this.getTextStyle(15)}>受取方法</Text></View>
                    <View style={styles.right}><Text style={this.getTextStyle(15)}>宅配ボックス</Text></View>
                </View>
            </View>
        )
    }
}