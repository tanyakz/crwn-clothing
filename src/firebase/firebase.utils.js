import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config={
    apiKey: "AIzaSyA1n_a9V8_0kQkXIffeBDBiewFYPTnDM94",
    authDomain: "crown-db-36750.firebaseapp.com",
    databaseURL: "https://crown-db-36750.firebaseio.com",
    projectId: "crown-db-36750",
    storageBucket: "crown-db-36750.appspot.com",
    messagingSenderId: "168569216959",
    appId: "1:168569216959:web:6da80bce2f4aa527364b0a",
    measurementId: "G-30DCLYVS0J"
  };

export const createUserProfileDocument = async (userAuth , additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); 
    
    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email, 
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error.message);
        }
    } return userRef;
}; 

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promps: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;