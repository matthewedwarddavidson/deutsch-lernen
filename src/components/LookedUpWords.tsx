import { isLookUpSaved, lookUpMeaning, saveLookUp, type LookUp } from '../lib/lookups'
import { useAppState } from '../lib/store'

/** The words you tapped in a text, so you can send the ones worth keeping to your reviews. */
export function LookedUpWords({ lookUps }: { lookUps: LookUp[] }) {
  useAppState()
  const unique = lookUps.filter(
    (lookUp, index) => lookUps.findIndex((other) => other.surface === lookUp.surface) === index,
  )
  const savable = unique.filter((lookUp) => lookUpMeaning(lookUp) !== '')
  const unsaved = savable.filter((lookUp) => !isLookUpSaved(lookUp))
  if (savable.length === 0) return null

  return (
    <div className="card stack">
      <div className="row between">
        <h3 style={{ margin: 0 }}>Words you looked up</h3>
        {unsaved.length > 0 && (
          <button className="btn small primary" onClick={() => unsaved.forEach((lookUp) => saveLookUp(lookUp))}>
            Add {unsaved.length === 1 ? 'it' : `all ${unsaved.length}`} to reviews
          </button>
        )}
      </div>
      <p className="muted small" style={{ margin: 0 }}>
        A word met once in a text is rarely remembered. Reviewing it a few times is what makes it stick.
      </p>
      <ul className="lookup-list">
        {savable.map((lookUp) => (
          <li key={lookUp.surface}>
            <span className="de">
              <strong>{lookUp.word ? lookUp.word.german : lookUp.surface}</strong>
            </span>{' '}
            <span className="muted">{lookUpMeaning(lookUp)}</span>{' '}
            {isLookUpSaved(lookUp) ? (
              <span className="small pill good">In reviews</span>
            ) : (
              <button className="btn ghost small" onClick={() => saveLookUp(lookUp)}>
                Add
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
