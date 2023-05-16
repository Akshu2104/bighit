import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {changeInput} from '../redux/action';
import Input from './Input';

const Storing = () => {
  const [currentDate, setCurrentDate] = useState(false);
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const input = useSelector(state => state.inputReducer);
  console.log('inputted', input);

  const onSubmit = () => {
    dispatch(changeInput(text));
    console.log('Saved', text);
  };

  const onSubmited = () => {
    setCurrentDate(!currentDate);
    Alert.alert('input', input);
    console.log('inputt', input);
  };

  return (
    <View style={styles.page}>
      <Text>input-----{input}</Text>
      {currentDate && <Input />}
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        // onBlur={(text) => dateFormat(text)}
        value={text}
        placeholder="input"
      />
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          onSubmit();
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          onSubmited();
        }}>
        <Text>Submit value</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Storing;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
  input: {
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    width: 300,
  },
  submit: {
    backgroundColor: 'cadetblue',
    marginTop: 25,
    padding: 10,
    borderRadius: 35,
  },
});
