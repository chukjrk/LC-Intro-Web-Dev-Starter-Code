// 12.8.1. Select the Crew

// Code your selectRandomEntry function here:
// function selectRandomEntry(a) {
//   let randomId = [];

//   for (let i = 0; i < 3; i++) {
//     randomId.push(a.splice([Math.round(Math.random() * a.length - 1)], 1)[0]);
//   }

//   return randomId;
// }

function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Code your buildCrewArray function here:
function buildCrewArray(ids, candidates) {
  newCrew = [];
  for (i = 0; i < ids.length; i++) {
    for (j = 0; j < candidates.length; j++) {
      if (candidates[j].astronautID === ids[i]) {
        newCrew.push(candidates[j]);
      }
    }
  }
  return newCrew;
}

// function buildCrewArray(randomIDNumbers, candidates) {
//   let winners = [];

//   for (let i = 0; i < candidates.length; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (candidates[i].astronautID === randomIDNumbers[j]) {
//         winners.push(candidates[i].name);
//       }
//     }
//   }

//   return winners;
// }

let idNumbers = [291, 414, 503, 599, 796, 890];
let chosenID = [];

while (chosenID.length < 3) {
  chosenForLaunch = selectRandomEntry(idNumbers);
  if (!chosenID.includes(chosenForLaunch)) {
    chosenID.push(chosenForLaunch);
  }
}

// Here are the candidates and the 'animals' array:
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];

// Code your template literal and console.log statements:

let crew = buildCrewArray(chosenID, animals);
console.log(selectRandomEntry(idNumbers));

// Use a template literal to print, “____, ____ and ____ are going to space!” Fill in the blanks with the names of the selected animals.

console.log(
  `${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`
);
