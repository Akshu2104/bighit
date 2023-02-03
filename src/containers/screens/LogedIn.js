import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Animated, Easing, Text, ImageBackground } from 'react-native';
import { image } from '../../assets/json/Index';
import { Login } from '../../assets/json/text';

const Loged = () => {
    const backViewValue = new Animated.ValueXY({ x: 0, y: -200 })
    const topViewValue = new Animated.ValueXY({ x: 0, y: -200 })
    const bottomViewValue = new Animated.ValueXY({ x: 0, y: 400 })


    useEffect(() => {
        Animated.timing(topViewValue, {
            toValue: { x: 0, y: 0 },
            duration: 600,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [])

    useEffect(() => {
        Animated.timing(backViewValue, {
            toValue: { x: 0, y: 0 },
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [])

    useEffect(() => {
        Animated.timing(bottomViewValue, {
            toValue: { x: 0, y: 0 },
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [])
    return (
        <View style={styles.container} >
            <Animated.View style={[styles.main, backViewValue.getLayout()]}>
                <ImageBackground source={image.loginCrv} style={styles.curve} >
                    <Text style={styles.wlcm}>{Login.welcome}</Text>
                    <Text style={styles.big}>{Login.big}</Text>
                </ImageBackground>
                <Animated.View style={topViewValue.getLayout()}>
                    <Image source={image.loginSqr} style={styles.player} />
                </Animated.View>
            </Animated.View>
            <Animated.View style={[styles.bottom, bottomViewValue.getLayout()]}>
                <Image source={image.profile1} style={styles.game} />
                <Image source={image.profile2} style={styles.game} />
                <Image source={image.profile3} style={styles.game} />
            </Animated.View>
            <Animated.View style={bottomViewValue.getLayout()}>
                <Text style={styles.top}>{Login.top}</Text>
                <Image source={image.player} style={styles.toplayer} />
                <Image source={image.rectangle} style={styles.rectangle} />
            </Animated.View>
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
        height: 350,
        width: 350,
        resizeMode: 'contain',
        marginVertical: 130,
    },
    toplayer: {
        height: 100,
        width: 450,
        resizeMode: 'contain',
        marginLeft: 10,
        marginRight: 10
    },
    rectangle: {
        height: 100,
        width: 400,
        marginLeft: -5,
        bottom: 20,
        resizeMode: 'contain',
    },
    game: {
        height: 180,
        width: 136,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    top: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    big: {
        marginLeft: 10,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        top: 85,
        marginLeft: 50
    },
    wlcm: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        top: 80,
        marginLeft: 50
    }
})
export default Loged;