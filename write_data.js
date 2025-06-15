import {retrieveData, sendData} from "./get_data.js"

async function displayData(){

  let youngest 
  let oldest
  let pizza
  let pasta
  let wors
  let movies 
  let radio
  let eatOut
  let tv

    let jsonFile = await retrieveData()
        const size = jsonFile.length;
    console.log(jsonFile.size)

    document.getElementById("age").innerHTML = "lllllllllllllllll"
    document.getElementById("oldest").innerHTML = "lllllllllllllllll"
    document.getElementById("youngest").innerHTML = `it is ${jsonFile}`
  

    jsonFile.forEach((jsonFile) => {
    console.log(jsonFile.email)
    youngest = jsonFile.dateOfBirth
  });
      document.getElementById("youngest").innerHTML = `it ifdss ${youngest}`
      document.getElementById("survey_no").innerHTML = `Total number of surveys  ${size}`
      document.getElementById("lll").innerHTML = ` ${size}`



    return await retrieveData()

  }


  displayData()
  // async function write() {
  //   let ll= await displayData()
  //   console.log(ll.radio)
  //    document.getElementById("age").innerHTML = "lllllllllllllllll"
  //   document.getElementById("oldest").innerHTML = "lllllllllllllllll"
  //   document.getElementById("youngest").innerHTML = `it is ${ll}`
    
  // }
  // write()



  async function displayEmails() {
  const users = await retrieveData();
  // const emailListDiv = document.getElementById("email-list");

  // Clear any previous content
  // emailListDiv.innerHTML = "";

  users.forEach((user) => {
    // const p = document.createElement("p");
    // p.textContent = user.email;
    // emailListDiv.appendChild(p);
    console.log(user.email)
  });
}
displayEmails()