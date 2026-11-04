import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'
import { ExplanationSection } from '../components/ExplanationSection'
import { BRIDGE_SECTIONS } from '../content/bridge'
import { topicById } from '../content/grammar'

export function Bridge() {
  const [params] = useSearchParams()
  const target = params.get('section')

  // Hash routing rules out #anchors, so a ?section= link scrolls to its section instead.
  useEffect(() => {
    if (target) document.getElementById(`bridge-${target}`)?.scrollIntoView()
  }, [target])

  return (
    <div className="page narrow">
      <article className="lesson">
        <div className="page-header">
          <div className="eyebrow">Grammar in English terms</div>
          <h1>English bridge</h1>
          <p className="lead">
            The grammar terms used in the German lessons, explained with English examples. English has most of the same
            grammar as German, but hides much of it.
          </p>
          <nav className="small" aria-label="Sections">
            {BRIDGE_SECTIONS.map((section, index) => (
              <span key={section.id}>
                {index > 0 && ' · '}
                <Link to={`/bridge?section=${section.id}`}>{section.heading}</Link>
              </span>
            ))}
          </nav>
        </div>
        {BRIDGE_SECTIONS.map((section) => (
          <ExplanationSection key={section.id} id={`bridge-${section.id}`} section={section}>
            <p className="small muted">
              Practise in German:{' '}
              {section.topicIds.map((topicId, index) => (
                <span key={topicId}>
                  {index > 0 && ' · '}
                  <Link to={`/grammar/${topicId}`}>{topicById(topicId)?.title ?? topicId}</Link>
                </span>
              ))}
            </p>
          </ExplanationSection>
        ))}
      </article>
    </div>
  )
}
