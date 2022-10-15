# Game mentoring Javascript 2

Pada malam hari ini kita akan bermain game dengan duck dack race, kemudian yang muncul namanya bebas memilih soal, jika sudah selesai boleh memilih penantangnya untuk mengerjakan soal berikutnya dan jika berhasil mengerjakan soal maka bisa melakukan freeze atas 1 soal selanjutnya sehingga tidak bisa dipilih.

## Pemeran

- [ ] [@Alfi](https://github.com/orgs/instruktur-app/people/alfianifk)
- [ ] @Nabil 
- [x] [@Herzinanda](https://github.com/orgs/instruktur-app/people/herzinanda)
- [x] @Rama
- [x] [@Fahmi](https://github.com/orgs/instruktur-app/people/sugiartofahmi)
- [x] [@Caroline](https://github.com/orgs/instruktur-app/people/DillaCarolineK)
- [x] [@Mufrih](https://github.com/orgs/instruktur-app/people/MufrihM)
- [x] [@Rayhan](https://github.com/orgs/instruktur-app/people/MRayhanm) 



### Misi 1

```js
function atendence(arr) {
    let result = {}
    // kerjakan disini
    return result;
}

console.log(atendence(['Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit']));
//{ Hadir: 5, Sakit: 5 }
```

### Misi 2

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

### Misi 3

```js
function atendenceMultiDimensi(arr) {
    // kerjakan disini
    return result;
}

console.log(atendenceMultiDimensi([
    ["hadir", "Herzinanda", "Rama", "Fahmi", "Caroline", "Mufrih", "Raihan", "Alfi", "Nabil"],
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

### Misi 4

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

### Misi 5

```js
function kasirApp(cart) {
    let stok = {
        "Buku": 100,
        "Pensil": 100,
        "Pena": 100,
    }

    // kerjakan disini
    
    return stok;
}

console.log(kasirApp([
    ["Buku", 30],
    ["Pena", 12],
]))
// { Buku: 70, Pensil: 100, Pena: 88 }
```

### Misi 6

```js
function searchingProduct(data, dataFilter) {
    // kerjakan disini
    return result
}

console.log(searchingProduct([{
    nama: "Iphone 14 Max Pro",
    harga: 22000000
}, {
    nama: "Macbook Pro M2 13 inch",
    harga: 24000000
}, {
    nama: "Mouse Surfece Gen 3 2022",
    harga: 1800000
}, {
    nama: "Ipad Pro Gen 9 M1",
    harga: 18000000
}, {
    nama: "Iphone 11",
    harga: 9700000
}, {
    nama: "Airpod Pro 2021",
    harga: 3200000
}], 5000000))
// [
//     { nama: 'Mouse Surfece Gen 3 2022', harga: 1800000 },
//     { nama: 'Airpod Pro 2021', harga: 3200000 }
// ]
```

### Misi 7

```js
function searchingProduct(data, dataFilter) {
    // Kerjakan disni  
    return result
}

console.log(searchingProduct([{
    nama: "Iphone 14 Max Pro",
    harga: 22000000
}, {
    nama: "Macbook Pro M2 13 inch",
    harga: 24000000
}, {
    nama: "Mouse Surfece Gen 3 2022",
    harga: 1800000
}, {
    nama: "Ipad Pro Gen 9 M1",
    harga: 18000000
}, {
    nama: "Iphone 11",
    harga: 9700000
}, {
    nama: "Airpod Pro 2021",
    harga: 3200000
}], "pro"))
// [
//     { nama: 'Iphone 14 Max Pro', harga: 22000000 },
//     { nama: 'Macbook Pro M2 13 inch', harga: 24000000 },
//     { nama: 'Ipad Pro Gen 9 M1', harga: 18000000 },
//     { nama: 'Airpod Pro 2021', harga: 3200000 }
// ]
```

### Misi 8

```js
function male(she) {
    // kerjakan disini
}

function feMale(he) {
    // kerjakan disini
}

function saiHai(name, call) {
    // kerjakan disini
}

console.log(saiHai("Dono", "he"))
// Hi Mas. Dono

console.log(saiHai("Dini", "she"))
// Halo Mba. Dini
```
