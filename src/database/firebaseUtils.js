
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import app from "./firebaseConfig";

const db = getDatabase(app);

//read/get data, from database
export const getFirebaseDate = async (tableName) => {
    const starCountRef = ref(db, tableName)

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
            reject(error)
        }
    });
};

export const getFirebaseDateForEdit = async (tableName) => {
    const starCountRef = ref(db, tableName);
    return new Promise((resolve, reject) => {
        try {
            onValue(starCountRef, (snapshot) => {
                resolve(snapshot.val());
            });
        } catch (error) {
            reject(error)
        };
    });
};

//write/set/push data to database;
export const setDataToFirebase = (tablaName, data) => {
    push(ref(db, tablaName), data);
};

//write/set/push data to database;
export const updateDataFromFirebase = (tablaName, data) => {
    set(ref(db, tablaName), data);
};

//remove Data From Firebase;
export const removeDataFromFirebase = (tablaName) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(remove(ref(db, tablaName)));
        } catch (error) {
            reject(error);
        }
    });
};

// *********** user profile *************
export const userProfile = async (data) => {
    const { id, name, role } = data;
    set(ref(db, "useProfile/" + id), {
        name,
        role,
    });
};