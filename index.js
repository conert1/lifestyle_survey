  // import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import {retrieveData, sendData} from "./get_data.js"

document.getElementById('submit').addEventListener('click', () => {
  getSelectedFoods();
});

function getSelectedFoods() {
  const checkboxes = document.querySelectorAll('input[name="food"]:checked');
  const selected = Array.from(checkboxes).map(cb => cb.value);
    const questions = ["movies", "radio", "take_out", "tv"]; 

    let results = {};

    questions.forEach((question) => {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      results[question] = selected ? selected.value : "Not selected";
    });

    let name = document.getElementById("full_name").value
    let email = document.getElementById("email").value
    let phone_number = document.getElementById("phone_number").value
    let dateOfBirth = document.getElementById("DOB").value
    let favoriteFood = selected
    let movies = results.movies
    let radio = results.radio
    let eatOut = results.take_out
    let tv = results.tv

        // sendData(name, email, phone_number, dateOfBirth, favoriteFood, movies, radio, eatOut, tv)

        retrieveData()
        // retrieveData()
      }


  const submitBtn = document.getElementById('submit');
  const requiredInputs = [
    document.getElementById('full_name'),
    document.getElementById('email'),
    document.getElementById('DOB'),
    document.getElementById('phone_number'),
  ];

  function allFieldsFilled() {
    return requiredInputs.every(input => input.value.trim() !== '');
  }

  function toggleSubmitButton() {
    submitBtn.disabled = !allFieldsFilled();
  }

  requiredInputs.forEach(input => {
    input.addEventListener('input', toggleSubmitButton);
  });

  toggleSubmitButton();

  




//   // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDC6QxfA2yUYzDKxXoc7cJ2xzy-qsG2tR0",
//   authDomain: "lifestyle-survey-3df67.firebaseapp.com",
//   projectId: "lifestyle-survey-3df67",
//   storageBucket: "lifestyle-survey-3df67.firebasestorage.app",
//   messagingSenderId: "994050115126",
//   appId: "1:994050115126:web:747c78ea2ddb81fd343a97"
// };

// // Initialize Firebase
// // firebase.initializeApp(firebaseConfig);

// // Initialize Firestore
// // const db = firebase.firestore();




// // function sendData(name, email, phone_number, dateOfBirth, favoriteFood, movies, radio, eatOut, tv) {
// //   db.collection("users").add({
// //     name: name,
// //     email: email,
// //     phone_number: phone_number,
// //     dateOfBirth: dateOfBirth,
// //     favoriteFood: favoriteFood,
// //     movies: movies,
// //     radio: radio,
// //     eatOut: eatOut,
// //     tv: tv
// //   })
// //   .then(() => {
// //     alert("Data saved successfully!");
// //   })
// //   .catch(error => {
// //     console.error("Error writing document: ", error);
// //     alert("Error saving data.");
// //   });
// // }




//  const app = initializeApp(firebaseConfig);

//     // ✅ Initialize Firestore
//     const db = getFirestore(app);

//     // ✅ Retrieve Data
//     async function retrieveData() {
//       try {
//         const querySnapshot = await getDocs(collection(db, "users"));
//         querySnapshot.forEach((doc) => {
//           console.log("ID:", doc.id, "Data:", doc.data());
//           console.log(doc.data().movies)
//         });
//       } catch (error) {
//         console.error("Error retrieving data: ", error);
//       }
//     }



