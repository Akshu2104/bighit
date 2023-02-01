import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import MobileNum from '../../components/MobileNo';
import OtpFun from '../../components/Otp';

const Main = () => {

    const [value, setValue] = useState();
    const [flag, setFlag] = useState(0)
    const [number, setNumber] = useState(null);
    const [otpValue, setOtpValue] = useState(null);
    console.log('here---->', number, typeof (number), otpValue, typeof (otpValue))
    return (
        <View style={styles.container}>
            {flag === 0 ?
                <MobileNum setNumber={setNumber} flag={flag} setFlag={setFlag} />
                : <OtpFun setOtpValue={setOtpValue} number={number} flag={flag} setFlag={setFlag} />}
        </View>

        // <View style={styles.container}>
        //     <TextInput
        //         style={styles.input}
        //         onChangeText={(text) => setValue(text)}
        //         // onBlur={(text) => dateFormat(text)}
        //         value={value}
        //         placeholder="Mobile no"
        //     />
        //     <TouchableOpacity style={styles.input}>
        //         <Text style={styles.timer}>Show Logs</Text>
        //     </TouchableOpacity>
        // </View>
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