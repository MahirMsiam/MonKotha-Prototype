// src/firebaseConfig.js
const firebaseConfig = {
    apiKey: process.env.MONKOTHA_FIREBASE_API_KEY,
    authDomain: process.env.MONKOTHA_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.MONKOTHA_FIREBASE_PROJECT_ID,
    storageBucket: process.env.MONKOTHA_FIREBASE_STORAGE_BUCKET,
    databaseURL: process.env.MONKOTHA_FIREBASE_DATABASE_URL,
    messagingSenderId: process.env.MONKOTHA_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.MONKOTHA_FIREBASE_APP_ID,
};

export default firebaseConfig;

// Accessing the Chatbot API Key
const chatbotApiKey = process.env.MONKOTHA_CHATBOT_API_KEY;
