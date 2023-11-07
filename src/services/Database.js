import SQLite from 'react-native-sqlite-storage';

let db;

export const openDatabase = () => {
  db = SQLite.openDatabase({
    name: 'ImageGallery.db',
    location: 'default',
  });
};

export const createTable = () => {
  db.transaction((txn) => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS 
      Images
      (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      path TEXT, 
      latitude REAL, 
      longitude REAL, 
      timestamp TEXT)`,
      [],
    );
  });
};

export const insertImage = (image) => {
  db.transaction((txn) => {
    txn.executeSql(
      `INSERT INTO Images (path, latitude, longitude, timestamp) VALUES (?, ?, ?, ?)`,
      [image.path, image.latitude, image.longitude, image.timestamp],
    );
  });
};

export const getImages = () => {
  return new Promise((resolve, reject) => {
    db.transaction((txn) => {
      txn.executeSql(`SELECT * FROM Images`, [], (tx, results) => {
        let images = [];
        for (let i = 0; i < results.rows.length; ++i) {
          images.push(results.rows.item(i));
        }
        resolve(images);
      });
    });
  });
};

export const deleteImage = (id) => {
  db.transaction((txn) => {
    txn.executeSql(`DELETE FROM Images WHERE id = ?`, [id]);
  });
};