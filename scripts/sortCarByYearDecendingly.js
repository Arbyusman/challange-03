function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  // const result = [...cars];

  // Tulis code-mu disini
 
  function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }

  function bubbleSort(arr) {
    let sort = arr;
    let i, j;
    for (i = 0; i < sort.length - 1; i++) {
      for (j = 0; j < sort.length - i - 1; j++) {
        if (sort[j].year < sort[j + 1].year) {
          swap(sort, j, j + 1);
        }
      }
    }
    return sort;
  }
  let hasilsorting = bubbleSort(cars);
  console.log(hasilsorting);

  // Rubah code ini dengan array hasil sorting secara ascending
  return hasilsorting;
  
}
