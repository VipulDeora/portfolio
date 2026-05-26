import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  let errors = 0;
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('PAGE ERROR LOG:', msg.text());
      errors++;
    }
  });
  page.on('pageerror', error => {
    console.log('PAGE FATAL ERROR:', error.message);
    errors++;
  });
  
  try {
    await page.goto('http://localhost:5174', { waitUntil: 'domcontentloaded', timeout: 15000 });
    const content = await page.evaluate(() => document.body.innerText);
    console.log("=== PAGE CONTENT START ===");
    console.log(content.substring(0, 500) + "...[truncated]");
    console.log("=== PAGE CONTENT END ===");
    
    if (content.includes("I design systems for better decisions.")) {
        console.log("SUCCESS: Desired Hero content is rendered.");
    } else {
        console.log("FAILURE: Hero content missing. Page might be blank.");
        errors++;
    }
  } catch (err) {
    console.error("Navigation failed:", err);
    errors++;
  }
  
  await browser.close();
  
  if (errors > 0) {
      process.exit(1);
  }
})();
