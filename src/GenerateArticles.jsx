import { useState } from 'react'
import { CATS } from './data'
import { ARTICLES } from './articles'

const ALREADY_WRITTEN = Object.keys(ARTICLES)

// All C1 and C2 article outlines not yet written
const PENDING = []
CATS.filter(c => c.id === 'C1' || c.id === 'C2').forEach(cat => {
  cat.subs.forEach(sub => {
    sub.arts.forEach(art => {
      if (!ALREADY_WRITTEN.includes(art.n)) {
        PENDING.push({ ...art, cat: cat.id, sub: sub.lbl })
      }
    })
  })
})

const SYSTEM_PROMPT = `You are writing Knowledge Base articles for Breeze, a Nigerian embedded finance platform by SeamlessHR.
Articles are used by support agents and customers. Write in plain, direct, human language — not corporate or AI-sounding.

Return ONLY valid JSON with this exact structure (no markdown, no backticks):
{
  "summary": "One sentence directly answering the question",
  "rootCause": "What real-world experience reveals about why this happens — 2-3 sentences, specific to Nigerian banking context",
  "steps": ["Step 1 text", "Step 2 text", "Step 3 text"],
  "errors": [{"msg": "exact error message text", "fix": "plain explanation and fix"}],
  "escalate": "Exactly when to escalate and who to contact — EF Ops, Engineering, or EF Support"
}

Rules:
- 3 to 6 steps maximum, each a complete helpful sentence
- errors array can be empty [] if no specific error messages apply
- Reference Nigerian context: MTN/Airtel networks, Nigerian banks (Access, GTB, Zenith, First Bank, Moniepoint), PFAs (Stanbic IBTC, ARM, AXA Mansard), NIBSS, CBN
- escalate must name the exact team and trigger condition
- Never use corporate jargon — write as a knowledgeable colleague`

export default function GenerateArticles({ onDone }) {
  const [status, setStatus] = useState('idle') // idle | running | done | error
  const [progress, setProgress] = useState(0)
  const [generated, setGenerated] = useState({})
  const [currentArt, setCurrentArt] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [copied, setCopied] = useState(false)

  const delay = ms => new Promise(r => setTimeout(r, ms))

  const generateOne = async (art) => {
    const prompt = `Article ID: ${art.n}
Title: ${art.t}
Audience: ${art.w}
Category: ${art.cat} — ${art.sub}

Write a complete KB article for this. Base it on your knowledge of Nigerian embedded finance, payroll processing, and the Breeze/SeamlessHR platform context.

Return only the JSON object.`

    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    if (!resp.ok) throw new Error(`API error ${resp.status}`)
    const data = await resp.json()
    let text = data.content[0].text.trim()
    if (text.startsWith('```')) {
      text = text.replace(/```json?/g, '').replace(/```/g, '').trim()
    }
    return JSON.parse(text)
  }

  const runGeneration = async () => {
    setStatus('running')
    setProgress(0)
    setGenerated({})
    const results = {}

    for (let i = 0; i < PENDING.length; i++) {
      const art = PENDING[i]
      setCurrentArt(`${art.n} — ${art.t}`)
      try {
        const content = await generateOne(art)
        results[art.n] = {
          id: art.n,
          title: art.t,
          audience: art.w,
          owner: 'EF Support',
          reviewed: 'May 2026',
          ...content
        }
        setGenerated({ ...results })
      } catch (e) {
        console.error(`Failed ${art.n}:`, e)
        // Skip and continue
      }
      setProgress(i + 1)
      await delay(300)
    }

    setStatus('done')
    setCurrentArt('')
  }

  const outputCode = () => {
    const all = { ...ARTICLES, ...generated }
    return `export const ARTICLES = ${JSON.stringify(all, null, 2)};`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(outputCode())
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="gen-overlay">
      <div className="gen-modal">
        <div className="gen-header">
          <div>
            <div className="gen-eyebrow">AI Article Generator</div>
            <h2 className="gen-title">Generate remaining C1 & C2 articles</h2>
            <p className="gen-sub">{PENDING.length} articles to generate · {ALREADY_WRITTEN.length} already written</p>
          </div>
          <button className="modal-close" onClick={onDone} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="gen-body">
          {status === 'idle' && (
            <>
              <div className="gen-info">
                <p>This will use the Anthropic API to generate full article content — summary, root cause, steps, error messages, and escalation guide — for each of the {PENDING.length} remaining C1 and C2 articles.</p>
                <p style={{marginTop:'10px'}}>After generation, you will get the complete <code>articles.js</code> code to copy and paste into your project.</p>
              </div>
              <div className="gen-pending-list">
                {PENDING.map(a => (
                  <div key={a.n} className="gen-pending-item">
                    <span className="gen-art-id">{a.n}</span>
                    <span className="gen-art-title">{a.t}</span>
                    <span className="gen-art-who">{a.w}</span>
                  </div>
                ))}
              </div>
              <button className="gen-btn" onClick={runGeneration}>
                Generate {PENDING.length} articles →
              </button>
            </>
          )}

          {status === 'running' && (
            <div className="gen-running">
              <div className="gen-progress-bar">
                <div className="gen-progress-fill" style={{ width: `${(progress/PENDING.length)*100}%` }} />
              </div>
              <div className="gen-progress-text">
                {progress} of {PENDING.length} complete
              </div>
              {currentArt && (
                <div className="gen-current">Writing: {currentArt}</div>
              )}
              <div className="gen-live-list">
                {Object.keys(generated).map(id => (
                  <div key={id} className="gen-done-item">✓ {id}</div>
                ))}
              </div>
            </div>
          )}

          {status === 'done' && (
            <div className="gen-done">
              <div className="gen-done-header">
                ✅ {Object.keys(generated).length} articles generated
              </div>
              <p className="gen-done-instruction">
                Copy the code below and replace the contents of <code>src/articles.js</code> in your project. Then push to GitHub — all articles will be live immediately.
              </p>
              <div className="gen-code-box">
                <pre>{outputCode().slice(0, 800)}...</pre>
              </div>
              <button className="gen-btn" onClick={handleCopy}>
                {copied ? '✓ Copied!' : 'Copy full articles.js code'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
