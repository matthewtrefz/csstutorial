'use strict';

angular
	.module('app')
	.controller('FlexBoxController', FlexBoxController);
FlexBoxController.$inject = ['FlexBoxService'];

function FlexBoxController(FlexBoxService) {
	var flexBoxVm = this;

	flexBoxVm.itemList = FlexBoxService.getFlexItemList(7);

	flexBoxVm.itemOrderList = getItemOrderList(flexBoxVm.itemList);

	flexBoxVm.demoControl = {
		alignItems: 'flex-start',
		direction: 'row',
		justifyContent: 'flex-start',
		wrap: 'wrap'
	};

	flexBoxVm.flexBoxPropertyList = FlexBoxService.flexPropertyValueList();

	function getItemOrderList(itemList) {
		var list = [0];

		for (var i = 1; i < itemList.length; i++) {
			list.push(i);
		}

		return list;
	}
}