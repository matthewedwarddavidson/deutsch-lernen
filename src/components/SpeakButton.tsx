import { speak } from '../lib/speech'
import { useAppState } from '../lib/store'
import { Icon } from './Icon'

/** Reads German text aloud. "slow" plays it at 70% of the normal rate. */
export function SpeakButton({ text, slow = false, label }: { text: string; slow?: boolean; label?: string }) {
  const { settings } = useAppState()
  const rate = slow ? settings.speechRate * 0.7 : settings.speechRate
  return (
    <button
      type="button"
      className="btn ghost icon"
      title={slow ? 'Listen slowly' : 'Listen'}
      aria-label={label ?? (slow ? 'Listen slowly' : 'Listen')}
      onClick={() => speak(text, { rate, voiceURI: settings.voiceURI })}
    >
      <Icon name={slow ? 'slow' : 'speaker'} />
    </button>
  )
}
