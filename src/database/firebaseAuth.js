import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

const registerUser = async (data) => {
    const { name, email, password, role } = data;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};

const loginUser = async () => {

};

const logOutUser = async () => {

};

export { registerUser, loginUser, logOutUser, auth };