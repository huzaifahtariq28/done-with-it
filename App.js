import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MessageScreen />
    </GestureHandlerRootView>
  );
}
