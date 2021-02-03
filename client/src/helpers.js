export function arrayOfFiveForAlbums(array) {
  if (array.length < 6) return [array];
  let carouselPage = Math.ceil(array.length / 5);
  let newArr = [];
  for (let i = 0; i < carouselPage; i++) {
    let secArr = [];
    for (let j = 0; j < 5; j++) {
      if (array[j + i * 5]) {
        secArr.push(array[j + i * 5]);
      }
    }
    newArr.push(secArr);
  }
  return newArr;
}
