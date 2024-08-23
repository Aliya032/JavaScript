function checkObj(obj, checkProp) {
    // Only change code below this line
   if (obj.hasOwnProperty(checkProp)) {
     console.log(obj[checkProp]);
   } else {
     console.log('Not Found');
   }
    // return obj.hasOwnProperty(checkProp);
    // Only change code above this line
  }

  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") 