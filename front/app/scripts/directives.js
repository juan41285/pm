(function () {
  'use strict';
/****************/

function focus ($timeout) {
     return {
     scope : {
       trigger : '@focus'
     },
     link : function(scope, element) {
      scope.$watch('trigger', function(value) {
        if (value === "true") {
          $timeout(function() {
           element[0].focus();
          });
       }
     });
     }
    };
}; 
/***********/

function toggle(){
    return {
    restrict: 'A',
    link: function(scope, element, attrs){
      if (attrs.toggle=="tooltip"){
        $(element).tooltip();
      }
      if (attrs.toggle=="popover"){
        $(element).popover();
      }
    }
  };
};
/****************/
  angular
    .module('ppe.directives',['ngLocale'])
    .directive('focus',focus)
    .directive('toggle',toggle);

   
})();
