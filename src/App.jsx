import { useState } from 'react'
import { CATS, RELS, FIXES } from './data'
import { ARTICLES } from './articles'
import { exportFullKB } from './export'
import ArticleModal from './ArticleModal'
import './App.css'

const totalArticles = CATS.reduce((a, c) => a + c.subs.reduce((b, s) => b + s.arts.length, 0), 0)
const totalSubs = CATS.reduce((a, c) => a + c.subs.length, 0)
const writtenCount = Object.keys(ARTICLES).length

const badgeStyle = {
  red:   { background: '#FEE2E2', color: '#991B1B' },
  blue:  { background: '#DBEAFE', color: '#1E40AF' },
  amber: { background: '#FEF9C3', color: '#854D0E' },
}

const whoStyle = (w) => {
  if (w === 'Employee') return { background: '#EAF3DE', color: '#27500A' }
  if (w === 'HR Admin') return { background: '#E6F1FB', color: '#0C447C' }
  if (w === 'Agent')    return { background: '#EEEDFE', color: '#3C3489' }
  return { background: '#F1EFE8', color: '#444441' }
}

function Chevron({ open }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
      style={{ transition:'transform .2s', transform:open?'rotate(180deg)':'none', flexShrink:0, color:'#888' }}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function FixBody({ body }) {
  return (
    <div>
      {body.map((block, i) => {
        if (block.type === 'p')   return <p key={i} className="wb-p">{block.text}</p>
        if (block.type === 'tip') return <div key={i} className="tip">{block.text}</div>
        if (block.type === 'ol')  return <ol key={i} className="wb-ol">{block.items.map((item,j) => <li key={j}>{item}</li>)}</ol>
        return null
      })}
    </div>
  )
}

function ArticleRow({ art, onOpen }) {
  const hasContent = !!ARTICLES[art.n]
  return (
    <div className={`art-row${hasContent?' art-row-clickable':''}`}
      onClick={() => hasContent && onOpen(art.n)}
      title={hasContent ? 'Click to read article' : 'Article coming soon'}>
      <span className="art-num">{art.n}</span>
      <span className="art-title">
        {art.t}
        {hasContent  && <span className="art-ready">Read →</span>}
        {!hasContent && <span className="art-soon">Coming soon</span>}
      </span>
      <span className="art-who" style={whoStyle(art.w)}>{art.w}</span>
    </div>
  )
}

function CategoryCard({ cat, isFiltered, onOpen }) {
  const [open, setOpen] = useState(false)
  const [openSubs, setOpenSubs] = useState({})
  const toggleSub = id => setOpenSubs(p => ({ ...p, [id]: !p[id] }))
  return (
    <div className={`card${isFiltered?' dim':''}`}>
      <div className="card-hd" onClick={() => setOpen(o => !o)}>
        <span className="dot" style={{ background: cat.color }} />
        <span className="card-title">{cat.title}</span>
        <span className="card-meta">{cat.tickets.toLocaleString()} tickets · {cat.pct}</span>
        <span className="badge" style={badgeStyle[cat.badgeType]}>{cat.badge}</span>
        <Chevron open={open} />
      </div>
      {open && (
        <div className="card-body">
          <p className="why-text">{cat.why}</p>
          {cat.subs.map(sub => (
            <div key={sub.id} className="sub">
              <div className="sub-hd" onClick={() => toggleSub(sub.id)}>
                <span className="sub-lbl">{sub.lbl}</span>
                <span className="sub-cnt">{sub.arts.length} articles</span>
                <Chevron open={openSubs[sub.id]} />
              </div>
              {openSubs[sub.id] && (
                <div className="art-list">
                  <p className="sub-note">{sub.note}</p>
                  {sub.arts.map(art => <ArticleRow key={art.n} art={art} onOpen={onOpen} />)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function RelCard({ rel }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="wcard">
      <div className="wcard-hd" onClick={() => setOpen(o => !o)}>
        <span className="wcard-icon">⇄</span>
        <span className="wcard-title">{rel.title}</span>
        <Chevron open={open} />
      </div>
      {open && (
        <div className="wcard-body">
          <div className="chips">{rel.chips.map(c => <span key={c} className="chip">{c}</span>)}</div>
          <p className="wb-p">{rel.body}</p>
        </div>
      )}
    </div>
  )
}

function FixCard({ fix }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="wcard">
      <div className="wcard-hd" onClick={() => setOpen(o => !o)}>
        <span className="wcard-icon">{fix.icon}</span>
        <span className="wcard-title">{fix.title}</span>
        <Chevron open={open} />
      </div>
      {open && (
        <div className="wcard-body"><FixBody body={fix.body} /></div>
      )}
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState('structure')
  const [filter, setFilter] = useState('all')
  const [activeArticle, setActiveArticle] = useState(null)
  const [exporting, setExporting] = useState(false)

  const handleExport = async () => {
    setExporting(true)
    try { await exportFullKB() }
    finally { setExporting(false) }
  }

  const tabs = [
    { id:'structure', label:"What's in the KB" },
    { id:'links',     label:'How topics connect' },
    { id:'fix',       label:'How to fix common problems' },
  ]

  const filterBtns = [
    { id:'all', label:'All topics' },
    { id:'C1',  label:'C1 — Loans' },
    { id:'C2',  label:'C2 — Payments' },
    { id:'C3',  label:'C3 — App access' },
    { id:'C4',  label:'C4 — Statements' },
    { id:'C5',  label:'C5 — Learning' },
    { id:'C6',  label:'C6 — Escalation' },
    { id:'C7',  label:'C7 — Outages' },
  ]

  return (
    <div className="app">
      {activeArticle && (
        <ArticleModal article={ARTICLES[activeArticle]} onClose={() => setActiveArticle(null)} />
      )}

      <header className="header">
        <div className="header-inner">
          <div className="header-top-row">
            <div className="eyebrow">Breeze Embedded Finance</div>
            <button className="btn-export-full" onClick={handleExport} disabled={exporting}>
              {exporting ? (
                <><span className="export-spinner" /> Generating…</>
              ) : (
                <><svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M7.5 1v8M4.5 6.5l3 3 3-3M2 12h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> Export to Word</>
              )}
            </button>
          </div>
          <h1 className="h-title">Knowledge Base</h1>
          <p className="h-sub">Built from 1,698 real support tickets · Phase 1.1</p>
          <div className="stats">
            {[
              { n:7,            l:'main topics' },
              { n:totalSubs,    l:'sub-topics' },
              { n:totalArticles,l:'articles outlined' },
              { n:writtenCount, l:'articles written' },
            ].map(s => (
              <div key={s.l} className="stat">
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="main">
        <div className="tabs">
          {tabs.map(t => (
            <button key={t.id} className={`tab${tab===t.id?' on':''}`} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'structure' && (
          <>
            <div className="filters">
              {filterBtns.map(f => (
                <button key={f.id} className={`ft${filter===f.id?' on':''}`} onClick={() => setFilter(f.id)}>
                  {f.label}
                </button>
              ))}
            </div>
            <div>
              {CATS.map(cat => (
                <CategoryCard key={cat.id} cat={cat}
                  isFiltered={filter!=='all' && filter!==cat.id}
                  onOpen={setActiveArticle} />
              ))}
            </div>
          </>
        )}

        {tab === 'links' && (
          <>
            <p className="intro-note">Most support tickets touch more than one topic at once. This section explains how the seven main topics are connected, so you know where to look when a complaint doesn't fit neatly into one box.</p>
            {RELS.map((r,i) => <RelCard key={i} rel={r} />)}
          </>
        )}

        {tab === 'fix' && (
          <>
            <p className="intro-note">These are the six problems that come up most often. Each one has a clear fix path — what to check first, what to try, and when to hand it over to someone else.</p>
            {FIXES.map((f,i) => <FixCard key={i} fix={f} />)}
          </>
        )}
      </main>
    </div>
  )
}
