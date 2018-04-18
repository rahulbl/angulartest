// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider, $locationProvider) {
        $routeProvider

            .when('/', {
				title : 'Home',
				robots : 'follow,index',
				description : 'This site is a single page AngularJS app. It\'s intended to test whether search engines can crawl and adequately render & index the angular pages',
				canonical : 'http://angular.abertram.com/',
                templateUrl : 'pages/home.php',
                controller  : 'mainController'
            })

            .when('/insult-hosepipe-salmon', {
				title : 'Insult Hosepipe Salmon - A Joke',
				robots : 'noindex',
				description : 'A short story about my favourite salmon joke, and the time that I brought it out at a party when there was a salmon present.I bring this out at every party I go to, and it always brings the house down.',
				canonical : 'http://angular.abertram.com/insult-hosepipe-salmon',
                templateUrl : 'pages/insult-hosepipe-salmon.php',
                controller  : 'mainController'
            }) 
			
            .when('/applause-rudder-teapot', {
				title : 'Applause Rudder Teapot - An Idea',
				robots : 'follow,index',
				description : 'What if you want your rudder teapot (or your teapot\'s rudder) to have a noise? Our guide to implementing an applause (or any laugh track) track on your rudder teapot is what you need.',
				canonical : 'http://angular.abertram.com/applause-rudder-teapot',
                templateUrl : 'pages/applause-rudder-teapot.php',
                controller  : 'mainController',
                dynamicLink : "immediate-redirect"
            }) 
			
            .when('/laptop-coatrack-barge', {
				title : 'Laptop Coatrack Barge - Order Now',
				robots : 'follow,index',
				description : 'Order our solution for the common problem of having to drag your laptop barge around. Our ingenous laptop coatrack barge floats in a nearby body of water and stores all of your laptop coatracks! Buy now',
				canonical : 'http://angular.abertram.com/laptop-coatrack-barge',
                templateUrl : 'pages/laptop-coatrack-barge.php',
                controller  : 'mainController'
            }) 
			.when('/orphan-purple-roadworks', {
				title : 'Orphan Purple Roadworks - Render Now',
				robots : 'follow,index',
				description : 'This page is hidden from crawlers, i.e. the link to it is only listed on a page which would need to be rendered. we\'ll see what happens!',
				canonical : 'http://angular.abertram.com/orphan-purple-roadworks',
                templateUrl : 'pages/orphan-purple-roadworks.php',
                controller  : 'mainController'
            })
			.when('/secondary-nephew-cake', {
				title : 'Secondary Nephew Cake',
				robots : 'follow,index',
				description : 'A page which would be impossible to find.',
				canonical : 'http://angular.abertram.com/secondary-nephew-cake',
                templateUrl : 'pages/secondary-nephew-cake.php',
                controller  : 'mainController'
            })
            
			.when('/immediate-redirect', {
				title : 'Secondary Nephew Cake',
				robots : 'immediateredirect',
				description : 'A page which would be impossible to find.',
				canonical : 'http://angular.abertram.com/secondary-nephew-cake',
                templateUrl : 'pages/secondary-nephew-cake.php',
                controller  : 'mainController'
            })
            
			.when('/immediate-redirect-target', {
				title : 'Immediate Redirect Target',
				robots : 'index, nofollow',
				description : 'Immediate Redirect Target',
				canonical : 'http://angular.abertram.com/immediate-redirect-target',
                templateUrl : 'pages/secondary-nephew-cake.php',
                controller  : 'mainController'
            })

		 $locationProvider.html5Mode(true);
    });
	scotchApp.run(['$rootScope', function ($rootScope) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$rootScope.title = current.$$route.title;
			$rootScope.description = current.$$route.description;
			$rootScope.canonical = current.$$route.canonical;
            $rootScope.robots = current.$$route.robots
            $rootScope.dynamicLink = current.$$route.dynamicLink
            if(current.$$route.robots == "immediateredirect"){
                window.location.href = "http://angular.abertram.com/immediate-redirect-target"
            }
		});
	 }]);

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
