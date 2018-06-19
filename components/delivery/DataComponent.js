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
        top: -1,
    },

    innerDataComponent: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        margin: 20,
        marginBottom: 40,
        marginTop: 70,
        shadowColor: 'rgb(200, 200, 200)',
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5
    },

    deliveryBoxDetail: {
        flex: 10,
        borderBottomColor: '#BEC3CB',
        borderBottomWidth: 1
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
        backgroundColor: '#BEC3CB',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    left: {
        flex: 1,
        justifyContent: 'center',
        padding: 15
    },

    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 15
    },

    map: {
        alignItems: 'center',
        top: -50
    }

};

export default class DataComponent extends React.Component{
    render(){
        return(
            <View style={styles.dataComponent}>
                <View style={styles.innerDataComponent}>
                    <View style={styles.map}>
                        <Image source={require('../../assets/images/map.png')}/>
                        <Image style={{position: 'absolute', top: 35, width: 20, height: 30}} source={require('../../assets/images/mapPointer.png')}/>
                    </View>
                    <View style={styles.deliveryBoxDetail}>
                        <View style={{flexDirection: 'row', left: -20}}>
                            <Image style={{width: 130, height: 90, left: -10, top: -35}} source={require('../../assets/images/VoxBox.png')}/>
                            <View>
                                <Text style={{fontSize: 13}}>磯野家宅配ボックス</Text>
                                <Text style={{fontSize: 13}}>福岡県福岡市中央区渡辺通2-1-82</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.deliveryDesignatedTime}>
                        <View style={styles.left}>
                            <Text>配達指定時間</Text>
                        </View>
                        <View style={styles.right}>
                            <Text>6/20 10:00-15:00</Text>
                        </View>
                    </View>
                    <View style={styles.sender}>
                        <View style={styles.left}>
                            <Text>送付元</Text>
                            <Text>送付元住所</Text>
                        </View>
                        <View style={styles.right}>
                            <Text>三河屋商店</Text>
                            <Text style={{fontSize: 10}}>東京都世田谷区世田谷4-4-14</Text>
                        </View>
                    </View>
                    <View style={styles.shippingButton}>
                        <Text style={{color: 'white'}}>ボタンを押して配達してください</Text>
                    </View>
                </View>
            </View>
        );
    }
}

