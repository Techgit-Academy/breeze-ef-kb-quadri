import { useEffect, useState } from 'react'
import { TICKET_EVIDENCE } from './ticketEvidence'

const whoStyle = (w) => {
  if (w === 'Employee (B2C)') return { background: '#EAF3DE', color: '#27500A' }
  if (w === 'HR Admin / Employer') return { background: '#E6F1FB', color: '#0C447C' }
  return { background: '#F1EFE8', color: '#444441' }
}
const catColor = (id) => id.startsWith('C1') ? '#1B3A6B' : id.startsWith('C2') ? '#0D7C8F' : '#6A1B9A'

function TicketEvidence({ artId }) {
  const [openIdx, setOpenIdx] = useState(null)
  const tickets = TICKET_EVIDENCE[artId] || []
  if (tickets.length === 0) return null

  return (
    <div className="modal-section">
      <div className="section-label">Real tickets behind this issue ({tickets.length})</div>
      <div className="evidence-list">
        {tickets.map((t, i) => (
          <div key={i} className="evidence-item">
            <div className="evidence-header" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
              <span className="evidence-cat">{t.category || 'Ticket'}</span>
              <span className="evidence-name">{t.name}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                style={{ transition:'transform .18s', transform: openIdx===i ? 'rotate(180deg)' : 'none', flexShrink:0, color:'#aaa' }}>
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {openIdx === i && (
              <div className="evidence-desc">{t.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ArticleModal({ article, isEvidenceOnly, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler) }
  }, [onClose])

  const color = catColor(article.id)

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal">

        {/* HEADER */}
        <div className="modal-header" style={{ background: color }}>
          <div className="modal-header-inner">
            <div className="modal-eyebrow">{article.id}</div>
            <h2 className="modal-title">{article.title}</h2>
            <div className="modal-meta">
              {article.audience && (
                <span className="art-who-lg" style={whoStyle(article.audience)}>{article.audience}</span>
              )}
              {article.owner && <span className="modal-meta-pill">Owner: {article.owner}</span>}
              {article.reviewed && <span className="modal-meta-pill">Reviewed: {article.reviewed}</span>}
              {isEvidenceOnly && (
                <span className="modal-meta-pill" style={{background:'rgba(245,166,35,.25)',color:'#FFE0A0'}}>
                  Ticket evidence only — full article coming
                </span>
              )}
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* BODY */}
        <div className="modal-body">

          {/* Full article content if available */}
          {!isEvidenceOnly && (
            <>
              <div className="modal-summary" style={{ borderColor: color }}>
                <div className="section-label" style={{ color }}>Summary</div>
                <p>{article.summary}</p>
              </div>

              <div className="modal-section">
                <div className="section-label">What we know from real tickets</div>
                <div className="root-cause-box">
                  <span className="root-cause-icon">🎫</span>
                  <p>{article.rootCause}</p>
                </div>
              </div>

              <div className="modal-section">
                <div className="section-label">How to resolve this</div>
                <ol className="modal-steps">
                  {article.steps.map((s, i) => (
                    <li key={i}>
                      <span className="step-num" style={{ background: color }}>{i + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {article.errors && article.errors.length > 0 && (
                <div className="modal-section">
                  <div className="section-label">Error messages — what they mean</div>
                  <div className="error-table">
                    <div className="error-table-header" style={{ background: color }}>
                      <span>Error message</span>
                      <span>What it means and what to do</span>
                    </div>
                    {article.errors.map((e, i) => (
                      <div key={i} className={`error-row ${i % 2 === 0 ? 'error-row-shade' : ''}`}>
                        <span className="error-msg">{e.msg}</span>
                        <span className="error-fix">{e.fix}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-escalate">
                <div className="escalate-label">⚠ When to escalate</div>
                <p>{article.escalate}</p>
              </div>
            </>
          )}

          {/* Ticket evidence — shown for all articles */}
          <TicketEvidence artId={article.id} />

          {/* Placeholder for evidence-only articles */}
          {isEvidenceOnly && !TICKET_EVIDENCE[article.id]?.length && (
            <div className="no-evidence-box">
              <p>No matching ticket descriptions found for this article yet. The full article will be written based on ticket patterns as data grows.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
