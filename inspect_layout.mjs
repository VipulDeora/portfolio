import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 10000 });
  const layout = await page.evaluate(() => {
    const mainWrapper = document.querySelector('.relative.z-10.flex.flex-col.min-h-screen');
    if (!mainWrapper) return { error: 'main wrapper not found' };
    const rect = mainWrapper.getBoundingClientRect();
    const style = window.getComputedStyle(mainWrapper);
    
    // Also check hero
    const hero = document.querySelector('h1');
    const heroRect = hero ? hero.getBoundingClientRect() : null;
    const heroStyle = hero ? window.getComputedStyle(hero) : null;
    
    // Check ProofBridge
    const proof = document.querySelector('.mb-20');
    const proofRect = proof ? proof.getBoundingClientRect() : null;
    const proofStyle = proof ? window.getComputedStyle(proof) : null;

    return {
      main: { width: rect.width, height: rect.height, opacity: style.opacity, visibility: style.visibility, display: style.display, zIndex: style.zIndex },
      hero: hero ? { width: heroRect.width, height: heroRect.height, opacity: heroStyle.opacity, visibility: heroStyle.visibility } : 'Not found',
      proof: proof ? { width: proofRect.width, height: proofRect.height, opacity: proofStyle.opacity, visibility: proofStyle.visibility } : 'Not found'
    };
  });
  console.log('Layout:', layout);
  await browser.close();
})();
