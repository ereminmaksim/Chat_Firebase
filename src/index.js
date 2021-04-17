import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// ДЛЯ FIREBASE
import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

/**********************************************************************/
// Initialize Firebase
firebase.initializeApp({
        apiKey: "AIzaSyAHCGqrQ6b2j4GBEcM8yxke5XEJuY_pS0Q",
        authDomain: "chat-react-e58e1.firebaseapp.com",
        projectId: "chat-react-e58e1",
        storageBucket: "chat-react-e58e1.appspot.com",
        messagingSenderId: "1038251786473",
        appId: "1:1038251786473:web:fda44568c0aa4a1d727078",
        measurementId: "G-43Y45C2X1H"
    }
);

export const Context = createContext(null)
export const auth = firebase.auth();
export const firestore = firebase.firestore();





ReactDOM.render(
    <Context.Provider value={{
            firebase,
            auth,
            firestore
    }}>
    <App />
    </Context.Provider>,
    document.getElementById('root')
);

