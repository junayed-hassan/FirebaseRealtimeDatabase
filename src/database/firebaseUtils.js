
import { getDatabase, onValue, push, ref } from "firebase/database";
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

//write/set/push data to database;
export const setDataToFirebase = (tablaName, data) => {
    push(ref(db, tablaName), data);
}