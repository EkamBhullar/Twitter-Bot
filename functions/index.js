/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const admin=require('firebase-admin');
const logger = require("firebase-functions/logger");
admin.initializeApp();

const dbRef=admin.firestore().doc('tokens/demo');

const TwitterApi=require('twitter-api-v2').default;
const twitterClient=new TwitterApi({
clientId:
clientSecret:
});


exports.auth = onRequest((request, response) => {});

exports.callback=onRequest((request,respone) => {});

exports.tweet=onRequest((request,respone) => {});

