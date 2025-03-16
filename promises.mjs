import fetch from "node-fetch";

fetch("https://randomuser.me/api/?results=30")
  .then((response) => response.json())
  .then((data) => data.results)
  .then((results) => console.log(`We got ${results.length} rows`));

import { readFile } from "fs";
readFile("thisFileDoesntExists", "utf8", (err, file) => {
  if (err) {
    console.log("We got an error", { err });
  }
  // no error
  console.log(`That file has ${file.split("\n").length} lines`);
});

// The built-in function setTimeout uses callbacks. Create a promise-based alternative.
// The function delay(ms) should return a promise.
// That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  return new Promise((resolve, reject) => {
    if (typeof ms !== "number" || ms < 0) {
      reject(new Error("Invalid delay time"));
    } else {
      setTimeout(resolve, ms);
    }
  });
}

delay(3000)
  .then(() => alert("Runs after 3 seconds"))
  .catch((error) => alert(error.message));


delay(3000).then(() => alert("runs after 3 seconds"));
