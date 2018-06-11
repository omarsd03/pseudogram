import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyCp8TF7aMBv4lVA9SG0bc6QLLe9Oj8QM1I",
    authDomain: "pseudogram-97e32.firebaseapp.com",
    databaseURL: "https://pseudogram-97e32.firebaseio.com",
    projectId: "pseudogram-97e32",
    storageBucket: "pseudogram-97e32.appspot.com",
    messagingSenderId: "1068754432581"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();