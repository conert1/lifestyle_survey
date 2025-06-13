import {retrieveData, sendData} from "./get_data.js"

async function displayData(){


    document.getElementById("age").innerHTML = "lllllllllllllllll"
    console.log(document.getElementById("age").innerHTML)
    let jsonFile = await retrieveData()
    console.log(jsonFile)

    document.getElementById("age").innerHTML = "lllllllllllllllll"
    document.getElementById("oldest").innerHTML = "lllllllllllllllll"
    document.getElementById("youngest").innerHTML = `it is ${jsonFile.radio}`

    return await retrieveData()
  }


//   displayData()
  async function write() {
    let ll= await displayData()
    console.log(ll.radio)
     document.getElementById("age").innerHTML = "lllllllllllllllll"
    document.getElementById("oldest").innerHTML = "lllllllllllllllll"
    document.getElementById("youngest").innerHTML = `it is ${ll.radio}`
    
  }
  write()