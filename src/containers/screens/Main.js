import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../../components/Load';
import LoginSuccess from '../../components/LoginSucces';
import MobileNum from '../../components/MobileNo';
import OtpFun from '../../components/Otp';

const Main = () => {

    const [value, setValue] = useState();
    const [flag, setFlag] = useState(0)
    const [number, setNumber] = useState(null);
    const [otpValue, setOtpValue] = useState(null);

    return (
        <View style={styles.container}>
            {flag === 0 ?
                <MobileNum setNumber={setNumber} flag={flag} setFlag={setFlag} />
                : flag === 1 ? <OtpFun setOtpValue={setOtpValue} number={number} flag={flag} setFlag={setFlag} />
                    : flag === 3 ? <Loading setFlag={setFlag} flag={flag} />
                        : <LoginSuccess setFlag={setFlag} flag={flag} />}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
})

export default Main;