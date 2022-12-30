// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnlsGtVxRueLtoD6BJCD3yAy3KdJiTa3k",
    authDomain: "taskbox-5.firebaseapp.com",
    projectId: "taskbox-5",
    storageBucket: "taskbox-5.appspot.com",
    messagingSenderId: "467660108973",
    appId: "1:467660108973:web:a9cd9419db43fe33380224"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
export default App