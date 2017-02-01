angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('PlaylistsCtrl', function($scope, $http, $timeout, $ionicScrollDelegate, $rootScope, $ionicModal, $ionicHistory) {
    $http.get('https://novosti.herokuapp.com' + '/api/news')
        .then(function(res) {
            console.log(res.data);
            $scope.news = res.data;
        });


    $scope.openNews = function(animation, article) {
        $rootScope.article = article;
        console.log(animation);
        $ionicModal.fromTemplateUrl('templates/article.html', {
            scope: $scope,
            animation: 'animated bounceIn',
            hideDelay: 920
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
            $scope.hideModal = function() {
                $scope.modal.hide();
                // Note that $scope.$on('destroy') isn't called in new ionic builds where cache is used
                // It is important to remove the modal to avoid memory leaks
                $scope.modal.remove();
            }
        });
    };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {});
