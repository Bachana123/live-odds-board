import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Match, Odds } from '../types'

interface OddsStore {
  matches: Match[]
  selectedOdds: Record<string, keyof Odds>
  scrollOffset: number
  setMatches: (matches: Match[]) => void
  updateMatch: (id: string, updates: Partial<Match>) => void
  selectOdd: (matchId: string, market: keyof Odds) => void
  setScrollOffset: (offset: number) => void
}

export const useOddsStore = create<OddsStore>()(
  persist(
    (set, get) => ({
      matches: [],
      selectedOdds: {},
      scrollOffset: 0,
      setMatches: (matches) => set({ matches }),
      updateMatch: (id, updates) =>
        set((state) => ({
          matches: state.matches.map((m) =>
            m.id === id ? { ...m, ...updates } : m
          ),
        })),
      selectOdd: (matchId, market) => {
        const { selectedOdds } = get()
        if (selectedOdds[matchId] === market) {
          set((state) => {
            const oldOdds = {
              ...state.selectedOdds,
            }
            delete oldOdds[matchId]
            return { selectedOdds: oldOdds }
          })
          return
        }
        set((state) => ({
          selectedOdds: {
            ...state.selectedOdds,
            [matchId]: market,
          },
        }))
      },
      setScrollOffset: (offset) => set({ scrollOffset: offset }),
    }),
    { name: 'live-odds-storage' }
  )
)
