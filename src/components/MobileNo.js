import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const MobileNum = ({ number, setNumber, flag, setFlag }) => {

    const [value, setValue] = useState('');
    // const [flag, setFlag] = useState(0)
    console.log('num value', value, value?.length)
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.wlcm}>Welcome to </Text><Text style={styles.change}>BigHit!</Text>
            </View>
            <TextInput
                style={[styles.input, { borderColor: value?.length === 10 || value?.length === 0 ? '#2C2C2C' : '#EA4A04' }]}
                onChangeText={(num) => { setValue(num), setNumber(num) }}
                value={value}
                keyboardType='phone-pad'
                placeholder="Mobile no"
            />
            {value?.length === 10 || value?.length === 0 ?
                <Text style={styles.sending}>We will send you 6 digit OTP</Text> :
                <Text style={styles.error}>Please enter a valid phone number</Text>}
            <TouchableOpacity style={styles.onSubmit} onPress={() => { value?.length === 10 ? setFlag(1) : setValue(null) }}>
                <Text style={styles.submit}>Let's Go</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 38,
        marginBottom: 20,
        borderBottomWidth: 1,
        width: 285,
        fontSize: 20
    },
    sending: {
        color: '#0062FF',
        fontSize: 17,
        marginBottom: 32
    },
    error: {
        color: '#EA4A04',
        fontSize: 17,
        marginBottom: 32
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
    head: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25,
        color: '#2C2C2C',
        fontSize: 22,
    },
    wlcm: {
        color: '#2C2C2C',
        fontSize: 22,
    },
    change: {
        color: '#2C2C2C',
        fontSize: 22,
        fontWeight: 'bold'
    },
})
export default MobileNum;