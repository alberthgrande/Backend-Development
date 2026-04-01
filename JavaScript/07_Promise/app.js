let p = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a == 2) {
    resolve("success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is the catch " + message);
});

const test1 = new Promise((resolve, reject) => {
  resolve("test 1");
});

const test2 = new Promise((resolve, reject) => {
  resolve("test 2");
});

const test3 = new Promise((resolve, reject) => {
  reject("test 3");
});

Promise.allSettled([test1, test2, test3])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.all([test1, test2, test3])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

async function runAll() {
  try {
    const results = await Promise.all([test1, test2, test3]);
    console.log("All succeeded:", results);
  } catch (err) {
    console.error("At least one failed:", err);
  }
}
runAll();

const fail1 = new Promise((resolve, reject) => {
  reject("Fail 1");
});

const fail2 = new Promise((resolve, reject) => {
  reject("Fail 2");
});

const fail3 = new Promise((resolve, reject) => {
  reject("Fail 3");
});

Promise.all([fail1, fail2, fail3])
  .then((results) => {
    console.log("Success:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

async function runAllFail() {
  try {
    const results = await Promise.all([fail1, fail2, fail3]);
    console.log("Success:", results);
  } catch (error) {
    console.error("Error:", error);
  }
}

runAllFail();

async function runAllSettledFail() {
  const results = await Promise.allSettled([fail1, fail2, fail3]);
  console.log(results);
}

runAllSettledFail();

async function loadAll() {
  try {
    const results = await Promise.all([test1, test2, test3]);
    console.log("All succeeded:", results);
  } catch (err) {
    console.error("At least one failed:", err);
  }
}
loadAll();
