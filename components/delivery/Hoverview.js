import React from 'react'
import {View, Text, Image, Dimensions} from 'react-native';

const styles = {
    top: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: "100%",
        height: "100%",
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 50
    },

    image: {
        width: Dimensions.get('window').width / 1.7,
        height: Dimensions.get('window').width / 1.7
    }
};

const DELIVERY_STATES = {
    PROCESSING: 1,
    AUTHENTICATION_DONE: 2,
    OPENED_COPY: 4
};

export default class Hoverview extends React.Component{
    constructor(props){
        super(props);

        if(this.props.content === DELIVERY_STATES.PROCESSING){
            this.text = "認証中…";
            this.image = require('../../assets/images/VIA.png');
        }else if(this.props.content === DELIVERY_STATES.AUTHENTICATION_DONE){
            this.text = "解錠しました";
            this.image = require('../../assets/images/VIA_AUTH_DONE.png');
        }else if(this.props.content === DELIVERY_STATES.OPENED_COPY){
            this.text = "配達完了";
            this.image = require('../../assets/images/VIA_OPENED.png');
        }
    }

    update(){
        console.log(this.props.content);
        if(this.props.content === DELIVERY_STATES.PROCESSING){
            this.text = "認証中…";
            this.image = require('../../assets/images/VIA.png');
        }else if(this.props.content === DELIVERY_STATES.AUTHENTICATION_DONE){
            this.text = "解錠しました";
            this.image = require('../../assets/images/VIA_AUTH_DONE.png');
        }else if(this.props.content === DELIVERY_STATES.OPENED_COPY){
            this.text = "配達完了";
            this.image = require('../../assets/images/VIA_OPENED.png');
        }
    }

    render(){
        this.update();
        return(
            <View style={styles.top}>
                <Text style={{color: 'white', fontSize: 24, marginBottom: 30}}>{this.text}</Text>
                <Image style={styles.image} source={this.image}/>
            </View>
        )
    }
}