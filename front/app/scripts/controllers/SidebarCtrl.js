(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('SidebarCtrl', SidebarCtrl);


   function SidebarCtrl($scope) {

   
    $scope.template = {'sidebar': 'templates/sidebar.tpl.html'};
}

})();
 