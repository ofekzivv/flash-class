import firebaseInstance from '../'
import auth from "firebase/compat";

async function registerToFB(email, password) {
    return await firebaseInstance.firebase.auth().createUserWithEmailAndPassword(email, password)
}

async function logOut() {
    return await firebaseInstance.firebase.auth().signOut()
}

async function logIn(email, password) {
    return await firebaseInstance.firebase.auth().signInWithEmailAndPassword(email, password)
}

async function SignWithGoogle() {
    const provider = await new firebaseInstance.firebase.auth.GoogleAuthProvider();
    firebaseInstance.firebase.auth().signInWithPopup(provider).then((result) => {
            var credential = result.credential;
            var user = result.user;
            window.user = result.user
        return;
        }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });
}

export default {
    registerToFB,
    logOut,
    logIn,
    SignWithGoogle
}