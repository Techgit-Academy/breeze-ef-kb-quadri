import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, WidthType, BorderStyle, ShadingType,
  LevelFormat, VerticalAlign, PageBreak
} from 'docx'
import { saveAs } from 'file-saver'
import { CATS } from './data'
import { ARTICLES } from './articles'

const NAVY  = "0F2548"
const TEAL  = "0D7C8F"
const AMBER = "F5A623"
const GREEN = "1A6B3A"
const RED   = "991B1B"
const WHITE = "FFFFFF"
const LGREY = "F7F6F3"
const GREY  = "6B7280"

const sp = (b=0,a=0) => ({ spacing:{ before:b, after:a } })

const h1 = t => new Paragraph({ heading:HeadingLevel.HEADING_1, ...sp(300,120),
  children:[new TextRun({text:t,font:"Calibri",size:36,bold:true,color:NAVY})] })

const h2 = t => new Paragraph({ heading:HeadingLevel.HEADING_2, ...sp(220,80),
  children:[new TextRun({text:t,font:"Calibri",size:28,bold:true,color:TEAL})] })

const h3 = t => new Paragraph({ heading:HeadingLevel.HEADING_3, ...sp(160,60),
  children:[new TextRun({text:t,font:"Calibri",size:24,bold:true,color:NAVY})] })

const h4 = t => new Paragraph({ ...sp(140,40),
  children:[new TextRun({text:t,font:"Calibri",size:22,bold:true,color:TEAL})] })

const body = (t, opts={}) => new Paragraph({ ...sp(60,60),
  children:[new TextRun({text:t,font:"Calibri",size:21,color:"374151",...opts})] })

const italic = t => new Paragraph({ ...sp(40,40),
  children:[new TextRun({text:t,font:"Calibri",size:20,color:GREY,italics:true})] })

const gap = (n=120) => new Paragraph({ ...sp(n,0), children:[] })

const pageBreak = () => new Paragraph({ children:[new PageBreak()] })

const colorBar = (text, color) => new Table({
  width:{ size:9000, type:WidthType.DXA },
  rows:[new TableRow({ children:[new TableCell({
    width:{ size:9000, type:WidthType.DXA },
    shading:{ type:ShadingType.SOLID, fill:color },
    borders:{ top:{style:BorderStyle.NONE}, bottom:{style:BorderStyle.NONE}, left:{style:BorderStyle.NONE}, right:{style:BorderStyle.NONE} },
    children:[new Paragraph({ ...sp(140,140), children:[new TextRun({text,font:"Calibri",size:28,bold:true,color:WHITE})] })]
  })]})],
})

const sectionBar = (text, color) => new Table({
  width:{ size:9000, type:WidthType.DXA },
  rows:[new TableRow({ children:[new TableCell({
    width:{ size:9000, type:WidthType.DXA },
    shading:{ type:ShadingType.SOLID, fill:color },
    borders:{ top:{style:BorderStyle.NONE}, bottom:{style:BorderStyle.NONE}, left:{style:BorderStyle.NONE}, right:{style:BorderStyle.NONE} },
    children:[new Paragraph({ ...sp(100,100), children:[new TextRun({text,font:"Calibri",size:22,bold:true,color:WHITE})] })]
  })]})],
})

const infoBox = (text, fill, borderColor) => new Table({
  width:{ size:9000, type:WidthType.DXA },
  rows:[new TableRow({ children:[new TableCell({
    width:{ size:9000, type:WidthType.DXA },
    shading:{ type:ShadingType.SOLID, fill },
    borders:{
      top:{style:BorderStyle.SINGLE,size:6,color:borderColor},
      bottom:{style:BorderStyle.NONE}, left:{style:BorderStyle.NONE}, right:{style:BorderStyle.NONE}
    },
    children:[new Paragraph({ ...sp(100,100), children:[new TextRun({text,font:"Calibri",size:20,color:"374151"})] })]
  })]})],
})

const twoColTable = (rows, w1=3000, w2=6000) => new Table({
  width:{ size:9000, type:WidthType.DXA },
  rows:[
    new TableRow({ tableHeader:true, children:[
      new TableCell({ width:{size:w1,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:NAVY},
        borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
        children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:rows[0][0],font:"Calibri",size:19,bold:true,color:WHITE})] })] }),
      new TableCell({ width:{size:w2,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:NAVY},
        borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
        children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:rows[0][1],font:"Calibri",size:19,bold:true,color:WHITE})] })] }),
    ]}),
    ...rows.slice(1).map((r,i) => new TableRow({ children:[
      new TableCell({ width:{size:w1,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:i%2===0?LGREY:WHITE},
        borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
        children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:r[0],font:"Calibri",size:19,bold:true,color:NAVY})] })] }),
      new TableCell({ width:{size:w2,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:i%2===0?LGREY:WHITE},
        borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
        children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:r[1],font:"Calibri",size:19,color:"374151"})] })] }),
    ]}))
  ]
})

const articleTable = (arts) => new Table({
  width:{ size:9000, type:WidthType.DXA },
  rows:[
    new TableRow({ tableHeader:true, children:[
      new TableCell({ width:{size:1400,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:NAVY},
        borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
        children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:"Article ID",font:"Calibri",size:19,bold:true,color:WHITE})] })] }),
      new TableCell({ width:{size:5400,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:NAVY},
        borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
        children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:"Title",font:"Calibri",size:19,bold:true,color:WHITE})] })] }),
      new TableCell({ width:{size:2200,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:NAVY},
        borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
        children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:"Audience",font:"Calibri",size:19,bold:true,color:WHITE})] })] }),
    ]}),
    ...arts.map((a,i) => {
      const hasContent = !!ARTICLES[a.n]
      return new TableRow({ children:[
        new TableCell({ width:{size:1400,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:i%2===0?LGREY:WHITE},
          borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
          children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:a.n,font:"Calibri",size:18,bold:true,color:hasContent?TEAL:GREY})] })] }),
        new TableCell({ width:{size:5400,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:i%2===0?LGREY:WHITE},
          borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
          children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:a.t,font:"Calibri",size:18,color:"374151"})] })] }),
        new TableCell({ width:{size:2200,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:i%2===0?LGREY:WHITE},
          borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
          children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:a.w,font:"Calibri",size:18,color:GREY})] })] }),
      ]})
    })
  ]
})

// ── BUILD FULL KB EXPORT ──────────────────────────────────────────────────
export async function exportFullKB() {
  const children = []
  const totalArticles = CATS.reduce((a,c) => a + c.subs.reduce((b,s) => b + s.arts.length, 0), 0)
  const writtenCount = Object.keys(ARTICLES).length
  const today = new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' })

  // ── COVER PAGE ────────────────────────────────────────────────────────────
  children.push(
    colorBar("BREEZE EMBEDDED FINANCE", NAVY),
    gap(60),
    colorBar("Knowledge Base", TEAL),
    gap(100),
    body(`Generated: ${today}`, { bold:false }),
    body("Built from 1,698 real support tickets — Embedded Finance + Payer/Payment EF"),
    gap(60),
    twoColTable([
      ["Metric","Value"],
      ["Main categories","7"],
      ["Sub-categories","27"],
      ["Total articles outlined", String(totalArticles)],
      ["Articles with full content", String(writtenCount)],
      ["Tickets analysed","1,698"],
      ["Teams covered","Embedded Finance · Payer/Payment EF"],
      ["Phase","1.1 — Knowledge Base Construction"],
      ["Document version","1.0"],
    ], 3500, 5500),
    pageBreak(),
  )

  // ── PART 1: KB STRUCTURE ─────────────────────────────────────────────────
  children.push(
    h1("Part 1 — KB Structure"),
    body("This section contains the full category and sub-category structure of the Breeze EF Knowledge Base, with every article outline listed. Articles with full written content are marked — their content appears in Part 2."),
    gap(120),
  )

  CATS.forEach((cat, ci) => {
    if (ci > 0) children.push(gap(80))

    // Category header
    children.push(
      colorBar(`${cat.id}  ·  ${cat.title}  (${cat.tickets.toLocaleString()} tickets — ${cat.pct})`, cat.color || NAVY),
      gap(60),
      body(cat.why),
      gap(80),
    )

    // Sub-categories
    cat.subs.forEach(sub => {
      children.push(
        sectionBar(`${sub.id}  ·  ${sub.lbl}`, TEAL),
        gap(40),
        italic(sub.note),
        gap(60),
        articleTable(sub.arts),
        gap(100),
      )
    })

    if (ci < CATS.length - 1) children.push(pageBreak())
  })

  // ── PART 2: WRITTEN ARTICLES ─────────────────────────────────────────────
  children.push(
    pageBreak(),
    h1("Part 2 — Written Articles"),
    body(`This section contains the ${writtenCount} articles that have been fully written so far. Each article includes a summary, the root cause identified from real ticket descriptions, step-by-step resolution, known error messages, and an escalation guide.`),
    gap(60),
    infoBox(
      `Remaining articles are outlined in Part 1 and are marked 'Coming soon' in the live app. Articles are being written in priority order — starting with the highest-volume categories C1 (Loans) and C2 (Payments).`,
      "FFF8E7", AMBER
    ),
    gap(200),
  )

  Object.values(ARTICLES).forEach((art, idx) => {
    if (idx > 0) children.push(pageBreak())

    // Article cover bar
    children.push(
      colorBar(`${art.id}  ·  ${art.title}`, art.id.startsWith('C1') ? NAVY : TEAL),
      gap(80),
    )

    // Meta
    children.push(
      twoColTable([
        ["Field","Detail"],
        ["Article ID", art.id],
        ["Audience", art.audience],
        ["Owner", art.owner],
        ["Last reviewed", art.reviewed],
      ], 2800, 6200),
      gap(100),
    )

    // Summary
    children.push(
      h3("Summary"),
      infoBox(art.summary, "EBF8F8", TEAL),
      gap(80),
    )

    // Root cause
    children.push(
      h3("What we know from real tickets"),
      body(art.rootCause),
      gap(80),
    )

    // Steps
    children.push(h3("How to resolve this"))
    art.steps.forEach((s, i) => children.push(
      new Paragraph({
        numbering:{ reference:"numbered", level:0 }, ...sp(50,50),
        children:[new TextRun({text:s,font:"Calibri",size:21,color:"374151"})]
      })
    ))
    children.push(gap(80))

    // Errors
    if (art.errors && art.errors.length > 0) {
      children.push(
        h3("Error messages — what they mean"),
        new Table({
          width:{ size:9000, type:WidthType.DXA },
          rows:[
            new TableRow({ tableHeader:true, children:[
              new TableCell({ width:{size:3800,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:NAVY},
                borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
                children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:"Error message",font:"Calibri",size:19,bold:true,color:WHITE})] })] }),
              new TableCell({ width:{size:5200,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:NAVY},
                borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
                children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:"What it means and what to do",font:"Calibri",size:19,bold:true,color:WHITE})] })] }),
            ]}),
            ...art.errors.map((e,i) => new TableRow({ children:[
              new TableCell({ width:{size:3800,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:i%2===0?LGREY:WHITE},
                borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
                children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:e.msg,font:"Calibri",size:19,italics:true,color:RED})] })] }),
              new TableCell({ width:{size:5200,type:WidthType.DXA}, shading:{type:ShadingType.SOLID,fill:i%2===0?LGREY:WHITE},
                borders:{ top:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, bottom:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, left:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"}, right:{style:BorderStyle.SINGLE,size:1,color:"D1D5DB"} },
                children:[new Paragraph({ ...sp(80,80), children:[new TextRun({text:e.fix,font:"Calibri",size:19,color:"374151"})] })] }),
            ]}))
          ]
        }),
        gap(80),
      )
    }

    // Escalation
    children.push(
      h3("When to escalate"),
      infoBox(art.escalate, "FFF8E7", AMBER),
      gap(80),
    )
  })

  // ── BUILD DOC ─────────────────────────────────────────────────────────────
  const doc = new Document({
    numbering:{ config:[
      { reference:"numbered", levels:[{ level:0, format:LevelFormat.DECIMAL, text:"%1.", alignment:AlignmentType.LEFT, style:{ paragraph:{ indent:{ left:720, hanging:360 } } } }] },
    ]},
    styles:{
      default:{ document:{ run:{ font:"Calibri", size:21 } } },
      paragraphStyles:[
        { id:"Heading1", name:"Heading 1", basedOn:"Normal", next:"Normal", quickFormat:true, run:{size:40,bold:true,font:"Calibri",color:NAVY}, paragraph:{spacing:{before:400,after:160},outlineLevel:0} },
        { id:"Heading2", name:"Heading 2", basedOn:"Normal", next:"Normal", quickFormat:true, run:{size:30,bold:true,font:"Calibri",color:TEAL}, paragraph:{spacing:{before:280,after:100},outlineLevel:1} },
        { id:"Heading3", name:"Heading 3", basedOn:"Normal", next:"Normal", quickFormat:true, run:{size:24,bold:true,font:"Calibri",color:NAVY}, paragraph:{spacing:{before:200,after:60},outlineLevel:2} },
      ]
    },
    sections:[{
      properties:{ page:{ size:{width:12240,height:15840}, margin:{top:1080,right:1080,bottom:1080,left:1080} } },
      children
    }]
  })

  const blob = await Packer.toBlob(doc)
  saveAs(blob, `Breeze_EF_Knowledge_Base_${today.replace(/ /g,'_')}.docx`)
}
