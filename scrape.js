const data = require('./links.js');
const puppeteer = require('puppeteer');
const fs = require('fs');

let stuffs = [];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let i = 0; i < data['links'].length; i++) {
    let link = data['links'][i]['link'];
    await page.goto(link);

    let pageTITLE = await page.title();
    // console.log(pageTITLE);
    pageTITLE = pageTITLE.substring(0, pageTITLE.length - 20);

    stuffs.push({ name: pageTITLE, link: link });
  }

  fs.writeFile('realsy.json', JSON.stringify(stuffs, null, 4), (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('File has been created.');
  });

  browser.close();
})();

console.log(data['links'].length);
