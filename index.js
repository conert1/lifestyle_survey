// alert("ssss")

// document.addEventListener(bu)

// addEventListener('click', () => {
//     getSelectedFoods()
// })
document.getElementById('submit').addEventListener('click', () => {
  getSelectedFoods();
});

function getSelectedFoods() {
  const checkboxes = document.querySelectorAll('input[name="food"]:checked');
  const selected = Array.from(checkboxes).map(cb => cb.value);
  console.log("Selected foods:", selected);
 



    const questions = ["movies", "radio", "take_out", "tv"]; // Use the correct names

    let results = {};

    questions.forEach((question) => {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      results[question] = selected ? selected.value : "Not selected";
    });

     alert(`movies  ${results.movies}   radio   ${results.radio}    tv    ${results.tv}     eat out    ${results.take_out}`)
  // You can store `selected` in a variable or send it to a server, etc.
}