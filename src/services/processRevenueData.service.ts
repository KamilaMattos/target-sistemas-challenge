import { DailyRevenue } from "../types/faturamento"
import data from "../data/faturamento.json"

export const processRevenueData = () => {
  const validData: DailyRevenue[] = data.filter((day) => day.valor > 0)

  const min = Math.min(...validData.map((day) => day.valor))
  const max = Math.max(...validData.map((day) => day.valor))

  const totalRevenue = validData.reduce((sum, day) => sum + day.valor, 0)
  const avg = totalRevenue / validData.length

  const daysAboveAvg = validData.filter((day) => day.valor > avg).length

  return {
    minRevenue: min,
    maxRevenue: max,
    daysAboveAverage: daysAboveAvg,
  }
}
