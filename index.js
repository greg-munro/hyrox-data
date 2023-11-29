const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage() 
  await page.goto('https://results.hyrox.com/season-6/?pid=list_overall&pidp=ranking_nav')

  const results = await page.evaluate(() => 
    Array.from(document.querySelectorAll('#main-content .row'), (row) => ({
      resultRow: row
      // resultRow: row.querySelector('.row h4').innerText
    }))
  )

  console.log(results)

  await browser.close()
}

run()