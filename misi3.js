function atendenceMultiDimensi(arr) {
  let result = {};
  result.hadir = arr[0].splice(1);
  result.izin = arr[1].splice(1);
  result.sakit = arr[2].splice(1);
  return result;
}

console.log(
  atendenceMultiDimensi([
    [
      "hadir",
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
      "sakit",
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
