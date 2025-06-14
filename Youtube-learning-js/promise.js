const promise = new Promise((resolve, reject) => {
  const allWentWell = false;

  if (allWentWell) {
    resolve("All things went well");
  } else {
    reject("oops something went wrong");
  }
});

console.log(promise);
