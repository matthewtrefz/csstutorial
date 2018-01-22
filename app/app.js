'use strict';

var app = angular.module('app', ['ngAnimate', 'ngRoute']);

angular
	.module('app')
	.controller('PageController', PageController);

PageController.$inject = ['$document'];

function PageController($document) {
	var pageVm = this;
	pageVm.title = 'Page Title';


	$document.title = pageVm.title;
}
