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
  alert(`You selected ${selected}`)
  // You can store `selected` in a variable or send it to a server, etc.
}