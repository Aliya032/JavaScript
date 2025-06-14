/*
//GET REQUEST 
etch("https://dummyjson.com/products/1", {})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

*/

/*
//POST REQUEST
fetch("https://dummyjson.com/products/add", {
  method: "POST",
  header: {
    "Content-type": "appication/json",
  },
  body: JSON.stringify({
    description: "hehehe 19",
    price: "2300",
    rating: "4/10",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

*/

/*
//PUT REQUEST
fetch("https://dummyjson.com/products/1", {
  method: "PUT",
  header: {
    "Content-type": "appication/json",
  },
  body: JSON.stringify({
    title: "Chasing Red",
    price: "7.88",
    stock: "100",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
*/

//DELETE REQUEST
fetch("https://dummyjson.com/products/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
