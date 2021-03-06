module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai-things', 'sinon-chai'],
        files: [
            'www/assets/lib/ionic/js/ionic.bundle.js',
            'www/assets/lib/ngCordova/dist/ng-cordova.js',
            'www/assets/lib/angular-ui-router/release/angular-ui-router.js',
            'www/assets/lib/angular-mocks/angular-mocks.js',
            'www/assets/lib/ng-lodash/build/ng-lodash.min.js',
            'www/app/app.js',
            'www/app/components/**/*.js',
            'www/app/shared/**/*.js',
            'test/**/*Test.js'
        ],
        exclude: [],
        preprocessors: {
            'www/app/**/*.js': ['coverage']
        },
        reporters: ['coverage', 'progress'],
        coverageReporter: {
            type: 'lcovonly',
            dir: 'test/coverage/'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};
