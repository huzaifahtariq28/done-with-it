import { View, StyleSheet } from 'react-native';

import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
