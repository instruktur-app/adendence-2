function atendence(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (typeof result[arr[i]] !== "undefined") {
      result[arr[i]] += 1;
    } else {
      result[arr[i]] = 1;
    }
  }
  return result;
}

console.log(
  atendence([
    "Hadir",
    "Sakit",
    "Hadir",
    "Sakit",
    "Hadir",
    "Sakit",
    "Hadir",
    "Sakit",
    "Hadir",
    "Sakit",
  ])
);
//{ Hadir: 5, Sakit: 5 }

// function atendence(arr) {
//     let result = {}
//     // kerjakan disini
//     let sumhadir = 0;
//     let sumsakit = 0;

//     for(let i = 0;i < arr.length; i++){
//         if(arr[i] == "Hadir"){
//             sumhadir += 1;
//         }
//         else if (arr[i] == "Sakit"){
//             sumsakit += 1;
//         }
//     }
//     result.Hadir = sumhadir;
//     result.Sakit = sumsakit
//     return result;
// }

// console.log(atendence(['Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit']));
//{ Hadir: 5, Sakit: 5 }
