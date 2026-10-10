import { speak } from '../lib/speech'
import type { RecordedVoice } from '../lib/speechText'
import { Icon } from './Icon'

/** Reads German text aloud. "slow" plays it at three quarters of the normal speed. */
export function SpeakButton({
  text,
  slow = false,
  voice,
  label,
}: {
  text: string
  slow?: boolean
  voice?: RecordedVoice
  label?: string
}) {
  return (
    <button
      type="button"
      className="btn ghost icon"
      title={slow ? 'Listen slowly' : 'Listen'}
      aria-label={label ?? (slow ? 'Listen slowly' : 'Listen')}
      onClick={() => speak(text, { slow, voice })}
    >
      <Icon name={slow ? 'slow' : 'speaker'} />
    </button>
  )
}
