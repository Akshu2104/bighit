import AnimatedLottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { gif } from '../assets/json/Index';
import { Login } from '../assets/json/text';

const LoginSuccess = ({ setFlag, flag }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        fadeIn()
    }, [])

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.change}>{`${Login.loged}`}</Text>
            <Animated.View
                style={{ opacity: fadeAnim }}>
                <AnimatedLottieView source={gif.greenTick} style={styles.animate} autoPlay loop={false} onAnimationFinish={() => setTimeout(() => setFlag(2), 800)} />
            </Animated.View>
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