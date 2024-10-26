const numeros = [3, 1, 4, 8, 5, 9, 2, 6, 5, 7];
bubbleSortDescendente(numeros);
console.log(numeros); 



function bubbleSortDescendente(numeros: number[]): void {
    const n = numeros.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if ( numeros[j] < numeros[j + 1]) {
      
          const temp = numeros[j];
          numeros[j] = numeros[j + 1];
          numeros[j + 1] = temp;
        }
      }
    }
  }