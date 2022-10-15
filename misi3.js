function atendenceMultiDimensi(arr) {
  const result = arr.reduce((prev, curr) => {
    const k = curr[0];
    const v = curr.slice(1);
    prev[k] = v;
    return prev;
  }, {});
  return result;
}

// function atendenceMultiDimensi(arr) {
//   let result = {};
//   result.hadir = arr[0].splice(1);
//   result.izin = arr[1].splice(1);
//   result.sakit = arr[2].splice(1);
//   return result;
// }

console.log(
  atendenceMultiDimensi([
    [
      "sakit",
      "Herzinanda",
      "Rama",
      "Fahmi",
      "Caroline",
      "Mufrih",
      "Raihan",
      "Alfi",
      "Nabil",
    ],
    [
      "izin",
      "Helmi",
      "Sylfia",
      "Nanik",
      "Rafii",
      "Mukhti",
      "Ranu",
      "Syafira",
      "Natalia",
      "Fatchia",
    ],
    [
      "hadir",
      "Novri",
      "Amrul",
      "Citra",
      "Farhan",
      "Aldi",
      "Bagus",
      "jaoza",
      "Made",
    ],
  ])
);
// {
//     hadir: [ 'Herzinanda', 'Rama', 'Fahmi', 'Caroline', 'Mufrih', 'Raihan' ],
//     izin: [
//         'Helmi',   'Sylfia',
//         'Nanik',   'Rafii',
//         'Mukhti',  'Ranu',
//         'Syafira', 'Natalia',
//         'Fatchia'
//     ],
//     sakit: [
//         'Novri', 'Amrul',
//         'Citra', 'Farhan',
//         'Aldi',  'Bagus',
//         'jaoza', 'Made'
//     ]
// }
