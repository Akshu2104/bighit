import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { image } from '../../assets/json/Index';
import Loading from '../../components/Load';
import LoginSuccess from '../../components/LoginSucces';
import MobileNum from '../../components/MobileNo';
import OtpFun from '../../components/Otp';

const Main = () => {

    const [flag, setFlag] = useState(0)
    const [number, setNumber] = useState(null);
    const [otpValue, setOtpValue] = useState(null);

    return (
        <View style={styles.mainBox}>
            <Image source={image.topback} style={styles.topImage} />
            <Image source={image.bigHit} style={styles.logo} />
            <Image source={image.back} style={styles.player} />
            <Image source={image.bottomBack} style={styles.bottomImage} />
            <View style={styles.container}>
                {flag === 0 ?
                    <MobileNum setNumber={setNumber} flag={flag} setFlag={setFlag} />
                    : flag === 1 ? <OtpFun setOtpValue={setOtpValue} number={number} flag={flag} setFlag={setFlag} />
                        : flag === 3 ? <Loading setFlag={setFlag} flag={flag} />
                            : <LoginSuccess setFlag={setFlag} flag={flag} />}
            </View>
        </View>
    );
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
    timer: {
        fontSize: 22,
        color: "black",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        height: 50,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
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

export default Main;