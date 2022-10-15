function groupByArtist(song) {
  let result = {};

  song.forEach((element) => {
    if (!result[element.artist]) {
      result[element.artist] = {
        title: [],
      };
    }
    result[element.artist].title.push(element.title);
  });

  return result;
}

console.log(
  groupByArtist([
    { title: "Pesan Terakhir", artist: "Lyodra" },
    { title: "Hati Hati di Jalan", artist: "Tulus" },
    { title: "Ada Apa Denganmu", artist: "Peterpan" },
    { title: "Terlanjur Mencinta", artist: "Lyodra" },
    { title: "Teman Hidup", artist: "Tulus" },
    { title: "Sang Dewi", artist: "Lyodra" },
  ])
);
// {
//     Lyodra: { title: [ 'Pesan Terakhir', 'Terlanjur Mencinta', 'Sang Dewi' ] },
//     Tulus: { title: [ 'Hati Hati di Jalan', 'Teman Hidup' ] },
//     Peterpan: { title: [ 'Ada Apa Denganmu' ] }
// }
