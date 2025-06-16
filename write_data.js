import {retrieveData, sendData} from "./get_data.js"

async function displayData(){

  let youngest 
  let oldest
  let average
  let favorite
  let hobbies
  let pizza
  let pasta
  let wors
  let movies 
  let radio
  let eatOut
  let tv

    let jsonFile = await retrieveData()
    
const size = jsonFile.length;
    oldest = highestAge(jsonFile)
    youngest = lowestAge(jsonFile)
    average = averageAge(jsonFile)
    favorite = favoriteFood(jsonFile, size)
    hobbies = averageHobbiesRating(jsonFile, size)
    console.log(jsonFile.size)

    document.getElementById("age").innerHTML = `${average}`
    document.getElementById("oldest").innerHTML = `${oldest}`
    document.getElementById("youngest").innerHTML = `${youngest}`

    document.getElementById("love_pizza").innerHTML = `${favorite[0]}`
    document.getElementById("love_pasta").innerHTML = `${favorite[1]}`
    document.getElementById("love_pap").innerHTML = `${favorite[2]}`


    document.getElementById("watch_movies").innerHTML = `${hobbies[0]}`
    document.getElementById("listen_to_radio").innerHTML = `${hobbies[1]}`
    document.getElementById("eat_out").innerHTML = `${hobbies[2]}`
    document.getElementById("watch_tv").innerHTML = `${hobbies[3]}`



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
// console.log("lowest   " + averageCount)
  return averageCount;
}


function favoriteFood(jsonFile, size) {
  let fav = [];
  let pizzaNo=0
  let pastaNo=0
  let worsNo=0
  let pizzaPercentage
  let pastaPercentage
  let worsPercentage

  jsonFile.forEach((doc) => {
    fav.push(doc.favoriteFood)
  });
  let straightList = fav.flat()
  for(let i=0; i<straightList.length; i++){
    console.log(straightList[i])
    if(straightList[i] == "Pizza"){
      pizzaNo++
    }
    if(straightList[i] == "Pasta"){
      pastaNo++
    }
    if(straightList[i] == "wors"){
      worsNo++
    }
  }

  pizzaPercentage = ((pizzaNo*100)/size)
  pastaPercentage = ((pastaNo*100)/size)
  worsPercentage = ((worsNo*100)/size)
// console.log(`pizza is ${pizzaPercentage}  pasta is ${pastaPercentage}  wors is ${worsPercentage}`)

  return [pizzaPercentage, pastaPercentage, worsPercentage];
}


function averageHobbiesRating(jsonFile, size){
  let lowestAge = null;
  let favTv = []
  let favRadio =[]
  let favMovies = []
  let favEatOut = []
  let sumTV=0
  let sumRadio=0
  let sumMovies=0
  let sumEatout=0

  jsonFile.forEach((doc) => {
    favTv.push(doc.tv)
    favRadio.push(doc.radio)
    favEatOut.push(doc.eatOut)
    favMovies.push(doc.movies)
  });
  for(let i=0; i<size; i++){
    sumTV+=Number(favTv[i])
    sumRadio+=Number(favRadio[i])
    sumEatout+=Number(favEatOut[i])
    sumMovies+=Number(favMovies[i])
  }

  console.log(`tv  ${sumTV}   radio  ${sumRadio}  eat ${sumEatout}   movies  ${sumMovies}`)
// console.log("lowest   " + lowestAge)

  return [(sumMovies/size), (sumRadio/size), (sumEatout/size), (sumTV/size)];
}