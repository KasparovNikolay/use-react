class Notify {
  #notification = false;
  #permission: NotificationPermission = 'default';

  constructor() {
    this.#notification = 'Notification' in window;

    Notification.requestPermission().then((permission) => {
      this.#permission = permission;
    });
  }

  public createNotification = (
    title: string,
    options: NotificationOptions,
  ): Notification => {
    if (this.#notification && this.#permission === 'granted') {
      const data = new Notification(title, options);

      return data;
    }

    throw new Error(
      'this app doesnt have permission ot your this browser doesnt support this feature',
    );
  };
}

export default new Notify();
