// conf.js
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    multiCapabilities: [{
        browserName: 'chrome'
    }, ]
}