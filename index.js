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

     alert(`name: ${document.getElementById("full_name").value}
        <br>movies  ${results.movies}   radio   ${results.radio}    tv    ${results.tv}     eat out    ${results.take_out}<br> your favorite food is ${selected}`)
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