const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage() 
  await page.goto('https://results.hyrox.com/season-6/?pid=list_overall&pidp=ranking_nav')

  await page.screenshot({ path: 'example.png', fullPage: true})
  await page.pdf({ path: 'example.pdf', format: 'A4'})

  await browser.close()
}

run()