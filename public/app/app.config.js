app.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider
            .when("/", {
                //Home page
                templateUrl : "app/views/home.view.html",
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
                templateUrl : "app/views/home.view.html",
                controller: 'MainController',
                resolve:{
                    init : function () {
                        //Nothing here for now
                        console.log('home page route triggered');
                    }
                }
            })
            .otherwise({redirectTo: '/home'});

            // use the HTML5 History API
            $locationProvider.html5Mode(true);
    }]);