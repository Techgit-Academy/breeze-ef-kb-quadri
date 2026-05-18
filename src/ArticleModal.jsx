import { useEffect } from 'react'

const whoStyle = (w) => {
  if (w === 'Employee (B2C)') return { background: '#EAF3DE', color: '#27500A' }
  if (w === 'HR Admin / Employer') return { background: '#E6F1FB', color: '#0C447C' }
  return { background: '#F1EFE8', color: '#444441' }
}

const catColor = (id) => id.startsWith('C1') ? '#1B3A6B' : id.startsWith('C2') ? '#0D7C8F' : '#6A1B9A'

export default function ArticleModal({ article, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
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
              <span className="art-who-lg" style={whoStyle(article.audience)}>{article.audience}</span>
              <span className="modal-meta-pill">Owner: {article.owner}</span>
              <span className="modal-meta-pill">Reviewed: {article.reviewed}</span>
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

        </div>
      </div>
    </div>
  )
}
