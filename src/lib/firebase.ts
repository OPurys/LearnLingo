import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAXhpgWtjavxEOmflkERlWesb8whiUExAA',
  authDomain: 'learn-lingo-81b92.firebaseapp.com',
  databaseURL:
    'https://learn-lingo-81b92-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-lingo-81b92',
  storageBucket: 'learn-lingo-81b92.firebasestorage.app',
  messagingSenderId: '105720829069',
  appId: '1:105720829069:web:0a8f22ae65dad9ac2ebec4',
  measurementId: 'G-F7150S8PWV',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
