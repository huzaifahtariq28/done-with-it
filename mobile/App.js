import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Notifications from 'expo-notifications';

import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);

    setIsReady(true);
  };

  useEffect(() => {
    restoreUser().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isReady) return null;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView>
        <OfflineNotice />
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}
