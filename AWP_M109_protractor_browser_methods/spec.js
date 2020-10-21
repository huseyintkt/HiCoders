// spec.js
// Describe function adds a Test Suite
describe('Check browser methods', function () {

    // pluralsight
    it('Should manage browser', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.pluralsight.com/');
        browser.getTitle().then(function (title) {
          console.log(title);      
        });
        browser.getCurrentUrl().then(function (url) {
          console.log(url);
        });
        browser.sleep(7000);
    });

    // udemy
    it('Should manage browser', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.udemy.com/');
        browser.manage().window().setSize(1920, 1080);
        browser.getTitle().then(function (title) {
          console.log(title);
        });
        browser.getCurrentUrl().then(function (url) {
          console.log(url);
        });
        browser.sleep(7000);
    });

    // linkedin
    it('Should manage browser', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.linkedin.com/');
        browser.manage().window().maximize();
        browser.getTitle().then(function (title) {
          console.log(title);
        });
        browser.getCurrentUrl().then(function (url) {
          console.log(url);
        });
        browser.sleep(7000);
    });

    // coursera
    it('Should manage browser', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.coursera.org/');
        browser.manage().window().setSize(1400, 800);
        browser.getTitle().then(function (title) {
          console.log(title);
        });
        browser.getCurrentUrl().then(function (url) {
          console.log(url);
        });
        browser.sleep(7000);
      });
});