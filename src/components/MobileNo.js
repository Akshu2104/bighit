import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Mobile } from '../utils/constants/Text';

const MobileNum = ({ number, setNumber, flag, setFlag }) => {

    const [value, setValue] = useState('');
    const onNum = (mbno) => {
        setValue(mbno)
        setNumber(mbno)
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.wlcm}>{`${Mobile.welcome}`} </Text><Text style={styles.change}>{`${Mobile.bighit}`}</Text>
            </View>
            <TextInput
                style={[styles.input, { borderColor: value?.length === 10 || value?.length === 0 ? '#2C2C2C' : '#EA4A04' }]}
                onChangeText={(num) => { onNum(num) }}
                value={value}
                keyboardType='phone-pad'
                placeholder={`${Mobile.mob_no}`}
            />
            {value?.length === 10 || value?.length === 0 ?
                <Text style={styles.sending}>{`${Mobile.info}`}</Text> :
                <Text style={styles.error}>{`${Mobile.mb_error}`}</Text>}
            <TouchableOpacity style={styles.onSubmit} onPress={() => { value?.length === 10 ? setFlag(1) : setValue(null) }}>
                <Text style={styles.submit}>{`${Mobile.let_go}`}</Text>
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