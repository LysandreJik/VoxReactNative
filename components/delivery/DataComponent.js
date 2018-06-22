import React from 'react';
import {View, Text, Image, Dimensions, } from 'react-native';
import {Font} from 'expo';

const styles = {
    dataComponent: {
        flex: 59,
        backgroundColor: '#FBFBFC',
        width: '100%',
        top: -1,
    },

    innerDataComponent: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        margin: 20,
        marginBottom: 40,
        marginTop: 60,
        shadowColor: 'rgb(200, 200, 200)',
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        overflow: 'visible',
        paddingTop: 60
    },

    deliveryBoxDetail: {
        flex: 10,
        borderBottomColor: '#BEC3CB',
        borderBottomWidth: 1,

    },

    deliveryDesignatedTime: {
        flex: 7,
        borderBottomColor: '#BEC3CB',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },

    sender: {
        flex: 9,
        flexDirection: 'row'
    },

    shippingButton: {
        flex: 6,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    left: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 15
    },

    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 15
    },

    map: {
        position: 'absolute',
        alignItems: 'center',
        top: 60-51,
        zIndex: 100,
        left: Dimensions.get('window').width/2 - 51,
        overflow: 'visible'
    },

    imageView: {
        flex: 1
    },

    imageTextView: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 5
    }

};

const DELIVERY_STATES = {
    NOT_DELIVERED: 0,
    OPENED: 3,
    DELIVERED: 5
};

export default class DataComponent extends React.Component{

    constructor(props){
        super(props);

        if(this.props.content === DELIVERY_STATES.NOT_DELIVERED){
            this.time = "6/20 10:00-15:00";
            this.validate = "ボタンを押して配達してください";
            this.validateColor = '#BEC3CB';
        }else if(this.props.content === DELIVERY_STATES.OPENED){
            this.time = "6/20 10:00-15:00";
            this.validate = "荷物を入れてドアを締めてください";
            this.validateColor = '#6BBEDA';
        }else if(this.props.content === DELIVERY_STATES.DELIVERED){
            this.time = "6/20 13:35";
            this.validate = "配達が完了しました";
            this.validateColor = '#49A4D5';
        }

        this.deliveryBoxSize = ( Dimensions.get('window').height * 0.59 - (70 + 40 + 20) ) * 10 / 32;

        this.state = {fontLoaded: false};
    }

    async componentDidMount(){
        await Font.loadAsync({
            'HiraginoSansW1': require('../../assets/fonts/HiraginoSansW1.otf'),
        });

        this.setState({ fontLoaded: true });
    }

    update(){
        if(this.props.content === DELIVERY_STATES.NOT_DELIVERED){
            this.time = "6/20 10:00-15:00";
            this.validate = "ボタンを押して配達してください";
            this.validateColor = '#BEC3CB';
        }else if(this.props.content === DELIVERY_STATES.OPENED){
            this.time = "6/20 10:00-15:00";
            this.validate = "荷物を入れてドアを締めてください";
            this.validateColor = '#6BBEDA';
        }else if(this.props.content === DELIVERY_STATES.DELIVERED){
            this.time = "6/20 13:35";
            this.validate = "配達が完了しました";
            this.validateColor = '#49A4D5';
        }

        this.state.fontLoaded ? styles.dataComponent.fontFamily = "HiraginoSansW1" : "";
    }

    getTextStyle(size){
        let style = {fontSize: size};
        this.state.fontLoaded ? style.fontFamily = "HiraginoSansW1" : "";
        return style;
    }

    render(){
        this.update();
        return(
            <View style={styles.dataComponent}>
                <View style={styles.map}>
                    <Image source={require('../../assets/images/map.png')}/>
                    <Image style={{position: 'absolute', top: 35, width: 20, height: 30}} source={require('../../assets/images/mapPointer.png')}/>
                </View>
                <View style={styles.innerDataComponent}>
                    <View style={styles.deliveryBoxDetail}>
                        <View style={{flexDirection: 'row', height: "100%"}}>
                            <View style={{flex: 1}}>
                                <Image style={{left: 0, width: "100%", height: "100%", resizeMode: 'contain'}} source={require('../../assets/images/VoxBox.png')}/>
                            </View>
                            <View style={styles.imageTextView}>
                                <Text style={this.getTextStyle(13)}>磯野家宅配ボックス</Text>
                                <Text style={this.getTextStyle(13)}>福岡県福岡市中央区渡辺通2-1-82</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.deliveryDesignatedTime}>
                        <View style={styles.left}>
                            <Text style={this.getTextStyle(15)}>配達指定時間</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={this.getTextStyle(15)}>{this.time}</Text>
                        </View>
                    </View>
                    <View style={styles.sender}>
                        <View style={styles.left}>
                            <Text style={this.getTextStyle(15)}>送付元</Text>
                            <Text style={this.getTextStyle(15)}>送付元住所</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={this.getTextStyle(15)}>三河屋商店</Text>
                            <Text style={this.getTextStyle(10)}>東京都世田谷区世田谷4-4-14</Text>
                        </View>
                    </View>
                    <View style={{...styles.shippingButton, backgroundColor: this.validateColor}}>
                        <Text style={{...this.getTextStyle(15), color:'white'}}>{this.validate}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

