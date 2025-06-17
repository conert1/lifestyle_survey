import { sendData } from "./get_data.js";

//submit button will only be active once all fields in the table have been filled out
document.getElementById("submit").addEventListener("click", () => {
  getSelectedFoods();
});


// gathers the data from the form to send to the db-collection
function getSelectedFoods() {
  const checkboxes = document.querySelectorAll('input[name="food"]:checked');
  const selected = Array.from(checkboxes).map((cb) => cb.value);
  const questions = ["movies", "radio", "take_out", "tv"];

  let results = {};

  questions.forEach((question) => {
    const selected = document.querySelector(
      `input[name="${question}"]:checked`
    );
    results[question] = selected ? selected.value : "Not selected";
  });

  let name = document.getElementById("full_name").value;
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("phone_number").value;
  let dateOfBirth = document.getElementById("DOB").value;
  let favoriteFood = selected;
  let movies = results.movies;
  let radio = results.radio;
  let eatOut = results.take_out;
  let tv = results.tv;

  sendData(
    name,
    email,
    phone_number,
    dateOfBirth,
    favoriteFood,
    movies,
    radio,
    eatOut,
    tv
  );
}

// the following functions are just to make sure that the button is
// only active once all fields have been filled out.

const submitBtn = document.getElementById("submit");
const requiredInputs = [
  document.getElementById("full_name"),
  document.getElementById("email"),
  document.getElementById("DOB"),
  document.getElementById("phone_number"),
];


function allFieldsFilled() {
  const foodChecked = document.querySelectorAll('input[name="food"]:checked').length > 0;
  const requiredFilled = requiredInputs.every((input) => input.value.trim() !== "");
  return requiredFilled && foodChecked;
}

document.querySelectorAll('input[name="food"]').forEach((checkbox) => {
  checkbox.addEventListener("change", toggleSubmitButton);
});



function toggleSubmitButton() {
  submitBtn.disabled = !allFieldsFilled();
}

requiredInputs.forEach((input) => {
  input.addEventListener("input", toggleSubmitButton);
});

document.querySelectorAll('input[name="food"]').forEach((checkbox) => {
  checkbox.addEventListener("change", toggleSubmitButton);
});


toggleSubmitButton();
