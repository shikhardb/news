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

.controller('PlaylistsCtrl', function($scope, $http,$timeout,$ionicScrollDelegate) {
    // $http.get('localhost:3000' + '/api/news').then(function(res) {
    //     console.log(res);
    // });
  $scope.scroll = function() {
    $timeout(function () {
       $scope.scrolling = true;
    });
    console.log('scolling');
  };


  $scope.scrollb = function() {
    $timeout(function () {
       $scope.scrolling = false;
      $ionicScrollDelegate.resize();
    });
  };
    $scope.news = [{"_id":"58910920d7ce73048cea6694","title":"WhatsApp Live Location Tracking feature teased by beta, will track your movements","image":"https://s.aolcdn.com/hss/storage/midas/95c868b71af1c3f5a780f8e5dd08a7c7/202768506/whatsapp-telefono.jpg","description":" concerns are once again surrounding WhatsApp, with the messaging service set to add live location tracking features. 0. By Luke Johnson / Published 31st January 2017.\r\nRelated\r\nWhatsApp »\r\nWhatsApp May Soon Inform You If Friends Change Status MessagesNDTV\r\nWhatsApp to let users delete messages AFTER sending them and track their mates with new update concerns are once again surrounding WhatsApp, with the messaging service set to add live location tracking features. 0. By Luke Johnson / Published 31st January 2017.\r\nRelated\r\nWhatsApp »\r\nWhatsApp May Soon Inform You If Friends Change Status MessagesNDTV\r\nWhatsApp to let users delete messages AFTER sending them and track their mates with new update concerns are once again surrounding WhatsApp, with the messaging service set to add live location tracking features. 0. By Luke Johnson / Published 31st January 2017.\r\nRelated\r\nWhatsApp »\r\nWhatsApp May Soon Inform You If Friends Change Status MessagesNDTV\r\nWhatsApp to let users delete messages AFTER sending them and track their mates with new update concerns are once again surrounding WhatsApp, with the messaging service set to add live location tracking features. 0. By Luke Johnson / Published 31st January 2017.\r\nRelated\r\nWhatsApp »\r\nWhatsApp May Soon Inform You If Friends Change Status MessagesNDTV\r\nWhatsApp to let users delete messages AFTER sending them and track their mates with new update concerns are once again surrounding WhatsApp, with the messaging service set to add live location tracking features. 0. By Luke Johnson / Published 31st January 2017.\r\nRelated\r\nWhatsApp »\r\nWhatsApp May Soon Inform You If Friends Change Status MessagesNDTV\r\nWhatsApp to let users delete messages AFTER sending them and track their mates with new update","time":"2017-01-31T22:01:04.992Z","author":"admin","deviceId":"","__v":0},{"_id":"589108d7d7ce73048cea6693","title":"Samsung Galaxy S8 Rumoured to Launch Alongside New Wireless Noise-Cancelling Headphones","image":"http://cdn02.androidauthority.net/wp-content/uploads/2016/03/samsung-galaxy-s7-review-aa-7-of-20-840x473.jpg","description":"Samsung's Galaxy S8 flagship smartphone may not be the only hardware planned for March 29, if a new report is to be believed. A new tip claims that Samsung may reveal its new wireless noise-cancelling headphones alongside the new Samsung Galaxy ..Samsung's Galaxy S8 flagship smartphone may not be the only hardware planned for March 29, if a new report is to be believed. A new tip claims that Samsung may reveal its new wireless noise-cancelling headphones alongside the new Samsung Galaxy ..Samsung's Galaxy S8 flagship smartphone may not be the only hardware planned for March 29, if a new report is to be believed. A new tip claims that Samsung may reveal its new wireless noise-cancelling headphones alongside the new Samsung Galaxy ..Samsung's Galaxy S8 flagship smartphone may not be the only hardware planned for March 29, if a new report is to be believed. A new tip claims that Samsung may reveal its new wireless noise-cancelling headphones alongside the new Samsung Galaxy ..Samsung's Galaxy S8 flagship smartphone may not be the only hardware planned for March 29, if a new report is to be believed. A new tip claims that Samsung may reveal its new wireless noise-cancelling headphones alongside the new Samsung Galaxy ..","time":"2017-01-31T21:59:51.814Z","author":"admin","deviceId":"","__v":0},{"_id":"58910881d7ce73048cea6692","title":"Canada Shooting Suspect Rented Apartment Close To Mosque - Neighbours","image":"https://www.studyabroad.com/sites/default/files/images/7115.canada.jpg","description":"The French-Canadian student accused of killing six people during evening prayers in a Quebec City mosque had rented an apartment nearby, neighbours said on Tuesday, a sign he may have been targeting the house of worship.The French-Canadian student accused of killing six people during evening prayers in a Quebec City mosque had rented an apartment nearby, neighbours said on Tuesday, a sign he may have been targeting the house of worship.The French-Canadian student accused of killing six people during evening prayers in a Quebec City mosque had rented an apartment nearby, neighbours said on Tuesday, a sign he may have been targeting the house of worship.The French-Canadian student accused of killing six people during evening prayers in a Quebec City mosque had rented an apartment nearby, neighbours said on Tuesday, a sign he may have been targeting the house of worship.The French-Canadian student accused of killing six people during evening prayers in a Quebec City mosque had rented an apartment nearby, neighbours said on Tuesday, a sign he may have been targeting the house of worship.The French-Canadian student accused of killing six people during evening prayers in a Quebec City mosque had rented an apartment nearby, neighbours said on Tuesday, a sign he may have been targeting the house of worship.","time":"2017-01-31T21:58:25.072Z","author":"admin","deviceId":"","__v":0},{"_id":"58910833d7ce73048cea6691","title":"Donald Trump sacks 2 top officials in rift over ban order","image":"http://d2l9bgmqgw93ff.cloudfront.net/wp-content/uploads/2017/01/donald_trump_rnc_h_2016.jpg","description":"In a dramatic move, US President Donald Trump today fired two top officials, including Acting Attorney General Sally Yates who refused to enforce his controversial and executive order banning citizens of seven Muslim-majority nations from entering ...In a dramatic move, US President Donald Trump today fired two top officials, including Acting Attorney General Sally Yates who refused to enforce his controversial and executive order banning citizens of seven Muslim-majority nations from entering ...In a dramatic move, US President Donald Trump today fired two top officials, including Acting Attorney General Sally Yates who refused to enforce his controversial and executive order banning citizens of seven Muslim-majority nations from entering ...\r\nIn a dramatic move, US President Donald Trump today fired two top officials, including Acting Attorney General Sally Yates who refused to enforce his controversial and executive order banning citizens of seven Muslim-majority nations from entering ...\r\n\r\n\r\nIn a dramatic move, US President Donald Trump today fired two top officials, including Acting Attorney General Sally Yates who refused to enforce his controversial and executive order banning citizens of seven Muslim-majority nations from entering ...","time":"2017-01-31T21:57:07.262Z","author":"admin","deviceId":"","__v":0},{"_id":"589107d9d7ce73048cea6690","title":" The Indian Express See realtime coverage\t Post demonetisation: 'Digitalisation is not panacea'","image":"http://animal-dream.com/data_images/money/money7.jpg","description":"Post demonetisation, demonetisation, tax evaders, money fraud, tax fraud, arvind subramanian One of the key impacts of demonetisation announcement on November 8 has been the growth to a digital payments ecosystem.\r\n\r\nPost demonetisation, demonetisation, tax evaders, money fraud, tax fraud, arvind subramanian One of the key impacts of demonetisation announcement on November 8 has been the growth to a digital payments ecosystem.","time":"2017-01-31T21:55:37.263Z","author":"admin","deviceId":"","__v":0},{"_id":"5890f83bf9fdca054c6d55e7","title":"This is a news","image":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcVxQ5h50YK5abOu4TSjV0qE1Oah7wh31da8E18Uwv2fe59iMk_w","description":"'index', { title: 'News App Admin Panel' }\r\n'index', { title: 'News App Admin Panel' }\r\n'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }\r\n\r\n'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }\r\n\r\n\r\n'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }'index', { title: 'News App Admin Panel' }","time":"2017-01-31T20:48:59.072Z","author":"admin","deviceId":"","__v":0}];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
