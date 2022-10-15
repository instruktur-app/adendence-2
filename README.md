# adendence-2

### Soal 1

```js
function atendence(arr) {
    let result = {}
    // kerjakan disini
    return result;
}

console.log(atendence(['Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit']));
//{ Hadir: 4, Sakit: 4 }
```

### Soal 2

```js
function atendenceStr(str) {
    let sakit = 0
    let izin = 0
    let hadir = 0
    // kejakan disini
    return `Jumlah yang hadir: ${hadir}, yang izin: ${izin} dan yang sakit : ${sakit}`;
}

console.log(atendenceStr("sakit;izin;hadir;hadir;hadir"));
//Jumlah yang hadir: 3, yang izin: 1 dan yang sakit : 1
```

### Soal 3

```js
function atendenceMultiDimensi(arr) {
    // kerjakan disini
    return result;
}

console.log(atendenceMultiDimensi([
    ["hadir", "Herzinanda", "Rama", "Fahmi", "Caroline", "Mufrih", "Raihan"],
    ["izin", "Helmi", "Sylfia", "Nanik", "Rafii", "Mukhti", "Ranu", "Syafira", "Natalia", "Fatchia"],
    ["sakit", "Novri", "Amrul", "Citra", "Farhan", "Aldi", "Bagus", "jaoza", "Made"]
]));
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
```

### Soal 4

```js
function groupByArtist(song) {
    let result = {}
    // kerjakan disini
    return result;
}

console.log(groupByArtist([
    { title: "Pesan Terakhir", artist: "Lyodra"},
    { title: "Hati Hati di Jalan", artist: "Tulus"},
    { title: "Ada Apa Denganmu", artist: "Peterpan"},
    { title: "Terlanjur Mencinta", artist: "Lyodra"},
    { title: "Teman Hidup", artist: "Tulus"},
    { title: "Sang Dewi", artist: "Lyodra"},
]));
// {
//     Lyodra: { title: [ 'Pesan Terakhir', 'Terlanjur Mencinta', 'Sang Dewi' ] },
//     Tulus: { title: [ 'Hati Hati di Jalan', 'Teman Hidup' ] },
//     Peterpan: { title: [ 'Ada Apa Denganmu' ] }
// }
```
