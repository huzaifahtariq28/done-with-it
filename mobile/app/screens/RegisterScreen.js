import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from '../components/forms';
import usersApi from '../api/users';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import AppActivityIndicator from '../components/AppActivityIndicator';
import logger from '../utility/logger';

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
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const { logIn } = useAuth();
  const [error, setError] = useState(null);

  const handleRegister = async (userInfo) => {
    setError(null);
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError('An unexpected error occurred.');
        logger.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    logIn(authToken);
  };

  return (
    <>
      <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
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
    </>
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
