function kasirApp(cart) {
    let stok = {
        "Buku": 100,
        "Pensil": 100,
        "Pena": 100,
    }

    // kerjakan disini
    for(let i = 0; i < cart.length; i++){
        let produk = cart[i][0]
        let jumlah = cart[i][1]
        stok[produk] -= jumlah
    }
    return stok;
}

console.log(kasirApp([
    ["Buku", 30],
    ["Pena", 12],
]))
// { Buku: 70, Pensil: 100, Pena: 88 }