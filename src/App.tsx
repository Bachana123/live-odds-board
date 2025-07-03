import { useEffect } from 'react'
import { useOddsStore } from './store/useOddsStore'
import { generateMatches } from './utils/generateMatches'
import { startMockWebSocket } from './utils/websocket'
import OddsTable from './components/OddsTable'
import type { HighlightRecord, Odds } from './types'
import { useHighlight } from './hooks/useHighlight'
import OddsHeader from './components/OddsHeader'



function App() {
  const setMatches = useOddsStore((s) => s.setMatches)
  const updateMatch = useOddsStore((s) => s.updateMatch)
  const existingMatches = useOddsStore((s) => s.matches)

  const { highlight, updateHighlight } = useHighlight()

  useEffect(() => {
    // const unsubscribe = startMockWebSocket((items) => {
    //   items.forEach(({ index, odds }) => {
    //     const item = existingMatches[index]
    //     if (item) {
    //       const highlighted: HighlightRecord = {}
    //       Object.keys(odds).forEach((key) => {
    //         const currentOdds = item.odds[key as keyof Odds]
    //         if (currentOdds) {
    //           const newOdds = odds[key as keyof Odds]
    //           if (newOdds > currentOdds) {
    //             highlighted[key as keyof Odds] = 'increase'
    //           } else if (newOdds < currentOdds) {
    //             highlighted[key as keyof Odds] = 'decrease'
    //           }
    //         }
    //       })
    //       updateHighlight(item.id, highlighted)
    //       updateMatch(item.id, { odds })
    //     }
    //   })
    // })

    return () => {
      // unsubscribe()
    }
  }, [existingMatches, updateHighlight, updateMatch])

  useEffect(() => {
    const matches = existingMatches.length === 0 ? generateMatches(10000) : existingMatches

    setMatches(matches)
  }, [])

  return (
    <div className='wrapper'>
      <h1 className="title">Live Odds Board</h1>
      <OddsHeader />
      <OddsTable highlight={highlight} />
    </div>
  )
}

export default App
