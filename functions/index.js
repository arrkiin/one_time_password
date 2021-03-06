const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./one-time-password.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://one-time-password-3fa6b.firebaseio.com',
});

exports.createUser = functions.https.onRequest(createUser);
