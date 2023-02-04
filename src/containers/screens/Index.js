import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { image } from '../../utils/constants/Index';
import Loged from './LogedIn';
import Main from './Main';

const Index = () => {
    const [flag, setFlag] = useState(0)
    switch (flag) {
        case 4:
            return (
                <Loged />
            );
        default:
            return (
                <View style={styles.mainBox}>
                    <Image source={image.topback} style={styles.topImage} />
                    <Image source={image.bigHit} style={styles.logo} />
                    <Image source={image.back} style={styles.player} />
                    <Image source={image.bottomBack} style={styles.bottomImage} />
                    <View style={styles.container}>
                        <Main flag={flag} setFlag={setFlag} />
                    </View>
                </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20
    },
    mainBox: {
        flex: 1,
    },
    topImage: {
        position: 'absolute',
        width: 400,
        height: 490
    },
    logo: {
        position: 'absolute',
        width: 84,
        height: 75,
        marginVertical: 30,
        alignSelf: 'center'
    },
    player: {
        position: 'absolute',
        width: 230,
        height: 200,
        marginVertical: 150,
        alignSelf: 'center'
    },
    bottomImage: {
        position: 'absolute',
        width: 390,
        height: 560,
        bottom: 0
    },
})
export default Index;