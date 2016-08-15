(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('MenuCtrl', MenuCtrl);


   function MenuCtrl ($scope,$route,$location) {

    $scope.$route = $route;
    $scope.template = {'menu': 'templates/menu.tpl.html'};
    $scope.menuToggle = true;    
    // $scope.menuAdmin = true;    

     

       $scope.$on('$routeChangeSuccess', function() {
     
       var path = $location.path();
       console.log(path);
     
      if(path === '/') {
        $scope.menuToggle = false;    


      }else{
        $scope.menuToggle = true;    

      }
      // if(path === '/admin') {
      //   $scope.menuAdmin = true;    
        

      // }
    });
}

})();
 