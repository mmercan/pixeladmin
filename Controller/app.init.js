
(function () {
    'use strict';


    angular.module('app', ['ngRoute', 'component', 'directives', 'data']);
  

    angular.module('app').config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/test', { templateUrl: '/App/templates/tests.html', controller: 'testCtrl' })
        .when('/test/:id', { templateUrl: '/App/templates/test.html', controller: 'testCtrl' })
        .when('/preferences', { templateUrl: '/App/templates/preferences.html', controller: 'PreferencesCtrl' })
            .otherwise({ redirectTo: '/test' });



        $routeProvider
        .when('/charts', { templateUrl: '/App/templates/PixelAdmin/charts.html', controller: 'testCtrl' })
        .when('/completeui', { templateUrl: '/App/templates/PixelAdmin/completeui.html', controller: 'testCtrl' })
        .when('/formcomponents', { templateUrl: '/App/templates/PixelAdmin/formComponents.html', controller: 'testCtrl' })
        .when('/formsadvanced', { templateUrl: '/App/templates/PixelAdmin/formsadvanced.html', controller: 'testCtrl' })
        .when('/layouts', { templateUrl: '/App/templates/PixelAdmin/layouts.html', controller: 'testCtrl' })
        .when('/pages1', { templateUrl: '/App/templates/PixelAdmin/pages1.html', controller: 'testCtrl' })
        .when("/elements", { templateUrl: '/App/templates/PixelAdmin/elements.html', controller: 'testCtrl' })
        .when('/pagessignup', { templateUrl: '/App/templates/PixelAdmin/pagessignup.html', controller: 'testCtrl' })
        .when('/pagessignin', { templateUrl: '/App/templates/PixelAdmin/pagessignin.html', controller: 'testCtrl' })
        .when('/index', { templateUrl: '/App/templates/PixelAdmin/index.html', controller: 'testCtrl' })
        .when('/test', { templateUrl: '/App/templates/tests.html', controller: 'testCtrl' })
        .when('/test/:id', { templateUrl: '/App/templates/test.html', controller: 'testCtrl' })
        .when('/angularcomponents', { templateUrl: '/App/templates/angularcomponents.html', controller: 'testCtrl' })
        .when('/rottentomatoes', { templateUrl: '/App/templates/PixelAdmin/RottenTomatoes.html', controller: 'rottentomatoesCtrl' });
    }]);

    angular.module('app').run(["storage", "$rootScope", "$route", "$location", "mainMenuService", function (storage, $rootScope, $route, $location, mainMenuService) {

        var initStorage = function (storageitem) {
            storageitem.getitems();
            if (!storageitem.result.listcolumns) {
                storageitem.result.listcolumns = ["Name"];
                storageitem.result.viewMode = 'list';
                storageitem.setrootItem(storageitem.result);
            }
        }


        var productStorage = new storage("ProductsView");
        var cultureStorage = new storage("CultureView");
        var locStorage = new storage("LocationView");
        initStorage(productStorage);
        initStorage(cultureStorage);
        initStorage(locStorage);


        //Main Menu items
        mainMenuService.init();
        var setactive = function (address) {
            $("#main-menu  li").removeClass("active");
            $("#top-menu li").removeClass("active");

            var addr = "a[href='/" + address + "']";
            var elem = $(addr).parent().addClass("active");
        }
        $rootScope.$on('$locationChangeStart', function (ev, next, current) {
            var nextPath = $location.path();
            var nextRoute = $route.routes[nextPath];

            setactive("#" + nextPath);
        });
    }]);



})();