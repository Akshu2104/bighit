import AnimatedLottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { gif } from '../assets/json/Index';

const Loading = ({ setFlag, flag }) => {

    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
        setTimeout(() => setFlag(4), 1300)
    };


    return (
        <View style={styles.container}>
            <Animated.View
                style={{ opacity: fadeAnim }}>
                <AnimatedLottieView source={gif.blueTriangle} style={styles.animate} autoPlay loop={false} onAnimationFinish={() => fadeOut()} />
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
    animate: {
        width: 98,
        height: 98,
    }
})
export default Loading;