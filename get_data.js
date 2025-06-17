  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// I deliberately left this info "API key" open just incase someone wants to test it out
const firebaseConfig = {
  apiKey: "AIzaSyDC6QxfA2yUYzDKxXoc7cJ2xzy-qsG2tR0",
  authDomain: "lifestyle-survey-3df67.firebaseapp.com",
  projectId: "lifestyle-survey-3df67",
  storageBucket: "lifestyle-survey-3df67.firebasestorage.app",
  messagingSenderId: "994050115126",
  appId: "1:994050115126:web:747c78ea2ddb81fd343a97"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to send data to Firestore or will create a collection
async function sendData(name, email, phone_number, dateOfBirth, favoriteFood, movies, radio, eatOut, tv) {
  try {
    await addDoc(collection(db, "survey_form1"), {
      name,
      email,
      phone_number,
      dateOfBirth,
      favoriteFood,
      movies,
      radio,
      eatOut,
      tv
    });
    alert("Data saved successfully!");
  } catch (error) {
    console.error("Error writing document: ", error);
    alert("Error saving data.");
  }
}

// Function to retrieve all user documents
async function retrieveData() {
  try {
    const querySnapshot = await getDocs(collection(db, "survey_form1"));
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });

    return users;
  } catch (error) {
    console.error("Error retrieving data: ", error);
    return [];
  }
}


export {retrieveData, sendData}