import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

function AppActivityIndicator({ visible = true }) {
  if (!visible) return null;

  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 500,
    height: 500,
  },
});

export default AppActivityIndicator;
