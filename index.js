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

    //  alert(`name: ${document.getElementById("full_name").value}
    //     <br>movies  ${results.movies}   radio   ${results.radio}    tv    ${results.tv}     eat out    ${results.take_out}<br> your favorite food is ${selected}`)

        sendData(name, email, phone_number, dateOfBirth, favoriteFood, movies, radio, eatOut, tv)

      }


  const submitBtn = document.getElementById('submit');
  const requiredInputs = [
    document.getElementById('full_name'),
    document.getElementById('email'),
    document.getElementById('DOB'),
    document.getElementById('phone_number'),
  ];

  // Optional: add checkboxes and radio group validation if needed
  function allFieldsFilled() {
    return requiredInputs.every(input => input.value.trim() !== '');
  }

  function toggleSubmitButton() {
    submitBtn.disabled = !allFieldsFilled();
  }

  // Add event listeners to each input
  requiredInputs.forEach(input => {
    input.addEventListener('input', toggleSubmitButton);
  });

  // Initial check
  toggleSubmitButton();


function sendData(name, email, phone_number, dateOfBirth, favoriteFood, movies, radio, eatOut, tv){
  alert(`${favoriteFood, name, email, phone_number, dateOfBirth, favoriteFood, movies, radio}  and ${favoriteFood}`)

}