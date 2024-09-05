const json = require("./movies.json");//require is a Nodejs command to refer external files in UR Application. 
//console.log(json);

for (const element of json) {
    console.log(`${element.title} directed by ${element.director}`);//Displaying only the titles 
}