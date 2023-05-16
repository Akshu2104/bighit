import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Input = () => {
  const input = useSelector(state => state.inputReducer);
  console.log('inputte------', input);

  return (
    <View>
      <Text>hiiii----{input}</Text>
    </View>
  );
};
export default Input;
