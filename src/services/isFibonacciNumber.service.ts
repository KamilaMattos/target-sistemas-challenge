export const isFibonacciNumber = (num: number): { isFibonacci: boolean } => {
  let a = 0,
    b = 1

  while (b <= num) {
    if (b === num) {
      return { isFibonacci: true }
    }
    ;[a, b] = [b, a + b]
  }

  return { isFibonacci: false }
}
