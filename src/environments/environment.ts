export const environment = {
  production: false,
  firebase: {
    apiKey: import.meta.env['apiKey'] || '',
    authDomain: import.meta.env['authDomain'] || '',
    databaseURL: import.meta.env['databaseURL'] || '',
    projectId: import.meta.env['projectId'] || '',
    storageBucket: import.meta.env['storageBucket'] || '',
    messagingSenderId: import.meta.env['messagingSenderId'] || '',
    appId: import.meta.env['appId'] || '',
    measurementId: import.meta.env['measurementId'] || '',
  }
};
