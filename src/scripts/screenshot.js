const fs = require('fs');
const request = require('request');

const args = process.argv.splice(2);
const url = args[0];
const fileName = url.substr(0, url.indexOf('.'));
const desktopUrl = `http://api.screenshotlayer.com/api/capture?access_key=${process.env.ACCESS_KEY}&url=https://${url}&viewport=1440x900&width=1440&delay=20`;
const mobileUrl = `http://api.screenshotlayer.com/api/capture?access_key=${process.env.ACCESS_KEY}&url=https://${url}&viewport=375x812&width=375&delay=20`;

request(desktopUrl).pipe(
  fs.createWriteStream(
    `./content/portfolio/screenshots/${fileName}_desktop.png`
  )
);

// Don't exceed rate-limit
setTimeout(
  () =>
    request(mobileUrl).pipe(
      fs.createWriteStream(
        `./content/portfolio/screenshots/${fileName}_mobile.png`
      )
    ),
  10 * 1000
);
