const isMommyHappy = true;

// Promise

const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMommyHappy) {
    const phone = {
      brand: "Samsung",
      color: "Black",
    };
    resolve(phone);
  } else {
    const reason = new Error("Mommy is not happy.");
    reject(reason);
  }
});

//console.log(willGetNewPhone);

const resolveAfterTwoSeconds = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("RESOLVED");
    }, 2000);
  });
};

const asyncCall = async (callbackFunction) => {
  console.log("CALLING BACK FUNCTION");
  const result = await callbackFunction();
  console.log(result);
};

//asyncCall(resolveAfterTwoSeconds);

//Drugi nacin pisanja async

const doubleAfterTwoSeconds = (n) => {
  return new Promise((resolve) => {
    resolve(n * 2);
  }, 2000);
};

const callPromise = (n, callbackFunction) => {
  return new Promise((resolve) => {
    callbackFunction(10).then((firstResponse) => {
      callbackFunction(20).then((secondResponse) => {
        callbackFunction(30).then((thirdResponse) => {
          resolve(n + firstResponse + secondResponse + thirdResponse);
        });
      });
    });
  });
};

callPromise(10, doubleAfterTwoSeconds).then((sum) => {
  console.log("SUM", sum);
});

const callAsync = async (n, callbackFunction) => {
  const firstResponse = await callbackFunction(10);
  const secondResponse = await callbackFunction(20);
  const thirdResponse = await callbackFunction(30);

  return n + firstResponse + secondResponse + thirdResponse;
};

callAsync(5, doubleAfterTwoSeconds);

console.log(callAsync);
