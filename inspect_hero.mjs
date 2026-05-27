import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 10000 });
  const heroStyle = await page.evaluate(() => {
    const el = document.querySelector('.hero-animate');
    if (!el) return 'NOT FOUND';
    const computed = window.getComputedStyle(el);
    return {
      opacity: computed.opacity,
      display: computed.display,
      visibility: computed.visibility,
      zIndex: computed.zIndex,
      top: computed.top,
      rect: el.getBoundingClientRect()
    };
  });
  console.log('Hero Style:', heroStyle);
  await browser.close();
})();
