import {
    getDatabase,
    ref,
    onValue,
    push,
    set,
    remove,
} from "firebase/database";
import app from "./firebaseConfig";

export const db = getDatabase(app);

// Read/Get data from database;
export const getFirebaseData = async (tableName) => {
    const starCountRef = ref(db, tableName);

    return new Promise((resolve, reject) => {
        try {
            onValue(starCountRef, (snapshot) => {
                const updateCategoryList = [];

                snapshot.forEach((item) => {
                    updateCategoryList.push({
                        id: item.key,
                        ...item.val(),
                    });
                });

                resolve(updateCategoryList);
            });
        } catch (error) {
            reject(error);
        }
    });
};

export const getFirebaseDataForEdit = async (tableName) => {
    const starCountRef = ref(db, tableName);

    return new Promise((resolve, reject) => {
        try {
            onValue(starCountRef, (snapshot) => {
                resolve(snapshot.val());
            });
        } catch (error) {
            reject(error);
        }
    });
};

// Write/Set/Push data to database;
export const setDataToFirebase = (tableName, data) => {
    push(ref(db, tableName), data);
};

// Write/Set/Push data to database;
export const updateDataFromFirebase = (tableName, data) => {
    set(ref(db, tableName), data);
};

// Remove data from firebase;
export const removeDataFromFirebase = (tableName) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(remove(ref(db, tableName)));
        } catch (error) {
            reject(error);
        }
    });
};

// ******************************* User Profile *************************** //
export const createUserProfile = async (data) => {
    const { id, name, role, email } = data;
    set(ref(db, "userProfile/" + id), {
        name,
        role,
        email,
    });
};

export const getProfile = async (id) => {
    return new Promise((resolve, reject) => {
        try {
            onValue(ref(db, "userProfile/" + id), (snapshot) => {
                resolve(snapshot.val());
            });
        } catch (error) {
            reject(error);
        }
    });
};
