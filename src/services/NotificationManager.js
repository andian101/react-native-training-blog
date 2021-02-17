import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

export default class NotificationManager {
  static channelDetails = {
    channelId: 'TRAINING_BLOG', // (required)
    channelName: 'Training Blog Channel', // (required)
  };

  static configure = () => {
    PushNotification.configure({
      onNotification: (notification) => {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      requestPermissions: true,
    });
    PushNotification.createChannel(
      {
        ...NotificationManager.channelDetails,
      },
      (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  static cancelLocalNotification(id) {
    return PushNotification.cancelLocalNotifications({ id: id });
  }

  static localNotification({ title, body = '', id, date }) {
    PushNotification.localNotification({
      id: id,
      title: title,
      message: body,
      date: date,
      allowWhileIdle: true,
      ...NotificationManager.channelDetails,
    });
  }

  static scheduleNotification({ title, body = '', id, date }) {
    PushNotification.localNotificationSchedule({
      id: id,
      title: title,
      message: body,
      date: date,
      allowWhileIdle: true,
      ...NotificationManager.channelDetails,
    });
  }

  static createChannel() {
    PushNotification.createChannel(
      {
        ...NotificationManager.channelDetails,
      },
      (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }
}
