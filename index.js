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

console.log(willGetNewPhone);
