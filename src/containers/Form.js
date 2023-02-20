import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

export const Form = () => {
  const [maleFlag, setmaleFlag] = useState(false);
  const [femaleFlag, setfemaleFlag] = useState(false);
  const [otherFlag, setotherFlag] = useState(false);
  const [data, setData] = useState();

  const handleGender = selected => {
    switch (selected) {
      case 1:
        return (
          setmaleFlag(!maleFlag), setfemaleFlag(false), setotherFlag(false)
        );
      case 2:
        return (
          setmaleFlag(false), setfemaleFlag(!femaleFlag), setotherFlag(false)
        );
      case 3:
        return (
          setmaleFlag(false), setfemaleFlag(false), setotherFlag(!otherFlag)
        );
      default:
        return setmaleFlag(false), setfemaleFlag(false), setotherFlag(false);
    }
  };

  const onSubmit = value => {
    setData(value);
  };

  const validation = yup.object({
    phno: yup
      .string()
      .trim()
      .required('Phone number is required')
      .matches(/^(?!(0))[0-9]{9,10}\b/, 'Enter a valid phone number')
      .max(10, 'Phone number should be of maximum 10 length'),
    age: yup
      .number()
      .required('Age is required')
      .positive('Must be more than 0')
      .integer('Must be more than 0')
      .max(99, 'Age should be less than 100'),
    gender: yup.string().required('Gender is required'),
    country: yup.string().trim().required('Country is required'),
    pincode: yup
      .string()
      .trim()
      .min(4, 'Pincode should be of minimum 4 length')
      .max(6, 'Pincode should be of maximum 6 length')
      .required('Pincode is required'),
  });

  return (
    <Formik
      initialValues={{phno: '', age: '', gender: '', country: '', pincode: ''}}
      validationSchema={validation}
      onSubmit={values => onSubmit(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        errors,
        touched,
        values,
      }) => (
        <View style={styles.main}>
          <View>
            <Text style={styles.label}>PHONE NUMBER</Text>

            <TextInput
              style={styles.input}
              onChangeText={handleChange('phno')}
              onBlur={handleBlur('phno')}
              value={values.phno}
              keyboardType="phone-pad"
            />
            {errors.phno && touched.phno ? (
              <Text style={styles.error}>{errors.phno}</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.label}>AGE</Text>

            <TextInput
              style={styles.input}
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              keyboardType="numeric"
            />
            {errors.age && touched.age ? (
              <Text style={styles.error}>{errors.age}</Text>
            ) : null}
          </View>
          <Text style={styles.label}>GENDER</Text>
          {errors.gender && touched.gender ? (
            <Text style={styles.error}>{errors.gender}</Text>
          ) : null}
          <View style={styles.gender}>
            <Text
              onPress={() => {
                handleGender(1);
                setFieldValue('gender', 'Male');
              }}
              value={values.gender}
              style={{color: maleFlag ? 'blue' : 'black'}}>
              Male
            </Text>
            <Text
              onPress={() => {
                handleGender(2);
                setFieldValue('gender', 'Female');
              }}
              value={values.gender}
              style={{color: femaleFlag ? 'blue' : 'black'}}>
              Female
            </Text>
            <Text
              onPress={() => {
                handleGender(3);
                setFieldValue('gender', 'Other');
              }}
              value={values.gender}
              style={{color: otherFlag ? 'blue' : 'black'}}>
              Other
            </Text>
          </View>
          <View>
            <Text style={styles.label}>COUNTRY</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('country')}
              onBlur={handleBlur('country')}
              value={values.country}
            />
            {errors.country && touched.country ? (
              <Text style={styles.error}>{errors.country}</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.label}>PINCODE</Text>

            <TextInput
              style={styles.input}
              onChangeText={handleChange('pincode')}
              onBlur={handleBlur('pincode')}
              value={values.pincode}
              keyboardType="numeric"
            />
            {errors.pincode && touched.pincode ? (
              <Text style={styles.error}>{errors.pincode}</Text>
            ) : null}
          </View>
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  main: {
    top: 100,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
  gender: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
});
