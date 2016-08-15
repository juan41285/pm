(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('PlanificacionCtrl', PlanificacionCtrl);


   function PlanificacionCtrl($scope) {

  		$scope.estados=[
          {text: 'Todos', estado:false},
          {text: 'Iniciado', estado:false},
          {text: 'Sin Presupuesto', estado:false},
          {text: 'En Proceso', estado:false},
          {text: 'Detenido', estado:false},
          {text: 'Finalizado', estado:false}
          ];

        $scope.fechas=[
          {text: 'Esta semana', estado:false},
          {text: 'Este mes', estado:false},
          {text: 'Hace 3 meses', estado:false},
          {text: 'Hace 6 meses', estado:false}
      
          ];
}

})();
 