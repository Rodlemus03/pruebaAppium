import type { Options } from '@wdio/types'
exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        deviceName: 'emulator-5554',
        app: '/path/to/your/app.apk',
        automationName: 'UiAutomator2'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
