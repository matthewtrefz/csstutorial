'use strict';

angular
	.module('app')
	.service('FlexBoxService', FlexBoxService);

FlexBoxService.$inject = [];

function FlexBoxService() {
	return {
		getFlexItemList: getFlexItemList
	};

	function getFlexItemList(requestedCount) {
		var itemList = [];

		for(var c=1; c <= requestedCount; c++){
			itemList.push(createFlexItem());
		}

		return itemList;
	}

	function createFlexItem() {
		var item = {
			color: null,
			height: null,
			width: null
		};
		return item;
	}
}