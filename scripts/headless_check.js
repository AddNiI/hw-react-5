const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    page.on('console', msg => {
      const args = msg.args();
      Promise.all(args.map(a => a.jsonValue().catch(() => a.toString()))).then(values => {
        console.log(`[console] ${msg.type()}: ${values.join(' ')}`);
      });
    });

    page.on('pageerror', err => console.log('[pageerror]', err.message));
    page.on('requestfailed', req => {
      const failure = req.failure();
      console.log('[requestfailed]', req.url(), failure && failure.errorText);
    });

    const url = 'http://localhost:3000/';
    console.log('Navigating to', url);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 }).catch(e => console.log('[goto error]', e.message));

    // Wait a bit to capture runtime console logs / websocket messages
    await new Promise(resolve => setTimeout(resolve, 4000));

    // Capture page html title and body length
    const title = await page.title().catch(() => '');
    const bodyLength = await page.evaluate(() => document.body ? document.body.innerText.length : 0);
    console.log('[page-info] title=', title, 'bodyLength=', bodyLength);

    await browser.close();
    console.log('Done');
  } catch (e) {
    console.error('Headless check failed:', e);
    process.exit(1);
  }
})();
