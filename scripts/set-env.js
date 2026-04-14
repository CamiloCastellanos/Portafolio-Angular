const fs = require('fs');

const env = {
  production: true,
  firebase: {
    apiKey: process.env.apiKey || '',
    authDomain: process.env.authDomain || '',
    projectId: process.env.projectId || '',
    storageBucket: process.env.storageBucket || '',
    messagingSenderId: process.env.messagingSenderId || '',
    appId: process.env.appId || '',
    measurementId: process.env.measurementId || ''
  }
};

const content = `export const environment = ${JSON.stringify(env, null, 2)};`;

fs.writeFileSync(
  'src/environments/environment.prod.ts',
  content
);

console.log('✅ environment.prod.ts generado');
