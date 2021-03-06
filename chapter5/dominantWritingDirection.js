/*
  Write a function that computes the dominant writing direction in a 
  string of text. Remember that each script object has a direction property 
  that can be "ltr" (left to right), "rtl" (right to left), 
  or "ttb" (top to bottom).

  The dominant direction is the direction of a majority of the characters 
  that have a script associated with them. 

  The characterScript and countBy functions defined earlier in the chapter 
  are probably useful here.
  
  NOTE: You will need to add the SCRIPTS value for this code to work

  function dominantDirection(text) {
    // Your code here.
  }

  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl
*/

//figures out the corresponing script (if any) of a character code passed to it
//returns the script object containing all of it's properties
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from,to]) => {
        return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

//count the number of items belonging to a group calculated with the function groupName
//returns the group and count pairings as an object in an array
function countBy(items,groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++
    }
  }
  return counts;
}

function dominantDirection(text) {
  //gather array of objects with script directions and their counts in text
  let directions = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  //find the total number of directions 
  let total = directions.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  //caluculate percentage of the text each direction takes
  //put that information in a percentage property
  directions = directions.map(({name, count}) => {
    return {name:name, percentage:Math.round(count * 100 / total)};
  });

  //use reduce to find the direction with the largest percentage
  //return that direction's name property
  return directions.reduce((a,b) => {
    return a.percentage < b.percentage ? b : a;
  }).name;
}
