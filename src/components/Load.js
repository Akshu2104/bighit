import AnimatedLottieView from 'lottie-react-native';
import React, {useRef} from 'react';
import {View, StyleSheet, Animated, Platform} from 'react-native';
import {gif} from '../utils/constants/Index';

const Loading = ({setFlag, flag}) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => setFlag(3), 1200);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{opacity: fadeAnim}}>
        <AnimatedLottieView
          source={gif.blueTriangle}
          style={styles.animate}
          autoPlay
          loop={false}
          onAnimationFinish={() => fadeOut()}
        />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.OS === 'ios' ? 0 : 70,
  },
  animate: {
    width: 98,
    height: 98,
  },
});
export default Loading;
