// import cors from "cors";
//   fetch("http://localhost:3000/items")
//     .then(function (response) {
//       const k=response.json();
//     })
//     .then(function (k) {
//       console.log(k);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

// @ts-ignore
// import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm"
let characters: any[];
async function fetchItems() {
  try {
    const response = await fetch("http://localhost:3000/items");
    const data = await response.json();
    // console.log(data); // This is your actual data
    characters = await data;
    console.log(characters[2]);

  } catch (error) {
    console.log("Error:", error);
  }
}
// Calling the function
fetchItems();

let root = document.getElementById("root") as HTMLElement;
function noCharacterData (rootElement:HTMLElement, message:string): void{
  rootElement.innerHTML = message;
}
noCharacterData(root, "There are characters to display...");