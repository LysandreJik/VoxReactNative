import React from 'react';
import {Font, Svg} from 'expo';
import {View, Text, Image, Dimensions} from 'react-native';

const styles = {
    topComponent: {
        flex: 25
    },

    blueBackgroundTop: {
        top: -1, flex: 2
    },

    whiteAndblueBackgroundTop: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        flexDirection: 'row'
    },

    vTop: {
        top: -Dimensions.get('window').width/2, left: 0, position: 'absolute'
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
        padding: 15,
        paddingRight: 30,
        flexDirection: 'row',

    },

    profileImage: {
        top: 3,
        width: (Dimensions.get('window').height/100)*8/1.5,
        height: (Dimensions.get('window').height/100)*8/1.5
    },

    ID: {
        position: 'absolute',
        width: "100%", height: "66%",
        right: "8%", top: "8%",
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
};

export default class TopComponent extends React.Component{


    getTextStyle(size, weight){
        let style = {fontSize: size};
        style.fontFamily = "HiraginoSansW"+weight;
        return style;
    }

    render(){
        return(
            <View style={styles.topComponent}>
                {BlueBackgroundTop}
                {VTop}

                <View style={styles.whiteAndblueBackgroundTop}>
                    <View style={styles.left}><Text style={this.getTextStyle(15, 1)}>配達先</Text></View>
                    <View style={styles.right}>
                        <Image style={styles.profileImage} source={require('../../assets/images/profile.png')}/>
                        <Text style={this.getTextStyle(15, 1)}>     磯野 若芽</Text>
                    </View>
                </View>

                <View style={styles.ID}>
                    <Text style={{...this.getTextStyle(12, 3), color: 'white'}}>配達番号: YMT583752</Text>
                    <Text style={{...this.getTextStyle(25, 3), color: 'white'}}>配達情報</Text>
                </View>
            </View>
        )
    }
}

const BlueBackgroundTop = <View style={styles.blueBackgroundTop}>
    <Svg width={Dimensions.get('window').width} height={Dimensions.get('window').height/4}>
        <Svg.Defs>
            <Svg.ClipPath id="clip_0">
                <Svg.Rect y="1" width="375" height="812" clipRule="evenodd"/>
            </Svg.ClipPath>
            <Svg.LinearGradient id="gradient_0" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="375" y2="207">
                <Svg.Stop offset="0" stopColor="rgb(134,208,233)" stopOpacity="0.96862745"/>
                <Svg.Stop offset="1" stopColor="rgb(55,113,181)" stopOpacity="0.96862745"/>
            </Svg.LinearGradient>
        </Svg.Defs>
        <Svg.G clipPath="url(#clip_0)">
            <Svg.Path fill="url(#gradient_0)" fillOpacity="0.96862745" stroke="none" d="M0 0L375 0L375 207L0 207L0 0Z"/>
        </Svg.G>
    </Svg>
</View>;

const VTop = <View style={styles.vTop}>
    <Svg width="401" height="485">
        <Svg.Defs>
            <Svg.ClipPath id="clip_0">
                <Svg.Path d="M347.033 168L288.665 168L226.059 326.328C221.612 337.864 213.182 343.651 200.789 343.651C188.376 343.651 179.956 337.864 175.518 326.328L141.071 239.716C139.217 234.871 135.802 230.769 130.797 227.429C125.802 224.059 120.712 222.394 115.527 222.394C112.556 222.394 109.226 223.136 105.527 224.63C100.711 226.486 96.643 229.932 93.3128 234.967C89.9731 239.992 88.3174 244.941 88.3174 249.776C88.3174 252.755 89.0459 256.106 90.5313 259.818L173.295 467.687C175.131 472.522 178.574 476.615 183.56 479.975C188.556 483.325 193.475 485 198.281 485L202.728 485C207.534 485 212.444 483.325 217.44 479.975C222.445 476.615 225.86 472.522 227.724 467.687L347.033 168Z" clip-rule="evenodd"/>
            </Svg.ClipPath>
        </Svg.Defs>
        <Svg.G clipPath="url(#clip_0)">
            <Svg.Path fill="rgba(255,255,255, 0.5)" stroke="none" d="M358.521 5.03493C353.516 8.39473 350.091 12.4969 348.246 17.3224L348.246 17.3224L226.059 326.328C221.612 337.864 213.182 343.651 200.789 343.651L200.789 343.651C188.376 343.651 179.956 337.864 175.518 326.328L175.518 326.328L141.071 239.716C139.217 234.871 135.802 230.769 130.797 227.429L130.797 227.429C125.802 224.059 120.712 222.394 115.527 222.394L115.527 222.394C112.556 222.394 109.226 223.136 105.527 224.63L105.527 224.63C100.711 226.486 96.643 229.932 93.3128 234.967L93.3128 234.967C89.9731 239.992 88.3174 244.941 88.3174 249.776L88.3174 249.776C88.3174 252.755 89.0459 256.106 90.5313 259.818L90.5313 259.818L173.295 467.687C175.131 472.522 178.574 476.615 183.56 479.975L183.56 479.975C188.556 483.325 193.475 485 198.281 485L198.281 485L202.728 485C207.534 485 212.444 483.325 217.44 479.975L217.44 479.975C222.445 476.615 225.86 472.522 227.724 467.687L227.724 467.687L398.786 38.0047C400.262 34.2832 401 30.7521 401 27.3923L401 27.3923C401 19.9494 398.313 13.5153 392.949 8.11871L392.949 8.11871C387.575 2.7221 381.189 0 373.79 0L373.79 0C368.596 0 363.516 1.68466 358.521 5.03493M8.05122 8.11871C2.67743 13.5153 0 19.9494 0 27.3923L0 27.3923C0 30.7521 0.73795 34.2832 2.22331 38.0047L2.22331 38.0047L11.6653 61.4757C13.5102 66.3107 16.9445 70.4034 21.9398 73.7632L21.9398 73.7632C26.9352 77.1134 31.8454 78.7981 36.6515 78.7981L36.6515 78.7981C39.9912 78.7981 43.5106 78.0462 47.2099 76.5614L47.2099 76.5614C52.016 74.6959 55.999 71.3456 59.1495 66.5011L59.1495 66.5011C62.2905 61.666 63.8705 56.6406 63.8705 51.4153L63.8705 51.4153C63.8705 48.4362 63.1325 45.0859 61.6566 41.355L61.6566 41.355L52.2147 17.3224C50.3603 12.4969 46.9355 8.39472 41.9307 5.03493L41.9307 5.03493C36.9353 1.68466 32.0251 0 27.219 0L27.219 0C19.8016 0 13.4155 2.7221 8.05122 8.11871"/>
        </Svg.G>
    </Svg>
</View>;