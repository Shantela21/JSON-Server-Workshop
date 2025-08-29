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
import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm"
async function fetchItems() {
  try {
    const response = await fetch("http://localhost:3000/items");
    const data = await response.json();
    console.log(data); // This is your actual data
  } catch (error) {
    console.log("Error:", error);
  }
}
// Calling the function
fetchItems();