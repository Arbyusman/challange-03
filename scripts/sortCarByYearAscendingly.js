function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  let i, j;
  let len = result.length;

  let isSwapped = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len - i - 1; j++) {
      if (result[j].year > result[j + 1].year) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
        isSwapped = true;
      }
    }

    // JIKA tidak ada dua elemen yang ditukar oleh loop, maka loop berhenti

    if (!isSwapped) {
      break;
    }
  }

  // Print the array
  console.log(result);

  // calling the bubbleSort Function
  return result;
}
