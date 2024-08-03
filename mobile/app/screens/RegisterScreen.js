import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label('Name'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email')
    .label('Email'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters')
    .label('Password'),
});

function RegisterScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => navigation.navigate(routes.LOGIN)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon='account'
          placeholder='Name'
          autoCapitalize='words'
          autoCorrect={false}
          keyboardType='default'
          textContentType='name'
          name='name'
        />
        <AppFormField
          icon='email'
          placeholder='Email'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          textContentType='emailAddress'
          name='email'
        />
        <AppFormField
          icon='lock'
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='password'
          secureTextEntry
          name='password'
        />
        <SubmitButton title='Register' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;
