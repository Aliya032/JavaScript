const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = true;

      if (preHeatOven) {
        resolve("Preheat oven to 180 deg");
      } else {
        reject("Failed task");
      }
    }, 1000);
  });
};
const addSugarAndChocoChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addChoco = true;

      if (addChoco) {
        resolve(
          "Place butter and chocolate chips, stir until metled and smooth"
        );
      } else {
        reject("Failed task");
      }
    }, 1000);
  });
};
const addFlourCocoaAndSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addSaltFlour = false;

      if (addSaltFlour) {
        resolve("Add flour, coco and ssalt and stir until smooth");
      } else {
        reject("Failed task");
      }
    }, 1000);
  });
};
const bakeMixture = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakeMixture = true;

      if (bakeMixture) {
        resolve("Bake for 24 minutes for really goey center");
      } else {
        reject("Failed task");
      }
    }, 1000);
  });
};

/*
const bakeChocolateBrownies = async () => {
  const taskOne = await preHeatOven();
  console.log(taskOne);

  const taskTwo = await addSugarAndChocoChips();
  console.log(taskTwo);

  const taskThree = await addFlourCocoaAndSalt();
  console.log(taskThree);

  const taskFour = await bakeMixture();
  console.log(taskFour);

  console.log("enjoy your perfect chocolate brownies");
};

bakeChocolateBrownies();
*/

const bakeChocolateBrowniesAnotherBatch = async () => {
  try {
    const taskOne = await preHeatOven();
    console.log(taskOne);

    const taskTwo = await addSugarAndChocoChips();
    console.log(taskTwo);

    const taskThree = await addFlourCocoaAndSalt();
    console.log(taskThree);

    const taskFour = await bakeMixture();
    console.log(taskFour);

    console.log("enjoy your perfect chocolate brownies");
  } catch (error) {
    console.log(error);
  }
};

bakeChocolateBrowniesAnotherBatch();
