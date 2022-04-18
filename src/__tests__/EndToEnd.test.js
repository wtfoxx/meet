import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  jest.setTimeout(30000);

  let browser;
  let page;
  beforeAll(async () => {
    const browser = await puppeteer.launch({ 
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions'] 
    });
     const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  })
  
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-button');
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-button');
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeNull();
  });
});