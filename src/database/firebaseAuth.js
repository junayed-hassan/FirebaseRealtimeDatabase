import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

const registerUser = async (data) => {
    const { name, email, password, role } = data;
    try {
        const res = createUserWithEmailAndPassword(auth, email, password); 
        const user = (await res).user
        return {
            id: user.uid,
            name,
            role,
        };

    } catch (error) {
        return {
            error: true,
            code: error.code,
            message: error.message,
        }
    }
};

const loginUser = async () => {

};

const logOutUser = async () => {

};

export { registerUser, loginUser, logOutUser, auth };