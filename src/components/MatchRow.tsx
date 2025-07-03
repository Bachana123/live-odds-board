import type { HighlightState, Match, Odds } from '../types'
import type { CSSProperties } from 'react'
import { useOddsStore } from '../store/useOddsStore'
import classNames from 'classnames'

interface Props {
  match: Match
  style: CSSProperties
  highlight: HighlightState
}

export default function MatchRow({ match, style, highlight }: Props) {
  const selectedOdds = useOddsStore((s) => s.selectedOdds)
  const selectOdd = useOddsStore((s) => s.selectOdd)

  return (
    <div className="row" style={style}>
      <div className="cell sport">{match.sport}</div>
      <div className="cell competitors">
        {match.home} vs {match.away}
      </div>
      <div className="cell start">
        {new Date(match.startTime).toLocaleTimeString()}
      </div>
      <div className="cell score">{match.score}</div>
      {(Object.keys(match.odds) as (keyof Odds)[]).map((key) => (
        <div
          key={key}
          className={classNames('cell odd', {
            selected: selectedOdds[match.id] === key,
            increase: highlight[match.id]?.[key] === 'increase',
            decrease: highlight[match.id]?.[key] === 'decrease',
          })}
          onClick={() => selectOdd(match.id, key)}
        >
          {match.odds[key]}
        </div>
      ))}
    </div>
  )
}
