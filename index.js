const limit = Number(prompt('Entrer la limite du crible'))
const L = []
for (let i = 2; i <= limit; i++) {
  L.push(i)
}
const primeNumbers = []

while (L.length > 0) {
  primeNumbers.push(L[0])
  let i = 1
  while (i < L.length) {
    if (L[i] % L[0] === 0) {
      L.splice(i, 1)
    } else {
      i++
    }
  }
  L.splice(0, 1)
}

console.log(primeNumbers)
