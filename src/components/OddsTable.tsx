import { FixedSizeList as List } from 'react-window'
import { useOddsStore } from '../store/useOddsStore'
import MatchRow from './MatchRow'
import type { HighlightState } from '../types';

interface OddsTableProps {
  highlight: HighlightState; // Replace 'any' with a more specific type if possible
}

export default function OddsTable({ highlight }: OddsTableProps) {
  const matches = useOddsStore((s) => s.matches)
  const setScrollOffset = useOddsStore((s) => s.setScrollOffset)
  const scrollOffset = useOddsStore((s) => s.scrollOffset)

  return (
    <List
      height={600}
      itemCount={matches.length}
      itemSize={60}
      width={'580px'}
      initialScrollOffset={scrollOffset}
      onScroll={(props: { scrollOffset: number }) => setScrollOffset(props.scrollOffset)}
    >
      {({ index, style }: { index: number; style: React.CSSProperties }) => (
        <MatchRow match={matches[index]} style={style} highlight={highlight} />
      )}
    </List>
  )
}
