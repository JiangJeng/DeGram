// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('gramlist', ['ionic','gramlist.controllers', 'gramlist.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chapters', {
      url: '/chapters',
      views: {
        'tab-chapters': {
          templateUrl: 'tabs/tab-chapters.html',
          controller: 'IndexCtrl'
        }
      }
    })

      .state('tab.search', {
        cache: false,
        url: '/search',
        views: {
          'tab-search': {
            templateUrl: 'tabs/tab-search.html',
            controller: 'SearchCtrl'
          }
        }
      })

    .state('tab.chapter-detail', {
      url: '/chapters/:chapterId/:searchTerm',
      params:{searchTerm:{value: ""}},
      views: {
        'tab-chapters': {
          templateUrl: 'tabs/chapter-detail.html',
          controller: 'ChapterDetailCtrl'
        }
      }
    })
      .state('tab.bildworter', {
        url: '/bildworter',
        views: {
          'tab-bildworter': {
            templateUrl: 'tabs/tab-bildworter.html',
            controller: 'BildWorterCtrl'
          }
        }
      })
      .state('tab.bildworter-detail', {
        url: '/bildworter/:bildworterId',
        views: {
          'tab-bildworter': {
            templateUrl: 'tabs/bildworter-detail.html',
            controller: 'ChapterDetailCtrl'
          }
        }
      })

      .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

    });

