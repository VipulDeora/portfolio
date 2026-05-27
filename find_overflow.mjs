import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
  
  const overflow = await page.evaluate(() => {
    const bodyHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    
    // Find any elements whose bottom edge is below the body content
    const elements = Array.from(document.querySelectorAll('*'));
    let maxBottom = 0;
    let maxElement = null;
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const bottom = rect.bottom + window.scrollY;
      if (bottom > maxBottom) {
        maxBottom = bottom;
        maxElement = el.tagName + (el.className ? '.' + el.className.split(' ').join('.') : '');
      }
    });
    
    return {
      bodyHeight,
      maxBottom,
      maxElement
    };
  });
  
  console.log('Overflow data:', overflow);
  await browser.close();
})();
