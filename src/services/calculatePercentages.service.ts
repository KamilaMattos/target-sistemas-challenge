export const calculatePercentages = (): Record<string, number> => {
  const data = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  }

  const total = Object.values(data).reduce((sum, val) => sum + val, 0)

  const percentages = Object.entries(data).reduce((acc, [state, value]) => {
    acc[state] = parseFloat(((value / total) * 100).toFixed(2))
    return acc
  }, {} as Record<string, number>)

  return percentages
}
