const copy = require("copy");

console.log("Deploying...");

copy(["./dist/custom-element/*.js",
      "./dist/custom-element/*.map"],
     "./projects/test-app/src/assets", {},
    (err, files) => {
        if (err) {
            console.error("Error deploying files! ", err);
            return;
        }
        console.log("Finish!");
    });
