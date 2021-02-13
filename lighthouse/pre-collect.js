const env = require('./lighthouse.env.json');
const config = require('./config.json');
module.exports = async browser => {
  const page = await browser.newPage();
  const email = env.email;
  const password = env.password;
  await page.goto(config.ci.collect.url);
  await page.waitForNavigation({ waitUntil: 'networkidle0' }, { delay: 100 });
  await page.click('#email');
  await page.type('#email', email, { delay: 100 });
  await page.click('#password');
  await page.type('#password', password, { delay: 100 });
  await page.click('#submit');
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
 page.setCookie({
   domain: 'EXAMPLE-URL.com',
   name: 'staging',
   value: 'true'
 });
};