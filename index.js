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


//validates the date of birth
function isValidDateOfBirth() {
  const dobInput = document.getElementById("DOB");
  const dobValue = new Date(dobInput.value);
  const minDate = new Date("1900-01-01");
  const maxDate = new Date("2020-12-31");

  return dobValue >= minDate && dobValue <= maxDate;
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

const foodCheckboxes = document.querySelectorAll('input[name="food"]');
const radioGroups = ["movies", "radio", "take_out", "tv"];

function allFieldsFilled() {
  const requiredFilled = requiredInputs.every(
    (input) => input.value.trim() !== ""
  );
  const dobValid = isValidDateOfBirth();
  const foodChecked = Array.from(foodCheckboxes).some((cb) => cb.checked);

  const radiosFilled = radioGroups.every((group) => {
    return document.querySelector(`input[name="${group}"]:checked`) !== null;
  });

  return requiredFilled && foodChecked && radiosFilled && dobValid;
}

function toggleSubmitButton() {
  submitBtn.disabled = !allFieldsFilled();
}

requiredInputs.forEach((input) => {
  input.addEventListener("input", toggleSubmitButton);
});

foodCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", toggleSubmitButton);
});

radioGroups.forEach((group) => {
  const radios = document.querySelectorAll(`input[name="${group}"]`);
  radios.forEach((radio) => {
    radio.addEventListener("change", toggleSubmitButton);
  });
});

toggleSubmitButton();
