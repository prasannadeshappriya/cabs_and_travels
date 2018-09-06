const app = angular.module('cabs_and_travels', [
    'ngStorage',
    'ngRoute',
]);

//Configure the constants
app.constant(
    'host_url', 'https://sscabs.alwaysdata.net/admin/'
);

//Alwaysdata.net Link:
// 'host_url', 'https://sscabs.alwaysdata.net/admin/'

//Localhost Link
// 'host_url', 'http://localhost:3000/admin/'