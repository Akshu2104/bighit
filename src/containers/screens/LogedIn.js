import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { image } from '../../assets/json/Index';

const Loged = () => {

    return (
        <View style={styles.container} >
            <View style={styles.main}>
                <Image source={image.loginCrv} style={styles.curve} />
                <Image source={image.loginSqr} style={styles.player} />
            </View>
            <View style={styles.bottom}>
                <Image source={image.profile1} style={styles.game} />
                <Image source={image.profile2} style={styles.game} />
                <Image source={image.profile3} style={styles.game} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    main: {
        alignItems: 'center',
        height: 480
    },
    curve: {
        height: 300,
        width: 465,
        resizeMode: 'contain',
        position: 'absolute',
        tintColor: '#000AFF',
    },
    player: {
        height: 320,
        width: 350,
        resizeMode: 'contain',
        marginVertical: 130,
    },
    game: {
        height: 180,
        width: 136,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
})
export default Loged;