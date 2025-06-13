  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";



  // Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC6QxfA2yUYzDKxXoc7cJ2xzy-qsG2tR0",
  authDomain: "lifestyle-survey-3df67.firebaseapp.com",
  projectId: "lifestyle-survey-3df67",
  storageBucket: "lifestyle-survey-3df67.firebasestorage.app",
  messagingSenderId: "994050115126",
  appId: "1:994050115126:web:747c78ea2ddb81fd343a97"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Initialize Firestore
// const db = firebase.firestore();




function sendData(name, email, phone_number, dateOfBirth, favoriteFood, movies, radio, eatOut, tv) {
  db.collection("users").add({
    name: name,
    email: email,
    phone_number: phone_number,
    dateOfBirth: dateOfBirth,
    favoriteFood: favoriteFood,
    movies: movies,
    radio: radio,
    eatOut: eatOut,
    tv: tv
  })
  .then(() => {
    alert("Data saved successfully!");
  })
  .catch(error => {
    console.error("Error writing document: ", error);
    alert("Error saving data.");
  });
}




//  const app = initializeApp(firebaseConfig);

//     // ✅ Initialize Firestore
//     const db = getFirestore(app);

    // ✅ Retrieve Data
    // async function retrieveData() {
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       console.log("ID:", doc.id, "Data:", doc.data());
    //       console.log(doc.data().movies)
    //     });
    //   } catch (error) {
    //     console.error("Error retrieving data: ", error);
    //   }
    // }


    async function retrieveData() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });

    return users; // ✅ return all user documents as array of objects
  } catch (error) {
    console.error("Error retrieving data: ", error);
    return []; // return empty array on error
  }
}

export {retrieveData, sendData}