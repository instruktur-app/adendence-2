function atendenceStr(str) {
    let sakit = 0
    let izin = 0
    let hadir = 0
    let absen = str.split(";")
    for(let i=0;i< absen.length;i++){
        if (absen[i] == "sakit"){
            sakit += 1
        }
        else if (absen[i] == "izin"){
            izin += 1
        }
        else if (absen[i] == "hadir"){
            hadir += 1
        }
    }
    return `Jumlah yang hadir: ${hadir}, yang izin: ${izin} dan yang sakit : ${sakit}`;
}

console.log(atendenceStr("sakit;izin;hadir;hadir;hadir"));
//Jumlah yang hadir: 3, yang izin: 1 dan yang sakit : 1