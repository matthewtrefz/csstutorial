'use strict';

angular
	.module('app')
	.controller('FlexBoxController', FlexBoxController);
FlexBoxController.$inject = ['FlexBoxService'];

function FlexBoxController(FlexBoxService) {
	var flexBoxVm = this;

	flexBoxVm.itemList = FlexBoxService.getFlexItemList(3);
}