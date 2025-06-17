import { retrieveData } from "./get_data.js";

async function displayData() {
  let jsonFile = await retrieveData();

  const size = jsonFile.length;
  let oldest = highestAge(jsonFile);
  let youngest = lowestAge(jsonFile);
  let average = averageAge(jsonFile);
  let favorite = favoriteFood(jsonFile, size);
  let hobbies = averageHobbiesRating(jsonFile, size);

  if (size == 0) {
    document.getElementById("heading").innerHTML = "No Surveys Available.";
    const rows = document.querySelectorAll(".survey-table tr");
    rows.forEach((row) => (row.style.display = "none"));
  } else {
    document.getElementById("survey_no").innerHTML = `${size}`;

    document.getElementById("age").innerHTML = `${average}`;
    document.getElementById("oldest").innerHTML = `${oldest}`;
    document.getElementById("youngest").innerHTML = `${youngest}`;

    document.getElementById("love_pizza").innerHTML = `${favorite[0]}`;
    document.getElementById("love_pasta").innerHTML = `${favorite[1]}`;
    document.getElementById("love_pap").innerHTML = `${favorite[2]}`;

    document.getElementById("watch_movies").innerHTML = `${hobbies[0]}`;
    document.getElementById("listen_to_radio").innerHTML = `${hobbies[1]}`;
    document.getElementById("eat_out").innerHTML = `${hobbies[2]}`;
    document.getElementById("watch_tv").innerHTML = `${hobbies[3]}`;
  }
}

displayData();

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
  return lowestAge;
}

function averageAge(jsonFile) {
  let list = [];
  let sum = 0;
  let averageCount;

  jsonFile.forEach((doc) => {
    const dob = doc.dateOfBirth;
    const age = calculateAge(dob);

    if (!isNaN(age)) {
      list.push(age);
    }
  });

  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  averageCount = sum / list.length;
  return averageCount.toFixed(1);
}

function favoriteFood(jsonFile, size) {
  let fav = [];
  let pizzaNo = 0;
  let pastaNo = 0;
  let worsNo = 0;

  jsonFile.forEach((doc) => {
    fav.push(doc.favoriteFood);
  });
  let straightList = fav.flat();
  for (let i = 0; i < straightList.length; i++) {
    if (straightList[i] == "Pizza") {
      pizzaNo++;
    }
    if (straightList[i] == "Pasta") {
      pastaNo++;
    }
    if (straightList[i] == "pap and wors") {
      worsNo++;
    }
  }

  let pizzaPercentage = (pizzaNo * 100) / size;
  let pastaPercentage = (pastaNo * 100) / size;
  let worsPercentage = (worsNo * 100) / size;
  return [
    pizzaPercentage.toFixed(1),
    pastaPercentage.toFixed(1),
    worsPercentage.toFixed(1),
  ];
}

function averageHobbiesRating(jsonFile, size) {
  let favTv = [];
  let favRadio = [];
  let favMovies = [];
  let favEatOut = [];
  let sumTV = 0;
  let sumRadio = 0;
  let sumMovies = 0;
  let sumEatout = 0;

  jsonFile.forEach((doc) => {
    favTv.push(doc.tv);
    favRadio.push(doc.radio);
    favEatOut.push(doc.eatOut);
    favMovies.push(doc.movies);
  });
  for (let i = 0; i < size; i++) {
    sumTV += Number(favTv[i]);
    sumRadio += Number(favRadio[i]);
    sumEatout += Number(favEatOut[i]);
    sumMovies += Number(favMovies[i]);
  }

  return [
    (sumMovies / size).toFixed(1),
    (sumRadio / size).toFixed(1),
    (sumEatout / size).toFixed(1),
    (sumTV / size).toFixed(1),
  ];
}
