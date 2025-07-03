export type Odds = {
  '1': string
  X: string
  '2': string
}

export interface Match {
  id: string
  sport: string
  home: string
  away: string
  startTime: number
  score: string
  odds: Odds
}

export type OddsMarket = '1X2' | 'Double Chance' | 'Total'

export type HighlightRecord = Partial<Record<keyof Odds, 'increase' | 'decrease'>>

export type HighlightState = Record<string, HighlightRecord>
