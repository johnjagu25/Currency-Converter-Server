let database = null;
const userCollectionName = "users";
module.exports = {
  initDb: () => {
    const admin = require("firebase-admin");
    const serviceAccount = require("../secure/serviceAccountKey.json");

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://exchange-176c5-default-rtdb.firebaseio.com/",
    });

    database = admin.database();
  },
  getUserCollection: () => {
    return database?.ref(userCollectionName);
  },
};
