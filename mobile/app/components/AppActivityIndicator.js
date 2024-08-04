import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import colors from '../config/colors';

function AppActivityIndicator({ visible = true }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        style={styles.animation}
        source={require('../assets/animations/loader.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: colors.white,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 500,
    height: 500,
  },
});

export default AppActivityIndicator;
