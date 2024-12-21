import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

const registerUser = async (data) => {
    const { name, email, password, role } = data;

    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = response.user;

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
        };
    }
};

const loginUser = async ({ email, password }) => {
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = response.user;

        return {
            id: user.uid,
            email: user.email,
        };
    } catch (error) {
        return {
            error: true,
            code: error.code,
            message: error.message,
        };
    }
};

const logOutUser = async () => {
    signOut(auth)
        .then(() => {})
        .catch((error) => {
            // An error happened.
        });
};

export { registerUser, logOutUser, loginUser, auth };
