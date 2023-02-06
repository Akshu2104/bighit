import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {OTP} from '../utils/constants/Text';
import {Colors} from '../utils/styles/Colors';

const OtpFun = ({otpValue, setOtpValue, flag, setFlag, number}) => {
  const otp = '123456';
  const [value, setValue] = useState('');

  const onOTP = otpEnter => {
    setValue(otpEnter);
    setOtpValue(otpEnter);
  };

  const onChange = () => {
    setFlag(0);
  };

  const onSubmit = () => {
    if (value === otp) {
      setFlag(2);
      setValue(null);
    }
  };

  const funColor = () => {
    if (value !== otp && value?.length !== 0) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.head}>{`${OTP.enter}`}</Text>
        <View style={styles.mbno}>
          <Text>{number}</Text>
          <Text
            style={styles.change}
            onPress={() => {
              onChange();
            }}>{`${OTP.change}`}</Text>
        </View>
        <OtpInputs
          style={styles.otp}
          handleChange={code => {
            onOTP(code);
          }}
          numberOfInputs={6}
          inputContainerStyles={[
            styles.inputOtp,
            {
              borderColor: funColor()
                ? Colors.orange
                : value === otp
                ? Colors.blue
                : Colors.darkgrey,
            },
          ]}
          inputStyles={styles.inputValue}
        />
        {funColor() && <Text style={styles.error}>{`${OTP.otp_error}`}</Text>}
        <TouchableOpacity style={styles.onSubmit} onPress={() => onSubmit()}>
          <Text style={styles.submit}>{`${OTP.submit}`}</Text>
        </TouchableOpacity>
        {funColor() ? (
          <Text
            style={[
              styles.resend,
              {color: Colors.blue},
            ]}>{`${OTP.resend}`}</Text>
        ) : (
          <Text style={[styles.resend, {color: Colors.gray}]}>
            {`${OTP.resend}`} {`${OTP.sec}`}
          </Text>
        )}
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
  otp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
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
  error: {
    color: Colors.orange,
    fontSize: 17,
    marginBottom: 10,
    textAlign: 'center',
  },
  inputValue: {
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
  head: {
    fontSize: 20,
    marginBottom: 9,
    color: Colors.darkblack,
    textAlign: 'center',
  },
  resend: {
    marginTop: 19,
    fontSize: 18,
    textAlign: 'center',
  },
  mbno: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  change: {
    color: Colors.blue,
    fontSize: 15,
    marginLeft: 9,
  },
  inputOtp: {
    borderWidth: 1,
    width: 40,
    height: 52,
    backgroundColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 9,
  },
});
export default OtpFun;
