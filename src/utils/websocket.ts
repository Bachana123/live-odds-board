import type { Odds } from '../types'

type MatchUpdate = {
  index: number
  odds: Odds
}
type UpdateCallback = (items: MatchUpdate[]) => void

export function startMockWebSocket(
  onUpdate: UpdateCallback
) {
  const interval = setInterval(() => {
    const updates: MatchUpdate[] = []
    const ids: number[] = []

    for (let i = 0; i < Math.floor(Math.random() * 400); i++) {
      const matchIndex = Math.floor(Math.random() * 10000)
      if (ids.includes(matchIndex)) {
        continue
      }
      ids.push(matchIndex)
      const newOdds: Odds = {
        '1': (Math.random() * 3 + 1).toFixed(2),
        X: (Math.random() * 3 + 1).toFixed(2),
        '2': (Math.random() * 3 + 1).toFixed(2),
      }
      updates.push({ index: matchIndex, odds: newOdds })
    }
    onUpdate(updates)
  }, 1500)

  return () => {
    clearInterval(interval)
  }
}
