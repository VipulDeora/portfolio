import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
  
  const data = await page.evaluate(() => {
    const spine = document.querySelector('.pointer-events-none.absolute.inset-x-0.top-0.bottom-0');
    return {
      spineHeight: spine ? spine.offsetHeight : null,
      spineBottom: spine ? spine.getBoundingClientRect().bottom + window.scrollY : null,
      bodyHeight: document.body.scrollHeight,
      windowHeight: window.innerHeight
    };
  });
  
  console.log(data);
  await browser.close();
})();
