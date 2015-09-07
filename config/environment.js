/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-twiddle',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    host: 'https://api.github.com',
    githubOauthUrl: 'http://localhost:9999/authenticate/',
    assetsHost: '/',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      rootElement: '#main-app'
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          scope: 'gist',
          apiKey: '5ecb4e9a5a6121ef61ba'
        }
      }
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.host = undefined;
  }

  if (environment === 'production') {
    ENV.githubOauthUrl = 'https://ember-twiddle.herokuapp.com/authenticate/';
    ENV.assetsHost = '//assets.ember-twiddle.com/';
    ENV.torii = {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          scope: 'gist',
          apiKey: '3df37009938c0790d952'
        }
      }
    };
  }

  if (environment === 'staging') {
    ENV.githubOauthUrl = 'https://canary-twiddle-gatekeeper.herokuapp.com/authenticate/';
    ENV.assetsHost = '//canary-assets.ember-twiddle.com/';
    ENV.torii = {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          scope: 'gist',
          apiKey: '085e033505c9d26ec27a'
        }
      }
    };
  }

  return ENV;
};
