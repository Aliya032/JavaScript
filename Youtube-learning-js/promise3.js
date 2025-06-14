const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise one resolved");
  }, 2000);
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise two rejected");
  }, 1500);
});

Promise.all([promiseOne, promiseTwo])
  .then((data) => console.log(data[0], data[1]))
  .catch((error) => console.log(error));
