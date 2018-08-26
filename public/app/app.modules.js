const app = angular.module('cabs_and_travels', [
    'ngStorage',
    'ngRoute',
]);

//Configure the constants
app.constant(
    'host_url', 'http://localhost:3000/admin/'
);
