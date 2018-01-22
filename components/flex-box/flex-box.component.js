'use strict';

angular
	.module('app')
	.component('flexBox', {
		controller: 'FlexBoxController',
		controllerAs: 'flexBoxVm',
		templateUrl: 'components/flex-box/flex-box.template.html'
	});