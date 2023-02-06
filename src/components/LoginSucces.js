import AnimatedLottieView from 'lottie-react-native';
import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated, Platform} from 'react-native';
import {gif} from '../utils/constants/Index';
import {Login} from '../utils/constants/Text';
import {Colors} from '../utils/styles/Colors';

const LoginSuccess = ({setFlag, flag}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  const onAnimate = () => {
    setTimeout(() => setFlag(4), 600);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.change}>{`${Login.loged}`}</Text>
      <Animated.View style={{opacity: fadeAnim}}>
        <AnimatedLottieView
          source={gif.greenTick}
          style={styles.animate}
          autoPlay
          loop={false}
          onAnimationFinish={() => onAnimate()}
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
  change: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  animate: {
    width: 102,
    height: 102,
  },
});
export default LoginSuccess;
