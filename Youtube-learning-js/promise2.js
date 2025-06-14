const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (randomNumber < 4) {
      resolve("well done! you guessed right!");
    } else {
      reject("oops! you guessed wrong! ");
    }
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

//CHAINING PROMISES
const promiseOne = new Promise((resolve, reject) => {
  resolve("well done! promise One is resolved");
});
const promiseTwo = new Promise((resolve, reject) => {
  resolve("well done! promise Two is resolved");
});
const promiseThree = new Promise((resolve, reject) => {
  reject("well done! promise Three is Rejected");
});

//PROMISE CHAINING
promiseOne
  .then((value) => {
    console.log(value);
    return promiseTwo;
  })
  .then((value) => {
    console.log(value);
    return promiseThree;
  })
  .catch((error) => {
    console.log(error);
  });

//THIS BELOW IS DIFFICULT TO READ SO ABOVE ONE IS BETTER FOR PROMISES CHAINING
promiseOne
  .then((value) => {
    console.log(value);
    promiseTwo.then((data) => {
      console.log(data);
      promiseThree
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  })
  .catch((error) => {
    console.log(error);
  });
