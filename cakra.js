function atendence(arr) {
    let result = {}
    for(let i = 0; i < arr.length; i++) {
        if(typeof result[arr[i]] !== "undefined") {
            result[arr[i]] += 1
        } else {
            result[arr[i]] = 0
        }
    }
    return result;
}

console.log(atendence(['Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit']));
//{ Hadir: 4, Sakit: 4 }

function atendenceStr(str) {
    let sakit = 0
    let izin = 0
    let hadir = 0
    for(let i = 0; i < str.split(";").length; i++) {
        if(str.split(";")[i] === "sakit") {
            sakit++
        } else if(str.split(";")[i] === "izin") {
            izin++
        } else if(str.split(";")[i] === "hadir") {
            hadir++
        }
    }
    return `Jumlah yang hadir: ${hadir}, yang izin: ${izin} dan yang sakit : ${sakit}`;
}

console.log(atendenceStr("sakit;izin;hadir;hadir;hadir"));
//Jumlah yang hadir: 3, yang izin: 1 dan yang sakit : 1

function atendenceMultiDimensi(arr) {
    const result = arr.reduce((prev, curr) => {
        const k = curr[0]
        const v = curr.slice(1)
        prev[k] = v
        return prev
    }, {})
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

function groupByArtist(song) {
    let result = {}
    for(let i = 0; i < song.length; i++) {
        let artist = song[i].artist
        let title = song[i].title
        if(typeof result[artist] === "undefined") {
            result[artist] = {title: [title]}
        } else {
            result[artist].title.push(title)
        }
    }
    return result;
}

const songList = [
    { title: "Pesan Terakhir", artist: "Lyodra"},
    { title: "Hati Hati di Jalan", artist: "Tulus"},
    { title: "Ada Apa Denganmu", artist: "Peterpan"},
    { title: "Terlanjur Mencinta", artist: "Lyodra"},
    { title: "Teman Hidup", artist: "Tulus"},
    { title: "Sang Dewi", artist: "Lyodra"},
]

console.log(groupByArtist(songList));
// {
//     Lyodra: { title: [ 'Pesan Terakhir', 'Terlanjur Mencinta', 'Sang Dewi' ] },
//     Tulus: { title: [ 'Hati Hati di Jalan', 'Teman Hidup' ] },
//     Peterpan: { title: [ 'Ada Apa Denganmu' ] }
// }

function kasirApp(cart) {
    let stok = {
        "Buku": 100,
        "Pensil": 100,
        "Pena": 100,
    }

    for(let i = 0; i < cart.length; i++) {
        let barang = cart[i][0]
        let harga = cart[i][1]

        stok[barang] -= harga
    }
    return stok;
}

console.log(kasirApp([
    ["Buku", 30],
    ["Pena", 12],
]))
// { Buku: 70, Pensil: 100, Pena: 88 }

function searchingProduct(data, dataFilter) {
    if(typeof dataFilter === "number") {
        return data.filter((item) => {
            return item.harga <= dataFilter
        })
    }
    return data.filter((item) => {
        return item.nama.toLowerCase().includes(dataFilter.toLowerCase())
    })

    
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


function male(she) {
    return "Mas. " + she[0].toUpperCase() + she.slice(1).toLowerCase()
}

function feMale(he) {
    return "Mba. " + he[0].toUpperCase() + he.slice(1).toLowerCase()
}

function saiHai(name, call) {
    if(call == "she") {
        return "Halo " + feMale(name)
    } else if(call == "he") {
        return "Hi " + male(name)
    }
}

console.log(saiHai("Dono", "he"))
// Hi Mas. Dono
console.log(saiHai("Dini", "she"))
// Halo Mba. Dini
