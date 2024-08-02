import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      blurRadius={10}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          color='primary'
          title='Login'
          onPress={() => console.log('Login Pressed')}
        />
        <AppButton
          color='secondary'
          title='Register'
          onPress={() => console.log('Register Pressed')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
  buttonsContainer: {
    padding: 10,
    width: '100%',
  },
});

export default WelcomeScreen;
