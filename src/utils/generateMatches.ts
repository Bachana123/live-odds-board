import { v4 as uuidv4 } from 'uuid'
import type { Match } from '../types'

export function generateMatches(count = 10000): Match[] {
  const sports = ['⚽️', '🏀', '🎾', '🏐']
  const matches: Match[] = []
  for (let i = 0; i < count; i++) {
    matches.push({
      id: uuidv4(),
      sport: sports[Math.floor(Math.random() * sports.length)],
      home: `Team ${i + 1}`,
      away: `Team ${i + 2}`,
      startTime: Date.now() + i * 60000,
      score: `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`,
      odds: {
        '1': (Math.random() * 3 + 1).toFixed(2),
        X: (Math.random() * 3 + 1).toFixed(2),
        '2': (Math.random() * 3 + 1).toFixed(2),
      },
    })
  }
  return matches
}
