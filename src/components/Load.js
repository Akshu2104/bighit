import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { gif } from '../assets/json/Index';

const Loading = ({ setFlag, flag }) => {

    return (
        <View style={styles.container}>
            <AnimatedLottieView source={gif.blueTriangle} style={styles.animate} autoPlay loop={false} onAnimationFinish={() => setFlag(4)} />
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