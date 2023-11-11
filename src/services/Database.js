import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('ImageGallery.db');

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS 
      Images
      (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      path TEXT, 
      latitude REAL, 
      longitude REAL, 
      timestamp TEXT)`,
    );
  });
};

export const insertImage = (image) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO Images (path, latitude, longitude, timestamp) VALUES (?, ?, ?, ?)`,
      [image.path, image.latitude, image.longitude, image.timestamp],
      (_, result) => {
        console.log("Image inserted successfully");
      },
      (_, error) => {
        console.error("Error inserting image: ", error);
        return true; // rollback transaction
      }
    );
  });
};

export const getImages = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(`SELECT * FROM Images`, [], (_, { rows: { _array } }) => {
        resolve(_array);
      });
    });
  });
};

export const deleteImage = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM Images WHERE id = ?`, 
        [id],
        (_, result) => {
          if (result.rowsAffected > 0) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (_, error) => {
          console.error("Error deleting image: ", error);
          reject(error);
          return true; // rollback transaction
        }
      );
    });
  });
};

export const closeDatabase = () => {
  if (db) {
    console.log("Closing DB");
    db._db.close();
  } else {
    console.log("Database was not OPENED");
  }
};