import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gif } from '../assets/json/Index';

const LoginSuccess = ({ setFlag, flag }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.change}>Login Success!</Text>
            <AnimatedLottieView source={gif.greenTick} style={styles.animate} autoPlay loop={false} onAnimationFinish={() => setFlag(2)} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    change: {
        color: '#2C2C2C',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    animate: {
        width: 102,
        height: 102,
    }
})
export default LoginSuccess;