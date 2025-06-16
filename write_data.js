import {retrieveData, sendData} from "./get_data.js"

async function displayData(){

  let youngest 
  let oldest
  let average
  let pizza
  let pasta
  let wors
  let movies 
  let radio
  let eatOut
  let tv

    let jsonFile = await retrieveData()
    

    oldest = highestAge(jsonFile)
    youngest = lowestAge(jsonFile)
    average = averageAge(jsonFile)
    const size = jsonFile.length;
    console.log(jsonFile.size)

    document.getElementById("age").innerHTML = `${average}`
    document.getElementById("oldest").innerHTML = `${oldest}`
    document.getElementById("youngest").innerHTML = `${youngest}`
  

    jsonFile.forEach((jsonFile) => {
    // console.log(jsonFile.email)
    youngest = jsonFile.dateOfBirth
  });
      // document.getElementById("youngest").innerHTML = `it ifdss ${youngest}`
      document.getElementById("survey_no").innerHTML = `${size}`

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



//   async function displayEmails() {
//   const users = await retrieveData();
//   // const emailListDiv = document.getElementById("email-list");

//   // Clear any previous content
//   // emailListDiv.innerHTML = "";

//   users.forEach((user) => {
//     // const p = document.createElement("p");
//     // p.textContent = user.email;
//     // emailListDiv.appendChild(p);
//     console.log(user.email)
//   });
// }
// displayEmails()

// function highestAge(jsonFile){
//   let highestAge = null;

//     jsonFile.forEach((doc) => {
//       const data = doc.dateOfBirth;
      
//       const age = parseInt(data.dateOfBirth);
//       // console.log(doc.dateOfBirth)
//       if (!isNaN(age)) {
//         if (highestAge === null || age > highestAge) {
//           highestAge = age;
//         }
//       }
//     });
//     console.log(highestAge)
//     return highestAge
// }


function calculateAge(dobString) {
  const dob = new Date(dobString);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

function highestAge(jsonFile) {
  let highestAge = null;

  jsonFile.forEach((doc) => {
    const dob = doc.dateOfBirth;
    const age = calculateAge(dob);

    if (!isNaN(age)) {
      if (highestAge === null || age > highestAge) {
        highestAge = age;
      }
    }
  });
// console.log(highestAge)
  return highestAge;
}


function lowestAge(jsonFile) {
  let lowestAge = null;

  jsonFile.forEach((doc) => {
    const dob = doc.dateOfBirth;
    const age = calculateAge(dob);

    if (!isNaN(age)) {
      if (lowestAge === null || age < lowestAge) {
        lowestAge = age;
      }
    }
  });
// console.log("lowest   " + lowestAge)
  return lowestAge;
}


function averageAge(jsonFile){
  let list = [];
  let sum=0
  let averageCount 

  jsonFile.forEach((doc) => {
    const dob = doc.dateOfBirth;
    const age = calculateAge(dob);

    if (!isNaN(age)) {
      list.push(age)
    }
  });

  for(let i=0; i< list.length; i++){
    sum+=list[i]
  }
  averageCount = sum/list.length
console.log("lowest   " + averageCount)
  return averageCount;
}