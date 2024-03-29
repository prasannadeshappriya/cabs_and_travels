app.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider
            .when("/", {
                //Home page
                templateUrl : "dist/views/home.view.html",
                controller: 'MainController',
                resolve:{
                    init : function () {
                        //Nothing here for now
                        console.log('home page route triggered');
                    }
                }
            })
            .when("/home", {
                //Home page
                templateUrl : "dist/views/home.view.html",
                controller: 'MainController',
                resolve:{
                    init : function () {
                        //Nothing here for now
                        console.log('home page route triggered');
                    }
                }
            })
            .when("/contact", {
                //Home page
                templateUrl : "dist/views/contact.view.html",
                controller: 'MainController',
                resolve:{
                    init : function () {
                        //Nothing here for now
                        console.log('contact page route triggered');
                    }
                }
            })
            .when("/drivers", {
                //Home page
                templateUrl : "dist/views/driver.view.html",
                controller: 'MainController',
                resolve:{
                    init : function () {
                        //Nothing here for now
                        console.log('driver page route triggered');
                    }
                }
            })
            .when("/services", {
                //Home page
                templateUrl : "dist/views/service.view.html",
                controller: 'MainController',
                resolve:{
                    init : function () {
                        //Nothing here for now
                        console.log('service page route triggered');
                    }
                }
            })
            .when("/vehicles", {
                //Home page
                templateUrl : "dist/views/vehicles.view.html",
                controller: 'MainController',
                resolve:{
                    init : function () {
                        //Nothing here for now
                        console.log('vehicles page route triggered');
                    }
                }
            })
            .otherwise({redirectTo: '/home'});

            // use the HTML5 History API
            $locationProvider.html5Mode(true);
    }]);