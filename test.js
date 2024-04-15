/*const request = require('supertest');
const server = require('./index');

describe('Test the root path', () => {
  test('It should respond to GET method', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });
});

afterAll(done => {
  if (server && typeof server.close === 'function') {
    server.close(done);
  } else {
    console.warn('Unable to close server: No close() method found.');
    done();
  }
});

const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
 
  try {
    // Navigate to the URL of your Node.js application
    await page.goto('http://34.201.68.90:3000/');
 
    const pageContent = await page.content();
    if (pageContent.includes('DevOps')) {
      console.log('Test passed: Expected text is present on the page.');
    } else {
      console.error('Test failed: Expected text is not present on the page.');
    }
   
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await browser.close();
  }
})();
*/

const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up Chrome options (optional)
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless'); // Run Chrome in headless mode (without GUI)

// Create a new WebDriver instance
const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();

// Function to run the Selenium tests
async function runTests() {
    try {
        // Navigate to the deployed application URL
        await driver.get('http://100.25.196.208:3000');

        // Wait until the page title contains 'Welcome'
        await driver.wait(until.titleContains('Welcome'), 5000);

        // Find and assert the presence of elements on the page
        const pageTitle = await driver.findElement(By.css('h1')).getText();
        console.log('Page Title:', pageTitle);

        const projectList = await driver.findElements(By.css('ul li'));
        console.log('Project Members:');
        for (let member of projectList) {
            const memberName = await member.getText();
            console.log('-', memberName);
        }


        // Close the WebDriver session
        await driver.quit();
    } catch (error) {
        console.error('An error occurred:', error);
        // Close the WebDriver session in case of an error
        await driver.quit();
    }
}

// Execute the test function
runTests();

