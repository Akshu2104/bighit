import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Mobile} from '../utils/constants/Text';
import {Colors} from '../utils/styles/Colors';

const MobileNum = ({number, setNumber, flag, setFlag}) => {
  const [value, setValue] = useState('');
  const onNum = mbno => {
    setValue(mbno);
    setNumber(mbno);
  };

  const onPress = () => {
    if (value?.length === 10) {
      setFlag(1);
      setValue(null);
    }
  };

  const funColor = () => {
    if (value?.length === 10 || value?.length === 0) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.head}>
          <Text style={styles.wlcm}>{`${Mobile.welcome}`} </Text>
          <Text style={styles.change}>{`${Mobile.bighit}`}</Text>
        </View>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: funColor() ? Colors.black : Colors.orange,
            },
          ]}
          onChangeText={num => {
            onNum(num);
          }}
          value={value}
          keyboardType="phone-pad"
          placeholder={`${Mobile.mob_no}`}
        />
        {funColor() ? (
          <Text style={styles.sending}>{`${Mobile.info}`}</Text>
        ) : (
          <Text style={styles.error}>{`${Mobile.mb_error}`}</Text>
        )}
        <TouchableOpacity style={styles.onSubmit} onPress={() => onPress()}>
          <Text style={styles.submit}>{`${Mobile.let_go}`}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 310,
  },
  input: {
    height: 38,
    marginBottom: 20,
    borderBottomWidth: 1,
    width: 285,
    fontSize: 20,
    padding: 5,
  },
  sending: {
    color: Colors.blue,
    fontSize: 17,
    marginBottom: 32,
    textAlign: 'center',
  },
  error: {
    color: Colors.orange,
    fontSize: 17,
    marginBottom: 32,
    textAlign: 'center',
  },
  submit: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
  },
  onSubmit: {
    height: 50,
    width: 285,
    borderWidth: 1,
    backgroundColor: Colors.darkblack,
    justifyContent: 'center',
    borderRadius: 70,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
    textAlign: 'center',
  },
  wlcm: {
    color: Colors.black,
    fontSize: 22,
  },
  change: {
    color: Colors.black,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
export default MobileNum;
