import fs from 'node:fs'
import path from 'node:path'
import PDFDocument from 'pdfkit'

const OUTPUT_PATH = path.resolve('public/resume.pdf')

const doc = new PDFDocument({
  size: 'A4',
  margin: 50,
})

const writeStream = fs.createWriteStream(OUTPUT_PATH)
doc.pipe(writeStream)

doc
  .fontSize(26)
  .fillColor('#1e1b4b')
  .text('Sooraj T S', { continued: false })

doc
  .moveDown(0.5)
  .fontSize(12)
  .fillColor('#0f172a')
  .text('Software Developer · Bangalore, India')

doc
  .moveDown()
  .fontSize(14)
  .fillColor('#1e293b')
  .text('Summary', { underline: true })

doc
  .moveDown(0.5)
  .fontSize(11)
  .fillColor('#1f2937')
  .text(
    'Full-stack engineer specialising in PHP (CodeIgniter), MySQL, and AngularJS with proven integrations across DigiMiles, ZeptoMail, and AiSensy. Passionate about building scalable, resilient systems with clean UX.',
  )

doc
  .moveDown()
  .fontSize(14)
  .fillColor('#1e293b')
  .text('Core Skills', { underline: true })

doc
  .moveDown(0.5)
  .fontSize(11)
  .fillColor('#1f2937')
  .list([
    'Backend: PHP, CodeIgniter, RESTful APIs, MySQL optimisation',
    'Frontend: AngularJS, Bootstrap, HTML5, CSS3, JavaScript',
    'Mobile: Cordova hybrid apps, Flutter cross-platform builds',
    'Integrations: DigiMiles SMS, ZeptoMail Email, AiSensy WhatsApp',
  ])

doc
  .moveDown()
  .fontSize(14)
  .fillColor('#1e293b')
  .text('Experience', { underline: true })

doc
  .moveDown(0.5)
  .fontSize(12)
  .fillColor('#1f2937')
  .text('Software Developer — Efeedor (2021 — Present)', { continued: false })
doc
  .moveDown(0.25)
  .fontSize(11)
  .list([
    'Architected modular services improving dashboard load times by 40%.',
    'Integrated multi-channel communications via DigiMiles, ZeptoMail, AiSensy.',
    'Mentored junior developers and led code quality initiatives.',
  ])

doc
  .moveDown(0.75)
  .fontSize(12)
  .fillColor('#1f2937')
  .text('Software Engineer — Freelance & Contract (2018 — 2021)')
doc
  .moveDown(0.25)
  .fontSize(11)
  .list([
    'Delivered responsive web apps for SMEs in finance and retail.',
    'Introduced reusable UI systems using Bootstrap and Tailwind.',
  ])

doc
  .moveDown()
  .fontSize(14)
  .fillColor('#1e293b')
  .text('Contact', { underline: true })

doc
  .moveDown(0.5)
  .fontSize(11)
  .fillColor('#1f2937')
  .text('Email: sooraj.ts.dev@gmail.com')

doc.end()

writeStream.on('finish', () => {
  console.log(`Resume generated at ${OUTPUT_PATH}`)
})

