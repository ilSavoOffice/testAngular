var modulo = angular.module('photoApp', []);

modulo.config(function($routeProvider) {
  $routeProvider.when('/photos', {templateUrl: 'photo-list.html', controller: PhotoListCtrl});
  $routeProvider.when('/photos/:id', {templateUrl: 'photo-detail.html', controller: PhotoDetailCtrl});
  $routeProvider.otherwise({redirectTo: '/photos'});
});

var photos = [ {"id": "0", "file": "uno.jpg",
                "description": "Palloncini colorati.",
                "tags": "palloncini giallo rosso verde colori", 
                "width": "100"},
 
               {"id": "1", "file": "due.jpg",
                "description": "Asso di cuori.",
                "tags": "carte da gioco asso di cuori","width": "100"},
               
               {"id": "2", "file": "tre.jpg",
                "description": "L'orologiaio.",
                "tags": "orologio orologiaio occhi","width": "100"}];

function PhotoListCtrl($scope) {
  $scope.photos = photos;
}
/*function PhotoListCtrl($scope) {
  $scope.photos = [
    {"file": "uno.jpg", "description": "Palloncini colorati.", "width": "100", "tags": "palloncini giallo rosso verde colori"},
    {"file": "due.jpg", "description": "Asso di cuori.", "width": "100", "tags": "carte da gioco asso di cuori"}
  ];
}*/

function PhotoDetailCtrl($scope, $routeParams) {
  $scope.photo = photos[$routeParams.id];
}