function red() {
  console.log("red");
}

function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}

const task = (timer, light) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      switch (light) {
        case "red":
          red();
          break;
        case "yellow":
          yellow();
          break;
        case "green":
          green();
          break;
      }
      resolve();
    }, timer);
  });
};

const run = () => {
  task(3000, "red")
    .then(() => {
      task(2000, "green");
    })
    .then(() => {
      task(1000, "yellow");
    });
};
run();
