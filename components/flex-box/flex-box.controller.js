'use strict';

angular
	.module('app')
	.controller('FlexBoxController', FlexBoxController);
FlexBoxController.$inject = ['FlexBoxService'];

function FlexBoxController(FlexBoxService) {
	var flexBoxVm = this;

	flexBoxVm.itemList = FlexBoxService.getFlexItemList(3);

	flexBoxVm.demoControl = {
		alignItems: 'flex-start',
		direction: 'row',
		justifyContent: 'flex-start',
		wrap: 'wrap'
	};

	flexBoxVm.flexBoxPropertyList = FlexBoxService.flexPropertyValueList();
}