import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { image } from '../../assets/json/Index';

const Loged = () => {

    return (
        <View style={styles.container}>
            <Image source={image.loginCrv} style={styles.curve} />
            <Image source={image.loginSqr} style={styles.player} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
})
export default Loged;