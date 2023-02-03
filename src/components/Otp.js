import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import { OTP } from '../assets/json/text';

const OtpFun = ({ otpValue, setOtpValue, flag, setFlag, number }) => {
    var otp = '123456'
    const [value, setValue] = useState('');

    const onOTP = (otp) => {
        setValue(otp)
        setOtpValue(otp)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.head}>{`${OTP.enter}`}</Text>
            <View style={styles.mbno}>
                <Text>{number}</Text><Text style={styles.change} onPress={() => { setFlag(0) }}>{`${OTP.change}`}</Text>
            </View>
            <OtpInputs style={styles.otp}
                handleChange={(code) => { onOTP(code) }}
                numberOfInputs={6}
                inputContainerStyles={[styles.inputOtp, { borderColor: value !== otp && value?.length !== 0 ? '#EA4A04' : value === otp ? '#0062FF' : '#E2E2E2' }]}
                inputStyles={styles.inputValue}
            />
            {value !== otp && value?.length !== 0 && <Text style={styles.error}>{`${OTP.otp_error}`}</Text>}
            <TouchableOpacity style={styles.onSubmit} onPress={() => { value === otp ? setFlag(2) : setValue(null) }}>
                <Text style={styles.submit}>{`${OTP.submit}`}</Text>
            </TouchableOpacity>
            {
                value !== otp && value?.length !== 0 ? <Text style={[styles.resend, { color: '#0062FF' }]}>{`${OTP.resend}`}</Text>
                    : <Text style={[styles.resend, { color: '#808080' }]}>{`${OTP.resend}`} 30s</Text>
            }
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    otp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    submit: {
        fontSize: 18,
        color: "white",
        textAlign: 'center',
    },
    onSubmit: {
        height: 50,
        width: 285,
        borderWidth: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 70,
    },
    error: {
        color: '#EA4A04',
        fontSize: 17,
        marginBottom: 10
    },
    inputValue: {
        fontSize: 20,
        padding: 5
    },
    head: {
        fontSize: 20,
        marginBottom: 9,
        color: '#181818'
    },
    resend: {
        marginTop: 19,
        fontSize: 18,
    },
    mbno: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25
    },
    change: {
        color: '#0062FF',
        fontSize: 15,
        marginLeft: 9
    },
    inputOtp: {
        borderWidth: 1,
        width: 40,
        height: 52,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginRight: 9,
    }
})
export default OtpFun;