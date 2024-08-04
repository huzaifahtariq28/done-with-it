import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import expoPushTokensApi from '../api/expoPushTokens';
import logger from '../utility/logger';

const projectId = '90094509-e8f2-4e2d-a978-9de03aecdc6a';

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { granted } = await Notifications.requestPermissionsAsync();
      if (!granted) return;

      const token = await Notifications.getExpoPushTokenAsync({
        projectId,
      });
      expoPushTokensApi.register(token.data);
    } catch (error) {
      logger.log('Error getting a push token.', error);
    }
  };
};
