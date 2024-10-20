const promisesexample = (a) => {
  return new Promise((res, rej) => {
    if (a > 2) {
      res("Number is greater than 2");
    } else {
      rej("The number is less than 2");
    }
  });
};

promisesexample(3)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
