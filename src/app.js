// want to use and install yargs with npm i yargs in terminal
const yargs = require("yargs");

//create variable from index.js file
const { addMovie, listMovie } = require("./utils");

// use and if/else statment to check through the film title and acotr
const app = () => {
  if (process.argv[2] === "add") {
    addMovie({ title: yargs.argv.title, actor: yargs.argv.actor });
  } else if (process.argv[2] === "list") {
    listMovie();
  } else {
    console.log("Incorrect Command");
  }
};

//next you need to call the function, below

app();

//terminal command node src/app.js "add" --title "Elf" --actor"Will F" to add storage.json file
//then type node src/app.js "list" to show the film title and actor inputted
