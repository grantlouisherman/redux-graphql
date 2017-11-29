import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyA9ykS6Zh-C3F83upTahluJ7OulQdL068U",
    authDomain: "test-bfa8c.firebaseapp.com",
    databaseURL: "https://test-bfa8c.firebaseio.com",
    projectId: "test-bfa8c",
    storageBucket: "test-bfa8c.appspot.com",
    messagingSenderId: "138837568742"
};

const fire = firebase.initializeApp(config);
export default fire;