function searchingProduct(data, dataFilter) {
  if (typeof dataFilter === "number") {
    return data.filter((item) => {
      return item.harga <= dataFilter;
    });
  }
  return data.filter((item) => {
    return item.nama.toLowerCase().includes(dataFilter.toLowerCase());
  });
}

console.log(
  searchingProduct(
    [
      {
        nama: "Iphone 14 Max Pro",
        harga: 22000000,
      },
      {
        nama: "Macbook Pro M2 13 inch",
        harga: 24000000,
      },
      {
        nama: "Mouse Surfece Gen 3 2022",
        harga: 1800000,
      },
      {
        nama: "Ipad Pro Gen 9 M1",
        harga: 18000000,
      },
      {
        nama: "Iphone 11",
        harga: 9700000,
      },
      {
        nama: "Airpod Pro 2021",
        harga: 3200000,
      },
    ],
    "airpod"
  )
);
