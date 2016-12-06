"use strict";

var App = angular.module("todo", ["LocalStorageModule"]);

App.controller("ListCtrl", function ($scope, localStorageService) {

	$scope.init = function () {

		if (!localStorageService.get("commentList")) {
			$scope.model = [
				{
					name: "One", list: [
						{ taskName: "Lorem ipsum dolor sit amet"},
						{ taskName: "Lorem ipsum dolor sit amet"}, 
					]
				},
				{
					name: "Two", list: [
						{ taskName: "Ut enim ad minim veniam, quis nostrud"},
						{ taskName: "Ut enim ad minim veniam, quis nostrud"}
					]
				}
			];
		}else{
			$scope.model = localStorageService.get("commentList");
		}
		$scope.show = "All";
		$scope.currentShow = 0;
	};

	$scope.addListName = function () {
		$scope.model.splice(0, 0, {name: $scope.newTodoName, list: [{taskName: "comment..."}]});
		$scope.newTodoName = "";
	};
	$scope.deleteListName = function (item) {
		var index = $scope.model.indexOf(item);
		$scope.model.splice(index, 1);
	};


	$scope.addList = function () {
		$scope.model[$scope.currentShow].list.push({taskName: $scope.newTodo});
		$scope.newTodo = "";
	};

	$scope.changeList = function (i) {
		$scope.currentShow = i;
	};

	$scope.$watch("model",function (newVal,oldVal) {
		if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
			localStorageService.add("commentList",angular.toJson(newVal));
		}
	},true);

});