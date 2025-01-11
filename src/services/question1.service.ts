export const calculateSum = (): number => {
  const INDICE = 13
  let sum = 0
  let k = 0

  while (k < INDICE) {
    k += 1
    sum += k
  }

  return sum
}
