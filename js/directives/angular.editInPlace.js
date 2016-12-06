App.directive( 'editInPlace', function() {
  return {
    restrict: 'E',
    scope: { value: '=' },
    template: '<span class="todoName" ng-dblclick="edit()" ng-bind="value"></span><textarea ng-model="value"></input>',
    link: function ( $scope, element, attrs ) {

      var inputElement = angular.element( element.children()[1] );

      element.addClass( 'edit-in-place' );

      $scope.editing = false;

      $scope.edit = function () {
        $scope.editing = true;

        element.addClass( 'active' );

        inputElement.focus();
      };

      inputElement.on("blur",function  () {
        $scope.editing = false;
        element.removeClass( 'active' );
      });

    }
  };
});